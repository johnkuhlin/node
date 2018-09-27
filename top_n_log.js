/*
For this question, you are given a log file from a simple web server. Each line in the log file contains a URL and nothing else. Your job is to write code that will download the log file from the internet, process it, and output the most popular URL in the file. You do not need to normalize the URLs in the log files.

You can find the log file at:
https://gist.githubusercontent.com/zach-karat/dd26fe2387c1f687f655abcca1d688d7/raw/b38f34e31ecd9fd4c3a870722ef321d7d16ef54e/gistfile1.txt

Let's say we wanted to extract the top N URLs instead of the single top URL. Can you change your code to make N a configurable parameter?
*/

var request = require('request');
var log_url = 'https://gist.githubusercontent.com/zach-karat/dd26fe2387c1f687f655abcca1d688d7/raw/b38f34e31ecd9fd4c3a870722ef321d7d16ef54e/gistfile1.txt';

var top_n = 5;

request(log_url, { json: false }, (err, res, body) => {
    if (err) { return console.log(err); }

    let urls = {};

    body.split('\n').forEach((url) => {
        if (urls[url]) { urls[url].count++; }
        else { urls[url] = { count: 1 }; }
    }); 
    let top_urls = [];
    let keys = Object.keys(urls);
    let url, count;

    for(let n = 0; n < top_n; n++) {
        count = 0;
        keys.forEach((k) => {
            if (urls[k].selected) { return; }

            if (urls[k].count > count) {
                url = k;
                count = urls[k].count;
            }
        });
        urls[url].selected = true;
        top_urls.push({ url: url, count: count });
    }
    console.log(JSON.stringify(top_urls, null, 4));
});
