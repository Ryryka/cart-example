'use strict';
let totalPrice = 0;
let totalQuantity = 0;
function addProduct(event){ 
    let basket = [];    
    let product = {
        quantity: parseInt(event.target.parentElement.querySelector(".qty__item").value),
        price: parseInt(event.target.parentElement.querySelector("p").textContent)
    };

    let price = product.quantity * product.price;

    if( (!product.quantity) || (product.quantity < 0) ){
        alert("Select positive number of quantity");
        return;
    } else {
            for(let i in product){
                basket.push(product[i])
            }
    } 

    totalQuantity += product.quantity;
    totalPrice += price;
  
    document.querySelector("#total-price").textContent = totalPrice;    
    document.querySelector("#quantity").textContent = totalQuantity;  
}

function filter(){
    console.log(event)
   let optionType = parseInt(document.querySelector(".select-box> select> option:checked").value);
   let optionPrice = parseInt(document.querySelector(".price-select-box> select> option:checked").value);
   let product = document.querySelectorAll(".product-box__item");  

    product.forEach(el =>{       
       let type = parseInt(el.getAttribute('data-type'));
       let price = parseInt(el.getAttribute('data-price'));       
        console.log(el)
        el.style.display = 'flex';
        if( (type != optionType) && (optionType != 0) ){
            el.style.display = 'none';
        } 
       if( (price > optionPrice) && (optionPrice != 0)  ) {
            el.style.display = 'none';
        }
   })
}

function checkout(){
    let modal = document.querySelector(".modal");
    let close = document.querySelector(".close");
    
    modal.style.display = "block";
  
    close.onclick = function() {
        modal.style.display = "none";
    }
}

function validate(){
    let inputName = document.querySelector("#user-name").value.trim();
    let inputEmail = document.querySelector("#user-email").value.trim();
  
    if( (!inputName) || (!inputEmail) ){
        alert('поля формы заполнены некорректно');
        return false;   
    }
    else{            
        alert('Спасибо за покупку!'); 
        inputName = "XXX";
        inputEmail = "XXX"; 
        return true;             
    }    
}

/*add price-atribute*/
function addPriceAtrb(){
    let el = document.querySelectorAll(".product-box__meta>p");   
    el.forEach(element => {
        let price = parseInt(element.textContent);
        element.setAttribute('data-price', price);        
    });   
}
/*add event-listener on Add btn*/
function btnEvent(){
    let btnAdd = document.querySelectorAll(".product-box__btn");
    btnAdd.forEach(btn => {        
        btn.addEventListener("click", addProduct);        
    });  
}
function selectEvent(){
    let select = document.querySelectorAll(".select-control");
    select.forEach(select => {        
        select.addEventListener("change", filter);        
    });  
}
function checkoutEvent(){
    let btn = document.querySelector(".btn-check");
    btn.addEventListener("click", checkout);
}
addPriceAtrb();
btnEvent();
selectEvent();
checkoutEvent();