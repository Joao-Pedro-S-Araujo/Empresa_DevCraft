document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    const produtos = {
      1: {
        nome: "Loja Virtual Personalizada",
        descricao: "E-commerce sob medida com painel administrativo e integração com pagamentos.",
        preco: "R$ 499,90",
        imagem: "img/produtos/img01.png",
      },
      2: {
        nome: "Análise de Dados Personalizada",
        descricao: "Transformamos seus dados brutos em insights valiosos usando Python (Pandas, Matplotlib, etc.).",
        preco: "R$ 799,90",
        imagem: "img/produtos/img02.png",
      },
      3: {
        nome: " Sistema de Gestão Empresarial",
        descricao: "Um sistema completo para controle de estoque, vendas, clientes e relatórios.",
        preco: "R$ 299,90",
        imagem: "img/produtos/img03.png",
      },
    };
  
    const produto = produtos[id];
  
    if (produto) {
      document.querySelector(".detalhes-produto img").src = produto.imagem;
      document.querySelector(".detalhes-produto img").alt = produto.nome;
      document.querySelector(".info-produto h1").textContent = produto.nome;
      document.querySelector(".info-produto .descricao").textContent = produto.descricao;
      document.querySelector(".info-produto .preco").textContent = produto.preco;
    } else {
      document.querySelector(".container-detalhes").innerHTML =
        "<p>Produto não encontrado.</p>";
    }
  });
  