var arrCoffeeTypes = ["espresso", "long black", "flat white", "latte", "cappuccino", "mocha", "chai latte", "dirty chai", "hot chocolate", "babycino"];

var arrMilkTypes = ["full-fat", "skim", "soy", "almond", "oat"];

var arrSize = ["small", "medium", "large"];

var arrTempLevel = ["iced", "warm", "normal", "extra hot", "super-duper hot"];

function loadCoffeeTypes(){
    for (var i = 0; i<arrCoffeeTypes.length; i++){
        var tempString = "<option value='" + arrCoffeeTypes[i] + "' > " + arrCoffeeTypes[i] + " </option>" ;
        $('#coffeeType').append(tempString);
    }
}

loadCoffeeTypes();

function loadMilkTypes(){
    for (var i = 0; i<arrMilkTypes.length; i++){
        var tempString = "<option value='" + arrMilkTypes[i] + "' > " + arrMilkTypes[i] + " </option>" ;
        $('#milkType').append(tempString);
    }
}

loadMilkTypes();

function loadSize(){
    for (var i = 0; i<arrSize.length; i++){
        var tempString = "<option value='" + arrSize[i] + "' > " + arrSize[i] + " </option>" ;
        $('#size').append(tempString);
    }
}

loadSize();

function loadTempLevel(){
    for (var i = 0; i<arrTempLevel.length; i++){
        var tempString = "<option value='" + arrTempLevel[i] + "' > " + arrTempLevel[i] + " </option>" ;
        $('#tempLevel').append(tempString);
    }
}

loadTempLevel();

$("#homePage").show();
$("#viewMenu").hide();
$("#orderHere").hide();
$("#aboutUs").hide();


$("#homeTab").click(function(){
    $("#viewMenu").hide();
    $("#orderHere").hide();
    $("#aboutUs").hide();
    $("#homePage").show();
  });

$("#ourMenu").click(function(){
    $("#homePage").hide();
    $("#orderHere").hide();
    $("#aboutUs").hide();
    $("#viewMenu").show();
  });  

$("#orderForm").click(function(){
    $("#viewMenu").hide();
    $("#homePage").hide();
    $("#aboutUs").hide();
    $("#orderHere").show();
  });
$("#aboutCafe").click(function(){
    $("#viewMenu").hide();
    $("#orderHere").hide();
    $("#homePage").hide();
    $("#aboutUs").show();
    
  });


/*to complete order and send it to owner

When button(completeOrder) = clicked:
    console.log (all inputs) --> for now

*/
$("#completeOrder").click(function(){
    console.log("[" + "#customerName" + ", " + "#customerPhone" + ", " + "#coffeeType" + ", " + "#milkType" + ", " + " #size" + ", " + "#tempLevel" + ", " + "#decaf" +  ", " + "#sugars" + ", " + "#payment" +"]")
})

