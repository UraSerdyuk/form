let root = document.querySelector('.root');

// link 

const currencyList = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';



function request(link) {
    fetch(link)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console .log(data[0]);
            for(let i = 0; i < data.length; i++){
                var p = document.createElement("p");
                p.textContent = ` ${data[i].rank} name : ${data[i].name} ; price : ${data[i].price_usd} `;
                root.appendChild(p);
            }
            return data;
        })
}
request(currencyList);

console.log('message from js');