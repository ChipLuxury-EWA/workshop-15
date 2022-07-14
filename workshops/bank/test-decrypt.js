const CryptoJS = require("crypto-js");
const fs = require('fs');
// const KEY = process.env.KEY;
const KEY = "m0nday"

if (KEY) {
    fs.readFile('tests_secret', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const bytes  = CryptoJS.AES.decrypt(data, KEY);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        fs.writeFile('test.js', originalText, err => {
            if (err) {
                console.error(err);
            }
        });
    });
} else {
    console.log("Please provide a key!");
    process.exit(1);
}