const express = require('express')
const app = express()
const port = 3000

app.get('/health', (req, res) => {
    res.send(
        {
            "name": "ServerOne"
        }
    )
})

app.listen(port, () => {
    console.log(`Server One listening on port ${port}`)
})