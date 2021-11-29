// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(var i =0; i< products.length;i++){
        if (products[i].id==id){
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList=[];    
}

// Exercise 3
function calculateSubtotals() {
    var totalGrocery=0;
    var totalBeauty=0;
    var totalClothes=0;
    // 1. Create a for loop on the "cartList" array 
    for(i in cart){
        
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        switch(cart[i].type){
            case "grocery":
                totalGrocery+=cart[i].subtotalWithDiscount;                
                break;
            case "beauty":
                totalBeauty+=cart[i].subtotalWithDiscount;
                break;
            case "clothes":
                totalClothes+=cart[i].subtotalWithDiscount;
                break;
        }
    }
    console.log("total Grocery= "+ totalGrocery);
    console.log("total Beauty= "+ totalBeauty);
    console.log("total Clothes= "+ totalClothes);
}

// Exercise 4
function calculateTotal() {
    var total=0;
    // Calculate total price of the cart either using the "cartList" array
    for (i in cart){        
        total+=cart[i].subtotal;
    }
    console.log("Total = "+total);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    cart=[];
    for (i in cartList){
        if(cart.includes(cartList[i]) ){
            for(e in cart){
                if(cart[e]==cartList[i]){
                    cart[e].quantity+=1;
                    cart[e].subtotal+=cart[e].price;
                    cart[e].subtotalWithDiscount+=cart[e].price;
                }
            }            
        }
        else{
            cartList[i].quantity=1;
            cartList[i].subtotal=cartList[i].price;
            cartList[i].subtotalWithDiscount=cartList[i].price;
            cart.push(cartList[i]);
        }
    }
    console.log(cart);
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
    for(i in cart){
        if(cart[i].id==1 && cart[i].quantity>2){
            cart[i].subtotalWithDiscount=cart[i].quantity*10;            
        }
        if(cart[i].id==3 && cart[i].quantity>=10){
            cart[i].subtotalWithDiscount=cart[i].subtotalWithDiscount*(2/3);            
        }
        
    }
    console.log(cart);
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
   
    for(i in products){
        if (products[i].id==id){
            if(cart.includes(products[i]) ){
                for(e in cart){
                    if(cart[e]==products[i]){
                        cart[e].quantity+=1;
                        cart[e].subtotal+=cart[e].price;
                        cart[e].subtotalWithDiscount+=cart[e].price;
                    }
                }                           
            }
            else{
                products[i].quantity=1;
                products[i].subtotal=products[i].price;
                products[i].subtotalWithDiscount=products[i].price;
                cart.push(products[i]);                
            }
        }
    }
    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {

    for(i in cart){
        if(cart[i].id=id){
            if (cart[i].quantity>1){
                cart[i].quantity-=1;
            }
            else{
                cart.splice(i, 1);
            }
        }
    }
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    console.log(cart);
    cartId=document.getElementById("list")
    
    for (i in cart){
        var fila=document.createElement("tr");
        var producto=document.createElement("td");
        var cantidad=document.createElement("td");
        producto.textContent=cart[i].name;
        cantidad.textContent=cart[i].quantity;
        fila.appendChild(producto);
        fila.appendChild(cantidad);
        cartId.appendChild(fila);
    }
    if(cart.length>0){
        var selecto = document.getElementById('select'); 
        selecto.style.display="none";
    }
}
