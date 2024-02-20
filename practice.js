// Practice js for Ticket.com



const selected = document.getElementsByClassName('selected');
let count = 0;

for (const select of selected){
    select.addEventListener('click', function(e){
        count = count + 1;
        
        
        setInnerText('total-seats', count);
        getTextNumber('Available-seats');

        
        // const text = document.getElementsByClassName('selected').innerText;
        // console.log(text);
        const text = e.target.parentNode.childNodes[1].innerText;  // More effective and accurate
        const selectedContainer = document.getElementById('seat-number-container');

        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.width = '400px';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        // li.style.border = '2px solid black';

        const p = document.createElement('p');
        p.innerText = text;

        const p2 = document.createElement('p');
        p2.innerText = "Economy";
        
        //calculating total price
        const p3 = document.createElement('p');
        p3.innerText = 550;
        let convert = parseInt(p3.innerText);

        if(typeof convert === 'number'){
           const total = document.getElementById('total-price').innerText;
           const number = parseInt(total);
           convert = number + convert;
        }
        setInnerText('total-price', convert)
        setInnerText('grand-total', convert)
        

        li.appendChild(p);         
        li.appendChild(p2);        
        li.appendChild(p3);                         // When user selects a seat, it will append in different "p."
        selectedContainer.appendChild(li);
    })
}

setInnerText('total-seats', 0); // Setting a dynamic text to display outside the functions
setInnerText('total-price', 0);
setInnerText('grand-total', 0)






// Component Functions

function getText(elementid){
   const element = document.getElementById(elementid).innerText;
   return element;
}



function getTextNumber(elementid){
    const element = document.getElementById(elementid).innerText;
    const converted = parseInt(element);
    return converted;
}



// Id = The place the text will set || value = That will show up on the place
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}