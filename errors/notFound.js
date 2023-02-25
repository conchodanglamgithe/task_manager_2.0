class notFound extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


const createNotFoundError = (message,statusCode)=>{
    return new notFound(message,statusCode)
}

module.exports = {notFound,createNotFoundError}