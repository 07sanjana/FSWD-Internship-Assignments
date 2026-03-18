const logger = (req, res, next) => {
    const time = new Date().toLocaleDateString()
    console.log(`Request recieved at ${time}`)
    next() // passes control to the next function
}

module.exports = logger;
