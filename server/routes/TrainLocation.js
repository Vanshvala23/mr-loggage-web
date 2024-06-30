const express = require('express');
const axios = require('axios');

const app = express();

const apiEndpoint = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain/';
const apiKey = 'fa010bf689msh7bb935263fcd024p190750jsn95132424ed79';
const apiHost = 'irctc1.p.rapidapi.com';

app.use(express.json());

const getTrainLocation = async (pnr) => {
  try {
    const response = await axios.get(`${apiEndpoint}${pnr}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'x-rapidapi-host': apiHost
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

app.get('/train-location/:pnr', async (req, res) => {
  const pnr = req.params.pnr;
  try {
    const data = await getTrainLocation(pnr);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching train location' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = getTrainLocation ;