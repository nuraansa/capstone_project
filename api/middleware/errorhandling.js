// Error Handling
function errorHandling(err, req, res, next) {
    if(err) {
        let status = err.status || 500
        res.json({
            status,
            msg: "Oops an error occured, please try again later."
        })
    }
    next()
}
module.exports = errorHandling