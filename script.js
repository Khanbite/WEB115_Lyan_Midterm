const button = document.getElementById("Button1");
const space = document.getElementById("space");

button.addEventListener('click', function () {
    let loanAmount = parseFloat(prompt("Enter the loan amount (without commas)"));
    let downPayment = parseFloat(prompt("Enter the down payment"));
    let termYears = parseInt(prompt("Enter the loan term in years (either 30 or 15)"));
    let interestRate = 0.0575
    let interestRateDisplay = 5.75
    downPayment = (downPayment/100)*loanAmount;

    paraTermYears = document.createElement('p')
    paraTermYears.textContent = "Mortgage term in years: " + termYears;
    paraLoanAmount = document.createElement('p')
    paraLoanAmount.textContent = "Mortgage loan amount $" + loanAmount;
    paraDownPayment = document.createElement('p')
    paraDownPayment.textContent = "Mortgage down payment: $" + downPayment;
    paraInterestRateDisplay = document.createElement('p')
    paraInterestRateDisplay.textContent = "Mortgage Interest Rate: %" + interestRateDisplay;

    space.appendChild(paraTermYears)
    space.appendChild(paraLoanAmount)
    space.appendChild(paraDownPayment)
    space.appendChild(paraInterestRateDisplay)

    monthlyPayment = ((interestRate/12)*loanAmount)/(1-(1+(interestRate/12))**(termYears*-12));
    monthlyPayment = parseFloat(monthlyPayment.toFixed(2))
    paraMonthlyPayment = document.createElement('p')
    paraMonthlyPayment.textContent = "Monthly Mortgage Payment: $" + monthlyPayment;
    space.appendChild(paraMonthlyPayment)

    totalInterest = (monthlyPayment*termYears*12)-loanAmount
    totalInterest = parseFloat(totalInterest.toFixed(2))
    paraTotalInterest = document.createElement('p')
    paraTotalInterest.textContent = "Total Interest Amount: $" + totalInterest
    space.appendChild(paraTotalInterest)

    totalMortgage = (loanAmount + totalInterest).toFixed(2)
    paraTotalMortgage = document.createElement('p')
    paraTotalMortgage.textContent = "Total Mortgage Paid: $" + totalMortgage
    space.appendChild(paraTotalMortgage)

    for(let i = 1; i <=(termYears*12);i++){
        let interestPayment = loanAmount * (interestRate / 12);
        let principalPayment = monthlyPayment - interestPayment;
        loanAmount = loanAmount - principalPayment;
        loanAmount = parseFloat(loanAmount.toFixed(2));

        paraBigCalcTime = document.createElement('p');
        paraBigCalcTime.textContent = "Month " + (i) + " | Interest: $" + interestPayment.toFixed(2) + " | Principal: $" + principalPayment.toFixed(2) + " | Balance: $" + (loanAmount > 0 ? loanAmount : 0);

        space.appendChild(paraBigCalcTime);
    }

    let finalMessage = "This ends the Amortization Calculator"
    paraFinalMessage = document.createElement('p')
    paraFinalMessage.textContent = finalMessage;
})