
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products/");
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);
    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");
      if(i == 1){ div.className = "carousel-item active"; 
      }else{
        div.className = "carousel-item";
      }
      div.style="text-align: center";
//div.textContent = `Item número ${i}`;
      document.getElementById("carruselProductos").appendChild(div);
      div.innerHTML =  ' <img src="'+obj[i].image +'" alt="" class="card-img-top" style="width: 40%">'+
      ' <div class="carousel-caption"><h3>'+ obj[i].title+'</h3></div>' ;
        }
    


    for (let i = 0; i < 12; i++) {
          const div = document.createElement("div");
          div.className = "card col-sm-4";
          div.id=obj[i].id;
  //div.textContent = `Item número ${i}`;
          document.getElementById("tarjetas").appendChild(div);
          div.innerHTML =  '   <div class="card-header" style="background: #007cff8a;font-weight: bold;text-align: center;text-transform: uppercase;">'+obj[i].category+'</div><div class="card"><div class="card-body" style="text-align: center;">'+
          '<h4 class="card-title">'+ obj[i].title +
          '</h4><img class="card-img-top" src="'+ obj[i].image +' " alt="Card image" style="width: 45%">'
          +'<h3 class="card-text" style="font-weight: revert;font-style: italic;">$'+ obj[i].price+'</h3>'+
       '<a href="#" class="btn btn-primary">Agregar a carrito</a></div>'+
       '</div>' ;
            }
        }

  }