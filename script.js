$('#ton').on('click', function() {
    let balance = $('#balance').html();
    let htmlBalance = document.getElementById('balance')
    let newBalance = parseFloat(balance) + 0.000001;

    console.log(newBalance)

    htmlBalance.innerHTML = newBalance.toFixed(6);
})