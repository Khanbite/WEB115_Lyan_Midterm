const button = document.getElementById("Button1");
const space = document.getElementById("space");

button.addEventListener('click', function () {
    let loanAmount = parseFloat(prompt("Enter the loan amount (without commas)"));
    let downPayment = parseFloat(prompt("Enter the down payment"));
    let termYears = parseInt(prompt("Enter the loan term in years (either 30 or 15)"));
    let interestRate = 0.045
    downPayment = (downPayment/100)*loanAmount;

    paraTermYears = document.createElement('p')
    paraTermYears.textContent = "Mortgage term in years: " + termYears;
    paraLoanAmount = document.createElement('p')
    paraLoanAmount.textContent = "Mortgage loan amount $" + loanAmount;
    paraDownPayment = document.createElement('p')
    paraDownPayment.textContent = "Mortgage down payment: $" + downPayment;
    paraInterestRate = document.createElement('p')
    paraInterestRate.textContent = "Mortgage Interest Rate: $" + interestRate;

    space.appendChild(paraTermYears)
    space.appendChild(paraLoanAmount)
    space.appendChild(paraDownPayment)
    space.appendChild(paraInterestRate)

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

    totalMortgage = loanAmount + totalInterest
    paraTotalMortgage = document.createElement('p')
    paraTotalMortgage.textContent = "Total Mortgage Paid: $" + totalMortgage
    space.appendChild(paraTotalMortgage)

    for(let i = 0; i <(termYears*12);i++){
        paraBigCalcTime = document.createElement('p')
        loanBalance = parseFloat(loanAmount - (monthlyPayment*(i+1)))
        paraBigCalcTime.textContent = "Month " + (i + 1) + "   " + loanBalance

        space.appendChild(paraBigCalcTime)
    }
})