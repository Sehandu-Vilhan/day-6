

 let calHitory = ["10", "20", "30", "40"];

function clickMe() {

    let txtvalue = document.getElementById("txtSample").value;
   
    let num1 = parseInt(txtvalue);

    let txtvalue2 = document.getElementById("txtSample2").value;
 
    let num2 = parseInt(txtvalue2);

    let total = num1 + num2;
        console.log(total);

        document.getElementById("lblSelection").innerHTML = "<h1>" + txtvalue + "</h1>";
        document.getElementById("lblSelection2").innerHTML = "<h1>" + txtvalue2 + "</h1>";
        document.getElementById("totalx").innerHTML = "<h1>" + total + "</h1>";








calHitory.push(total);

    
    console.log(calHitory); 
    document.getElementById("totalx").innerHTML = "<h1>" + calHitory +  "</h1>";

    document.getElementById().innerHTML = "<h2>" +" num1 num2  "+ "</h2>";    
      

}


// function(red){

//       let red = num1 - num2;
//      console.log(total);
//     document.getElementById("redx").innerHTML = "<h1>" + red + "</h1>";

// }