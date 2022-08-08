
function getProduct(id){
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://fakestoreapi.com/products/"+id);
    console.log("https://fakestoreapi.com/products/"+id);
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);
    const div = document.createElement("div");
    div.className = "modal-body";
    div.innerHTML="<h5>"+ obj.description +"</h5>";
    document.getElementById("modal-content").appendChild(div);
    const div2 = document.createElement("div");
    div2.className = "modal-title";
    div2.innerHTML="<h5>"+ obj.title +"</h5>";
    document.getElementById("modal-header").appendChild(div2);

}
}


function getCat(name) {
    document.getElementById("categorias").style.display="none";
    document.getElementById("tarjetas").style.display="flex";
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://fakestoreapi.com/products/category/"+name);
    
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);
console.log("https://fakestoreapi.com/products/category/"+name);
    for (let i = 0; i <3; i++) {
          const div = document.createElement("div");
          div.className = "card col-sm-4";
          div.id=obj[i].id;
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

function getCategorias() {
    document.getElementById("tarjetas").style.display="none";
    document.getElementById("categorias").style.display="block";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products/categories");
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);

        for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        div.className = "card"; 
        div.id = obj[i]; 
        div.innerHTML =  "<h3 style='cursor: pointer;'>"+obj[i] +"</h3>" ;
      
        div.style="text-align: center";    
          document.getElementById("categorias").appendChild(div);
          }
          
    }
}

function getAll() {
    document.getElementById("categorias").style.display="none";
    document.getElementById("tarjetas").style.display="flex";
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://fakestoreapi.com/products/");
    
    xhttp.send();
    xhttp.onload = function() {
    const obj = JSON.parse(this.responseText);

    for (let i = 0; i <10; i++) {
          const div = document.createElement("div");
          div.className = "card col-sm-4";
          div.id=obj[i].id;
          document.getElementById("tarjetas").appendChild(div);
          div.innerHTML =  '   <div class="card-header" style="background: #007cff8a;font-weight: bold;text-align: center;text-transform: uppercase;">'+obj[i].category+'</div><div class="card"><div class="card-body" style="text-align: center;">'+
          '<h4 class="card-title">'+ obj[i].title +
          '</h4><img class="card-img-top" src="'+ obj[i].image +' " alt="Card image" style="width: 45%">'
          +'<h3 class="card-text" style="font-weight: revert;font-style: italic;">$'+ obj[i].price+'</h3>'+
       '<div class="input-group  "><button style="min-width: 2.5rem" class="btn btn-decrement btn-outline-secondary btn-minus" type="button"><strong>−</strong></button><input type="text" inputmode="decimal" style="text-align: center" class="form-control " placeholder=""><button style="min-width: 2.5rem" class="btn btn-increment btn-outline-secondary btn-plus" type="button"><strong>+</strong></button></div>'+
       ' <button type="button"   onclick="getProduct('+obj[i].id+')"class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button><a href="#" class="btn btn-primary">Agregar a carrito</a></div>'+
       '</div>' ;
            }
            for (let i = 10; i <18; i++) {
                const div = document.createElement("div");
                div.className = "card col-sm-4";
                div.id=obj[i].id;
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