// Welcome to your first monday-u testing workshop!
// You just got a call from your bank!
// They need your help in analysing their client’s data.
// The bank will send you a list of clients, each with the following information:
//      1.The Client’s name
//      2.The Client’s current account balance

const { isArray } = require("tone");

// For example:
// [
//     { firstName: "Ziv", lastName: "Ventura", balance: "220" },
//     { firstName: "Vlad", lastName: "Mystetskyi", balance: "54" },
//     { firstName: "Yoni", lastName: "Levin", balance: "213" }
// ]

// The output should be the average balance
// In the example above, the balance will be 162.33, because:
// (220 + 54 + 213) / 3 = "162.33"

// -------------------------> TODO: READ ME! IMPORTANT! <-------------------------
// 1.The function should return a string, with decimal precision of 2. For example: "12.34", "750.33", etc...
// 2.If an exception occurs, simply return null
// 3.To test the function's result, see file index.js
const calculateBalance = (data) => {
    try {
        if (!isArray(data)) throw error
        let sum = 0;
        for (let index = 0; index < data.length; index++) {
            
            if (
                isNaN(data[index].balance) ||
                data[index].balance === "" ||
                data[index].balance === null
            )
                throw error;
            const balance = parseFloat(data[index].balance);
            // console.log(typeof balance);
            sum += balance;
            // console.log(sum);
        }
        const avgBalance = (sum / data.length).toFixed(2);
        return avgBalance.toString();
    } catch (error) {
        return null;
    }
};

module.exports = {
    calculateBalance,
};
