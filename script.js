const purpleCalculateBtn = document.getElementById('purple-calculate-btn');
const cyanCalculateBtn = document.getElementById('cyan-calculate-btn');
const coralCalculateBtn = document.getElementById('coral-calculate-btn');

function calculatePurple() {
    const purpleInput1 = parseInt(document.getElementById('purple-input-1').value);
    const purpleInput2 = parseInt(document.getElementById('purple-input-2').value);
    //check if the inputs are filled by numbers and if the % is less than or equal to 100
    if ((purpleInput1.length !== 0 && purpleInput2.length !== 0) && (!isNaN(purpleInput1) && !isNaN(purpleInput2)) && (purpleInput1 <= 100)) {
        //calculate the discount
        let percentage = (purpleInput1 / 100) * purpleInput2;
        console.log(percentage);
        let result = purpleInput2 - percentage;
        console.log(result);
        //show the results
        const purplePay = document.getElementById('purple-pay').innerHTML="$" + result;
        const purpleSave = document.getElementById('purple-save').innerHTML="$" + percentage + "!";
        const purpleSuccess = document.getElementById('purple-results-success-toggle').style.display = "block";
        const purpleError = document.getElementById('purple-results-error-toggle').style.display = "none";
    } else {
        const purpleSuccess = document.getElementById('purple-results-success-toggle').style.display = "none";
        const purpleError = document.getElementById('purple-results-error-toggle').style.display = "block";
    }
}

function calculateCyan() {
    const cyanInput1 = parseInt(document.getElementById('cyan-input-1').value);
    const cyanInput2 = parseInt(document.getElementById('cyan-input-2').value);
    const cyanInput3 = parseInt(document.getElementById('cyan-input-3').value);
    //check if the inputs are filled by numbers and if the % is less than or equal to 100
    if ((cyanInput1.length !== 0 && cyanInput2.length !== 0 && cyanInput3.length !== 0) && (!isNaN(cyanInput1) && !isNaN(cyanInput2) && !isNaN(cyanInput3)) && (cyanInput1 <= 100) && (cyanInput2 > 1)) {
        //calculate the discount
        let percentage = (cyanInput1 / 100) * cyanInput3;
        console.log(percentage);
        let totalPrice = cyanInput2 * cyanInput3;
        console.log(totalPrice);
        let result = totalPrice - percentage;
        console.log(result)
        //show the results
        const cyanPay = document.getElementById('cyan-pay').innerHTML="$" + result;
        const cyanSave = document.getElementById('cyan-save').innerHTML="$" + percentage + "!";
        const cyanSuccess = document.getElementById('cyan-results-success-toggle').style.display = "block";
        const cyanError = document.getElementById('cyan-results-error-toggle').style.display = "none";
    } else {
        const cyanSuccess = document.getElementById('cyan-results-success-toggle').style.display = "none";
        const cyanError = document.getElementById('cyan-results-error-toggle').style.display = "block";
    }
}

function calculateCoral() {
    const coralInput1 = parseInt(document.getElementById('coral-input-1').value);
    const coralInput2 = parseInt(document.getElementById('coral-input-2').value);
    const coralInput3 = parseInt(document.getElementById('coral-input-3').value);
    //check if the inputs are filled by numbers and if the amount of free units is lower than the amount of paid units
    if ((coralInput1.length !== 0 && coralInput2.length !== 0 && coralInput3.length !== 0) && (!isNaN(coralInput1) && !isNaN(coralInput2) && !isNaN(coralInput3)) && (coralInput1 > coralInput2)) {
        //calculate the discount
        let totalPrice = coralInput1 * coralInput3;
        console.log(totalPrice);
        let result = totalPrice - (coralInput2 * coralInput3);
        console.log(result);
        let save = totalPrice - result;
        console.log(save);
        //show the results
        const coralPay = document.getElementById('coral-pay').innerHTML="$" + result;
        const coralSave = document.getElementById('coral-save').innerHTML="$" + save + "!";
        const coralSuccess = document.getElementById('coral-results-success-toggle').style.display = "block";
        const coralError = document.getElementById('coral-results-error-toggle').style.display = "none";
    } else {
        const coralSuccess = document.getElementById('coral-results-success-toggle').style.display = "none";
        const coralError = document.getElementById('coral-results-error-toggle').style.display = "block";
    }
}

purpleCalculateBtn.addEventListener("click", calculatePurple);
cyanCalculateBtn.addEventListener("click", calculateCyan);
coralCalculateBtn.addEventListener("click", calculateCoral);
