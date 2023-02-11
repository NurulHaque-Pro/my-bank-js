// Deposit & Balance Function

document.getElementById('deposit-btn').addEventListener('click', function () {

    // Input Field
    const depositAmount = document.getElementById('deposit-input');
    const getDepositAmount = depositAmount.value;
    const newDepositAmountNumber = parseFloat(getDepositAmount);

    if(isNaN(newDepositAmountNumber) === true){
        alert('Please input the amount');
        return;
    }
    // Display Field
    const defaultDeposit = document.getElementById('total-deposit');
    const defaultDepositValue = defaultDeposit.innerText;
    const defaultDepositAmountNumber = parseFloat(defaultDepositValue);

    // Sum

    const totalDeposit = newDepositAmountNumber + defaultDepositAmountNumber;

    defaultDeposit.innerText = totalDeposit;


    const totalAmount = document.getElementById('total-balance');
    const totalAmountValue = totalAmount.innerText;
    const totalAmountValueNumber = parseFloat(totalAmountValue);

    const finalTotalAmount = totalAmountValueNumber + newDepositAmountNumber;
    totalAmount.innerText = finalTotalAmount;


    // 
    depositAmount.value = '';

})

// Withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawalInput = document.getElementById('withdrawal-input');
    const withdrawalInputValue = parseFloat(withdrawalInput.value);

    const totalAmount = document.getElementById('total-balance');
    const totalAmountValue = parseFloat(totalAmount.innerText);

    // 
    const totalWithdraw = document.getElementById('total-withdrawal');
    const totalWithdrawValue = parseFloat(totalWithdraw.innerText);
    // 


    if (totalAmountValue >= withdrawalInputValue) {
        const finalTotalAmount = totalAmountValue - withdrawalInputValue;
        totalAmount.innerText = finalTotalAmount;

        const totalWithdrawAmount = totalWithdrawValue + withdrawalInputValue;

        totalWithdraw.innerText = totalWithdrawAmount;
    }
    else if(isNaN(withdrawalInputValue) === true){
        alert('Please input the amount')
    }
    else{
        alert('Insufficient balance')

    }


    // 
    // const 

    withdrawalInput.value = '';

})