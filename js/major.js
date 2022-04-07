//all of my arrays

var arrCoffeeTypes = ["espresso", "long black", "flat white", "latte", "cappuccino", "mocha", "chai latte", "dirty chai", "hot chocolate", "babycino"];

var arrMilkTypes = ["full-fat", "skim", "soy", "almond", "oat"];

var arrSize = ["small", "medium", "large"];

var arrTempLevel = ["iced", "warm", "normal", "extra hot", "super-duper hot"];

//calling arrays to display in drop-down menus

function loadCoffeeTypes() {
    for (var i = 0; i < arrCoffeeTypes.length; i++) {
        var tempString = "<option value='" + arrCoffeeTypes[i] + "' > " + arrCoffeeTypes[i] + " </option>";
        $('#coffeeType').append(tempString);
    }
}

loadCoffeeTypes();

function loadMilkTypes() {
    for (var i = 0; i < arrMilkTypes.length; i++) {
        var tempString = "<option value='" + arrMilkTypes[i] + "' > " + arrMilkTypes[i] + " </option>";
        $('#milkType').append(tempString);
    }
}

loadMilkTypes();

function loadSize() {
    for (var i = 0; i < arrSize.length; i++) {
        var tempString = "<option value='" + arrSize[i] + "' > " + arrSize[i] + " </option>";
        $('#size').append(tempString);
    }
}

loadSize();

function loadTempLevel() {
    for (var i = 0; i < arrTempLevel.length; i++) {
        var tempString = "<option value='" + arrTempLevel[i] + "' > " + arrTempLevel[i] + " </option>";
        $('#tempLevel').append(tempString);
    }
}

loadTempLevel();

//all the stuff for the navigation bar code and switching pages


$("#homePage").show();
$("#viewMenu").hide();
$("#orderHere").hide();
$("#aboutUs").hide();

function resetActiveNav() {
    document.getElementById("homeTab").classList.remove("active")
    document.getElementById("ourMenu").classList.remove("active")
    document.getElementById("orderForm").classList.remove("active")
    document.getElementById("aboutCafe").classList.remove("active")
}

$("#homeTab").click(function () {
    resetActiveNav();
    document.getElementById("homeTab").classList.add("active")
    $("#viewMenu").hide();
    $("#orderHere").hide();
    $("#aboutUs").hide();
    $("#homePage").show();
});

$("#ourMenu").click(function () {
    resetActiveNav();
    document.getElementById("ourMenu").classList.add("active")
    $("#homePage").hide();
    $("#orderHere").hide();
    $("#aboutUs").hide();
    $("#viewMenu").show();
});

$("#orderForm").click(function () {
    resetActiveNav();
    document.getElementById("orderForm").classList.add("active")
    $("#viewMenu").hide();
    $("#homePage").hide();
    $("#aboutUs").hide();
    $("#orderHere").show();
});
$("#aboutCafe").click(function () {
    resetActiveNav();
    document.getElementById("aboutCafe").classList.add("active")
    $("#viewMenu").hide();
    $("#orderHere").hide();
    $("#homePage").hide();
    $("#aboutUs").show();

});


/*to complete order and send it to owner

When button(completeOrder) = clicked:
    console.log (all inputs) --> for now

*/
$("#completeOrder").click(function () {
    console.log("the customer name is: " + document.getElementById("customerName").value)
    console.log("the customer phone number is: " + document.getElementById("customerPhone").value)
    console.log("the coffee type is: " + document.getElementById("coffeeType").value)
    console.log("the milk type is: " + document.getElementById("milkType").value)
    console.log("the drink size is: " + document.getElementById("size").value)
    console.log("the drink temperature is: " + document.getElementById("tempLevel").value)
    if(document.getElementById("decaf").checked){
        console.log("is there decaf? " + document.getElementById("decaf").value)
    } if(document.getElementById("noDecaf").checked){
        console.log("is there decaf? " + document.getElementById("noDecaf").value)
    }
    
    console.log("the amount of sugars is: " + document.getElementById("sugars").value)
    console.log("the payment type is: " + document.getElementById("paymentPaperMoney").value)
    console.log("the payment type is: " + document.getElementById("paymentOnlineMoney").value)
})

