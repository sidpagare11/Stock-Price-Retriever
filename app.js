async function getStockPrice() {
    const ticker = document.getElementById('ticker').value;
    const date = document.getElementById('date').value;

    if (!ticker || !date) {
        document.getElementById('result').innerText = "Please enter both ticker symbol and date.";
        return;
    }

    try {
        
        //implement API key
        const response = await fetch(`https://api.polygon.io/v1/open-close/${ticker}/${date}?adjusted=true&apiKey=j_o_vpYLvsn9b3DNZaIN4gTfFp8IhyJ_`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('result').innerText = `The closing price of ${ticker} on ${date} was $${data.close}`;
        } else {
            document.getElementById('result').innerText = `Error: ${data.message}`;
        }
    } catch (error) {
        document.getElementById('result').innerText = "Failed to obtain data";
    }
}
