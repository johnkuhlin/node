/*
You are given two arrays of data.
The arrays are simple string arrays.

The first contains stock tickers and their price. The ticker and associated price are adjacent to each other.
For example:
    [ "AAPL", "100.07", "IBM",  "192.53", "MSFT", "46.70" ]

The second array contains a list of stock tickers that are part of a portfolio. A ticker from the first array may or may not be present in the second array.
For example:
    [ "IBM", "MSFT" ]

Write a program that will join the information contained in both arrays and return a new string array.
For example:
 
    [ "AAPL,100.07,N", "IBM,192.53,Y", "MSFT,46.70,Y" ]

where is_owned = Y if the ticker is in the portfolio (is in the second array), N otherwise
 
*/

let ticker = [ "AAPL", "100.07", "IBM",  "192.53", "MSFT", "46.70" ];
let portfolio = [ "IBM", "MSFT" ];
let output = [];
let obj = {};

portfolio.forEach((p) => {
    obj[p] = 1;
});
for (let i=0; i<ticker.length; i+=2) {
    output.push(ticker[i] + ',' + ticker[i+1] + ',' + ((obj[ticker[i]] === 1) ? 'Y' : 'N'));
}
console.log(JSON.stringify(output, null, 4));

