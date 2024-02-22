// Get the innertext and convert them into a number to make calculations with it
function convertToNumber(elementid){
    const innerText = document.getElementById(elementid).innerText;
    const convert = parseInt(innerText);
    return convert;
}

console.log(typeof convertToNumber('Available-seats'));



// Get the seats in which user will click on
const seatsSelected = document.getElementsByClassName('selected');

function clickedSeat(){
for(const seat of seatsSelected){
    // get every indivisual clickable buttons on screen
    // add event listener to the variable of the individual clickable item
    seat.addEventListener('click', function(event){
        const buttonClick = event.target;   // here we got the click event thats happening on an element;
        
    // Now we will extract the text and show up on the screen when the button is pressed with the help of event.target.parentNode.childNodes
        const targetButton = buttonClick.parentNode.childNodes[1].innerText;
        console.log(targetButton)


    // Now to create some elements to show this information on the display to calculate
        const container = document.getElementById('selected-seats-container');
        console.log(container)

        // Create HTML elements to push the datas
        const div = document.createElement(div);


    })
  }
}