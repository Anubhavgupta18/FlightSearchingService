const SuccessfulResponse = Object.freeze({
    OK: 200,
    CREATED:201
})
const ClientErrorResponse = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHRIZED: 401,
    NOT_FOUND:404
})
const ServerErrorResponse = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED:501
})

module.exports = {
    SuccessfulResponse,
    ClientErrorResponse,
    ServerErrorResponse
}