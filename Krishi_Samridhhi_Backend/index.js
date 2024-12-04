const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); // If needed for any API calls

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/predict', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error in prediction request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

