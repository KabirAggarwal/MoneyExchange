//DOM values 
const money1 = document.getElementById("money-one")
const money2 = document.getElementById("money-two")
const amt1 = document.getElementById("amount-one")
const amt2 = document.getElementById("amount-two")
const swap=document.getElementById("swap")
const rateEl=document.getElementById("rate")

// Event Listeners 
money1.addEventListener("change",calculate)
money2.addEventListener("change",calculate)
amt1.addEventListener("input",calculate)
amt2.addEventListener("input",calculate)
swap.addEventListener("click",exc)

//Working of the program
function calculate(){
   const curr1=money1.value;
   const curr2=money2.value;
   fetch(`https://api.exchangerate-api.com/v4/latest/${curr1}`)
   .then(res => res.json())
   .then(data => {
      const rate = data.rates[curr2];
      rateEl.innerText = `1 ${curr1} = ${rate} ${curr2}`;
      amt2.value = (amt1.value * rate).toFixed(2);
   });
}
calculate();
//Swap function for Change of values
function exc(){
    const temp=money1.value;
    money1.value=money2.value;
    money2.value=temp;
    calculate();
}
