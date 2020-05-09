function adicionarItemCarrinho(idProduto, imgProduto, nomeProduto, precoProduto){
    var item = {
        id: idProduto,
        imagem: imgProduto,
        nome: nomeProduto,
        preco: precoProduto
    };

    localStorage.setItem(idProduto, JSON.stringify(item));
    
    alert("Produto adicionado ao carrinho!");
}

function recuperarItemCarrinho(){

    //REcupera os itens salvos no localstorage
    const items = {...localStorage};    

    //Percorre todos os elementos no storage
    for (key in items) {
        var item = localStorage.getItem(key);
        var itemObj = JSON.parse(item);
        criarCardItens(itemObj);
    }

    //var item = JSON.parse(localStorage.getItem(10))    
    //console.log(item);
    //console.log(item.nome);
}

function criarCardItens(item){

    //Encontrar o fieldset ou elemento onde o novo input vai ser inserido
    var divitens = document.getElementById("divListaItens");
   
    //Criar o novo elemento usando o DOM
    var divcard = document.createElement("div");
    divcard.setAttribute("class","card");
    divcard.innerHTML = item.nome;

    var divSimples = document.createElement("div");
    divSimples.innerHTML = item.divSimples; 

    var imagem = document.createElement("img");
    imagem.setAttribute("src", item.imagem);
    imagem.setAttribute("class","img-thumbnail");
    imagem.setAttribute("style","width: 150px; height: 150px; margin-bottom: 20px; margin-top: 20px; margin-left: 20px; margin-right: 20px;");
   

    var input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("value","1");
    input.setAttribute("min","1"); 
    input.setAttribute("class","card-body");
    input.setAttribute("style","width: 80px; height: 60px; margin-left: 50px; border-color: white;");
    input.innerHTML = item.input;

    var i1 = document.createElement("i");
    i1.setAttribute("style","margin-left: 125px;");
    i1.innerHTML = item.preco;

    var i2 = document.createElement("i");
    i2.setAttribute("style","margin-left: 130px;");
    i2.innerHTML = item.preco;

    var span = document.createElement("span");
    span.setAttribute("class","fa fa-trash");
    span.setAttribute("style","margin-left: 400px;");

    divSimples.appendChild(imagem);
    divSimples.appendChild(input);
    divSimples.appendChild(i1);
    divSimples.appendChild(i2);
    divSimples.appendChild(span);

    divcard.appendChild(divSimples);

    //Acrescentando o novo input ao fieldset
    divitens.appendChild(divcard);

}