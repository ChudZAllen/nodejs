const express = require('express')
const campsiteRouter = express.Router()

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you')
})
.post((req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /campsites')
})
.delete((req, res) => {
    res.end('Deleting all campsites')
});

// campsite router campsiteId route handling

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res) => {
    res.end('Will send the requested campsite to you')
})
.post((req, res) => {
    res.statusCode = 403
    res.end('POST operation not supported on an already existing campsite')
})
.put((req, res) => {
    res.end(`Will update the campsite: ${req.params.campsiteId} with the data: ${req.body.name} with description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end('Deleting all campsites')
});



module.exports = campsiteRouter