//Funciones que se cargan previo a la carga de index y carrito
//uso de API GRatis fakestore
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://fakestoreapi.com/products/");
    
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);
    for (let i = 0; i < 4; i++) {//al ejecutar ajax se usan 4 productos para carrusel
      const div = document.createElement("div");
      if(i == 1){ div.className = "carousel-item active"; 
      }else{
        div.className = "carousel-item";
      }
      div.style="text-align: center";      document.getElementById("carruselProductos").appendChild(div);
      div.innerHTML =  ' <img src="'+obj[i].image +'" alt="" class="card-img-top" style="width: 40%">'+
      ' <div class="carousel-caption"><h3>'+ obj[i].title+'</h3></div>' ;
        }
        }

  }



  function loadCarrito() {
    let total=0;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products/");
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);


    for (let i = 0; i < 3; i++) { //se crean elementos para el carrito
          const div = document.createElement("table");
          div.className = "order-table";
          div.id=obj[i].id;
          total=total+obj[i].price;
          document.getElementById("compras").appendChild(div);
          div.innerHTML =  '  <tbody><tr> <td><img src="'+obj[i].image+'" class="full-width"></img></td>'+
        '<td><br> <span class="thin">'+obj[i].category+'</span><br> descripcion<br></span></td>'+
'         </tr><tr><td>       <div class="price">$'+obj[i].price+'</div> </td></tr></tbody> <div class="line"></div>' ;
            }

            document.getElementById('total').innerHTML ='$'+total;
        }

  }