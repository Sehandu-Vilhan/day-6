
function clickMe() {

  let txtvalue = document.getElementById("txtSample").value;
  document.getElementById("lblSelection").innerHTML = "<h1>" + txtvalue + "</h1>";
  let num1 = parseInt(txtvalue);

  let txtvalue2 = document.getElementById("txtSample2").value;
  document.getElementById("lblSelection2").innerHTML = "<h1>" + txtvalue2 + "</h1>";
  let num2 = parseInt(txtvalue2);

  let total = num1 + num2;
  console.log(total);

  document.getElementById("totalx").innerHTML = "<h1>" + total + "</h1>";

}
    
 