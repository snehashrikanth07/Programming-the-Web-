let originalprice = (document.getElementsByClassName("price-original")[0].textContent.replace('₹', '').replace(',', ''));    
let originalPriceNumeric = parseFloat(originalprice);
console.log("Original Price (Numeric): " + originalPriceNumeric);

let currentpricelement = document.getElementsByClassName("price-current")[0];
console.log(currentpricelement);

let currentprice = currentpricelement.textContent;
console.log(currentprice);

let currentpricevalue = (currentprice.replace('₹', '').replace(',', ''));
console.log(currentpricevalue);

finalprice = parseInt(currentpricevalue.replace(',', '')) + 100;
console.log(finalprice);

let mrp = document.getElementsByClassName("price-original");
console.log(mrp);

let mrpvalue = mrp[0].textContent;
console.log(mrpvalue);

let mrpvalueOnly = (mrpvalue.replace('₹', '').replace(',', ''));
console.log(mrpvalueOnly);

let Buttonelement = document.getElementsByClassName("add-to-cart")[0];
 
Buttonelement.addEventListener('click', function() {
    let Button = Buttonelement.textContent;
    console.log(Button);
    Buttonelement.textContent = "Added!";
    Buttonelement.style.backgroundColor = "gray";
    setTimeout(() => {
        Buttonelement.textContent = "Add to Cart"; 
        Buttonelement.style.backgroundColor = ""; 
    }, 1500);

    alert("added to cart");
})

let newdiscount = document.getElementById("apply-discount");

newdiscount.addEventListener('click', function() {
    let discountinput = document.getElementById("discount").value;
    console.log(discountinput);
    
    let discountedprice = originalPriceNumeric - (originalPriceNumeric * parseFloat(discountinput) / 100);
    console.log(discountedprice);
    
    currentpricelement.textContent = "₹" + discountedprice.toFixed(2);
    
    let productCard = document.getElementsByClassName("card")[0];
    if (parseFloat(discountinput) >= 50) {
        productCard.style.backgroundColor = "lightyellow";
    } else {
        productCard.style.backgroundColor = "white";
    }
});

document.getElementById("qty").addEventListener("input", function() {
    let quantity = parseInt(this.value);
    
    let pricePerItem = originalPriceNumeric; 
    let totalPrice = quantity * pricePerItem;
    
    currentpricelement.textContent = "₹" + totalPrice.toFixed(2);
});