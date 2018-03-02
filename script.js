function updateCart() {
    document.getElementById("num-of-items").innerHTML = 0;
}

function addToCart() {
    var x1 = parseInt(document.getElementById("item1").value);
    var x2 = parseInt(document.getElementById("item2").value);
    var x3 = parseInt(document.getElementById("item3").value);
    var x4 = parseInt(document.getElementById("item4").value);
    var x5 = parseInt(document.getElementById("item5").value);
    var x6 = parseInt(document.getElementById("item6").value);    
    
    var totalItems = x1 + x2 + x3 + x4 + x5 + x6;
    document.getElementById("num-of-items").innerHTML = totalItems;
}

