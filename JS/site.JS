//get the values from the UI
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];
    
    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
         //we call displayNumbers
         displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
    
}

    //generate numbers from the startValue to the endValue
    //logic funtion(s)
function generateNumbers(startValue, endValue) {

    let numbers = [];


    //we want to get all numbers from start to end

    for (let index = startValue; index <= endValue; index++) {
        //this will execute in a loop until intex = endValue
        numbers.push(index);
    }
    
    return numbers;

}

//display the numbers and mark even numbers bold
//display or view function(s)
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}
