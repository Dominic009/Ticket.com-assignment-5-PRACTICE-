// Practice js for Ticket.com



const selected = document.getElementsByClassName('selected');
let count = 0;

const seats = document.querySelectorAll('.selected');
const totalSeats = document.getElementById('total-seats');


for (const select of selected){
    select.addEventListener('click', function(e){
        count = count + 1;

        let countOfSeats = parseInt(totalSeats.innerText) || 0;

        if(countOfSeats < 6){
            select.style.backgroundColor = '#1DD100';
        }else if(countOfSeats === 6){
            select.removeEventListener('click', clickHandler);
        }

        setInnerText('total-seats', count);
        getTextNumber('Available-seats');

        
        // const text = document.getElementsByClassName('selected').innerText;
        // console.log(text);
        const text = e.target.parentNode.childNodes[1].innerText;  // More effective and accurate
        const selectedContainer = document.getElementById('seat-number-container');


        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.width = '100%';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        // li.style.border = '2px solid black';
        
        const p = document.createElement('p');
        p.innerText = text;
        
        const p2 = document.createElement('p');
        p2.innerText = "Economy";
        
        // Calculating total price
        const price = 550; // Example price, replace with your logic to get the price
        const p3 = document.createElement('p');
        p3.innerText = price;
        
        // Get the total price element
        const totalPriceElement = document.getElementById('total-price');
        let totalPrice = parseInt(totalPriceElement.innerText) || 0;
        
        // Update total price
        totalPrice += price;
        totalPriceElement.innerText = totalPrice;
        
        // Update grand total
        document.getElementById('grand-total').innerText = totalPrice;
        
        li.appendChild(p);         
        li.appendChild(p2);        
        li.appendChild(p3);                         // When the user selects a seat, it will append in different "p."
        selectedContainer.appendChild(li);
        


        const id = document.getElementById('Available-seats');
        let availableSeats = getText('Available-seats');
        availableSeats--;

        id.innerText = availableSeats;
    })
}

setInnerText('total-seats', 0); // Setting a dynamic text to display outside the functions
setInnerText('total-price', 0);
setInnerText('grand-total', 0)

 
const inputNumber = document.getElementById('phone-number');
const button = document.getElementById('next-button');

function validateNumber(number){
    let phoneRegex = /^\d{11}$/;
   return phoneRegex.test(number)

}

    inputNumber.addEventListener('input', function(){
        let phoneNumber = inputNumber.value;
        const isValidNumber = validateNumber(phoneNumber);

        if(isValidNumber){
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', 'disabled');
        }
    })


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



const coupons = ['NEW15', 'COUPLE20'];

function isValidCoupon(userInput) {
    return coupons.includes(userInput);
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const userInput = document.getElementById('input-coupon').value.toUpperCase();
    const messageElement = document.getElementById('message');

    const total = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(total);

    const amount = document.getElementById("discount-amount");
    const discountedAmount = totalPrice * 15 / 100;
    amount.innerText = discountedAmount;

    const gTotal = document.getElementById('grand-total').innerText;
    const converted = parseInt(gTotal);
    const grandTotal = converted - discountedAmount;
    gTotal.innerText = grandTotal;
    setInnerText('grand-total', grandTotal)
    if (isValidCoupon(userInput)) {
        messageElement.textContent = "Discount";
        messageElement.style.color = "green";
        document.getElementById('input-coupon').classList.add('hidden');
        document.getElementById('apply-btn').classList.add('hidden');
    } else {
        messageElement.textContent = "Invalid coupon";
        messageElement.style.color = "red";
    }
});


