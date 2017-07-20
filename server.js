const express = require('express');

const app = express();

const getTemperature = require('sensor');

app.get('/', (req, res) => {
    getTemperature()
        .then(temperature => {
            console.log(temperature);
            res.status(200)
                .send({
                    temperature
                })
        })
});

app.listen(process.env.PORT || 3000, () => {
    console.log("magic");
});