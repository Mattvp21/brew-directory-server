const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const { options } = require('nodemon/lib/config')
const app = express()
app.use(bodyParser.json());
app.use(cors())



const PORT = 5000;

app.get('/', (req,res) => {
    res.send('success')
})

app.get('/beers', (req, res) => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries',
      headers: {
        'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com',
        'x-rapidapi-key': '68e0aa975amsh431b4220c165f8dp16d3f3jsn1ef4a2323608'
      }
    };
    
    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}) 

app.get('/beers/:id', (req, res) => {
    var id = req.params.id
    var axios = require("axios").default;

var options = {
  method: 'GET',
  url: `https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/${id}`,
  headers: {
    'x-rapidapi-host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com',
    'x-rapidapi-key': '68e0aa975amsh431b4220c165f8dp16d3f3jsn1ef4a2323608'
  }
};

axios.request(options).then(function (response) {
	res.send(response.data);
}).catch(function (error) {
	console.error(error);
});
})


app.listen(process.env.PORT|| PORT, () => {
    console.log('Server started at port 5000')
})