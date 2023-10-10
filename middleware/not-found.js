const notFound = (req, res) =>{
    res.status(400).send("Route doesnt exist")
}

module.exports = notFound