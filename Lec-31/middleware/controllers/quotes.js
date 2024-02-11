const { quotes } = require('../quoteData');

module.exports.getAllQuotes = (req, res) => {
    res.send(quotes);
}

// const a = ()=>{}
// const b = ()=>{}

// module.exports = {a, b}
// module.exports.a = a;
// module.exports.b = b;