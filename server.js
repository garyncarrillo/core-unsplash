const express = require('express');
const app = express();
const port = 9000;
var cors = require('cors')

app.use(cors())


// Endpoint GET
app.get('/unsplash', (req, res) => {
    const axios = require('axios');
    const { query } = req.query;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://unsplash.com/napi/search/meta?query=' + query,
    };

    axios.request(config)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
