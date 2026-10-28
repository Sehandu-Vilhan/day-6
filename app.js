

 let calHitory = [];

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




    //  for (let i = 0; i < array.length; i++) {
    //     const element = array[calHitory];



        calHitory.push(num1+"+"+num2+ "=" + total );

     
      for (let i = 0; i < calHitory; i++) {
          const element = calHitory[i];

        document.getElementById("calHitory").innerHTML+= "<li>" + i +  "</li>";


      }

    

}


// function(red){

//       let red = num1 - num2;
//      console.log(total);
//     document.getElementById("redx").innerHTML = "<h1>" + red + "</h1>";

// }