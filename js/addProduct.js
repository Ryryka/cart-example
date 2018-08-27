export default function addProduct(event){ 
    'use strict';
    let totalPrice = 0;
    let totalQuantity = 0;

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
