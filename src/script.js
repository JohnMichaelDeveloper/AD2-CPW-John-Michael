



// ----------------- HDs/SSDs -------------------

var descricao = ["Western Digital","Seagate","Samdisk","Kingston","Kingston","Western Digital"];
var imagem = ["/img/HD_WD_500gb_70.jpg","/img/HD_Seagate_1Tb_70.jpg","/img/SSD_Samdisk_480Gb_70.jpg","/img/SSD_Kingston_960Gb_70.jpg","/img/SSD_Kingston_M2_5000Gb_70.jpg","/img/SSD_WD_M2_240Gb_70.jpg"];
var interface = ["Interface: HD Sata III", "Interface: HD Sata III","Interface: SSD Sata III","Interface: SSD Sata III","Interface: SSD M2","Interface: SSD M2"];
var capacidade = ["Capacidade: 500 Gb", "Capacidade: 1 Tb", "Capacidade: 480 Gb", "Capacidade: 960 Gb", "Capacidade: 500 Gb", "Capacidade: 240 Gb"];
var preco = ["Preço: R$ ","Preço: R$ ","Preço: R$ ","Preço: R$ ","Preço: R$ ","Preço: R$ "];
var custo = ["170,00","350,00","380,00","700,00","410,00","270,00"];    


  function westernDigital(){       
    document.getElementById("titDes").innerHTML = descricao[0];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[0] + " class=" + "imgPrd" + "></img>";    
    document.getElementById("int").innerHTML = interface[0];
    document.getElementById("cap").innerHTML = capacidade[0];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[0] + "</span>";
        
  }
  function seagate(){       
    document.getElementById("titDes").innerHTML = descricao[1];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[1] + " class=" + "imgPrd" + "></img>";  
    document.getElementById("int").innerHTML = interface[1];
    document.getElementById("cap").innerHTML = capacidade[1];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[1] + "</span>";
          
  }
  function samdisk(){       
    document.getElementById("titDes").innerHTML = descricao[2];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[2] + " class=" + "imgPrd" + "></img>";  
    document.getElementById("int").innerHTML = interface[2];
    document.getElementById("cap").innerHTML = capacidade[2];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[2] + "</span>";
         
  }
  function kingston960(){
    document.getElementById("titDes").innerHTML = descricao[3];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[3] + " class=" + "imgPrd" + "></img>";  
    document.getElementById("int").innerHTML = interface[3];
    document.getElementById("cap").innerHTML = capacidade[3];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[3] + "</span>";
     
  }
  function kingston500(){
    document.getElementById("titDes").innerHTML = descricao[4];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[4] + " class=" + "imgPrd" + "></img>";  
    document.getElementById("int").innerHTML = interface[4];
    document.getElementById("cap").innerHTML = capacidade[4];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[4] + "</span>";
    
  }
  function wD240(){
    document.getElementById("titDes").innerHTML = descricao[5];
    document.getElementById("imgDes").innerHTML = "<img src=" + imagem[5] + " class=" + "imgPrd" + "></img>";  
    document.getElementById("int").innerHTML = interface[5];
    document.getElementById("cap").innerHTML = capacidade[5];
    document.getElementById("pre").innerHTML =  "Preço: R$ " + "<span>" + custo[5] + "</span>";
     
  }
 
  