// const url = "ddr4Kingston.html"
// const ddr4K = document.querySelector('#ddr4K')

// function openInNewTab(url){
//   const win = window.open(url, '_blank')
//   win.focus()
// }
// btn.addEventListener('click', () =>{
//   openInNewTab(url)
// })
 



 
// 
var ddr3K = {tipo: 'DDR3', fabricante: 'Kingston', capacidade: '4 Gb', preco: '159,90'};
var ddr3S = {tipo: 'DDR3', fabricante: 'Samsung', capacidade: '8 Gb', preco: '240,00'};
var ddr4K = {tipo: 'DDR4', fabricante: 'Kingston Fury', capacidade: '8 Gb', preco: '237,80'};
var ddr4C = {tipo: 'DDR4', fabricante: 'Corsair Vengeance', capacidade: '8 Gb', preco: '245,00'};
var opcao;
var i, text, fLen;
 fLen = ddr3K.length;
 text= "<div>";
// Se o botão solicitado for igual ddr3K então, se não...


if(document.getElementById('ddr3K') === ddr3K){
  opcao = ddr3K
} else if(document.getElementById('ddr3S') === ddr3S){
  opcao = ddr3S
} else if(document.getElementById('ddr4K') === ddr4K){
  opcao = ddr4K
} else if(document.getElementById('ddr4C') === ddr4C){
  opcao = ddr4C
}
// se a opção for igual  ddr3K então
switch(opcao){
   case ddr3K :
      for (i = 0; i < fLen; i++){
        text += "<div> Tipo " + ddr3K.tipo + "</div>";
        
      }
   case ddr3S :
      for (i = 0; i < fLen; i++){
        text += "<div> Tipo " + ddr3S.tipo + "</div>";
        
      }
   case ddr4K :
      for (i = 0; i < fLen; i++){
        text += "<div> Tipo " + ddr4K.tipo + "</div>";
        
      }
   case ddr4C :
      for (i = 0; i < fLen; i++){
        text += "<div> Tipo " + ddr4C.tipo + "</div>";
        
      }


 }



function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if(display == "none")
      document.getElementById(el).style.display = 'block';
     
  else
      document.getElementById(el).style.display = 'none';
      
}


// function abrirProduto(){
//   var prodMemorias = window.open("ddr4Kingston.html","secao","width:100,height=100,top=50,left=50");
// }


// var jan;

// function abre_bas() { // abre a pagina de bolas de basquete

//     jan = window.open("Bolas_bas.html", "jan", "toolbar=no,scrollbars=no,resizable=no,top=500,width=300,height=400");
// }

// var descricao = new Array()
//    descricao[0] = "Bola de Basquete Wilson";
//    descricao[1] = "Bola de Volei Wilson";
//    descricao[2] = "Bola de Volei Penalty";


//    function bas(){

//     document.getElementById("des").innerHTML = descricao[0];
//     document.getElementById("img").innerHTML = imagem[0];
//     document.getElementById("pre").innerHTML = preco[0];
//     }