const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put( // see if username exists. No? register it as a new one
      'https://api.chatengine.io/users/',
      { "username": username, "secret": username, "first_name": username },
      { headers: { "private-key": "4ce66d16-822b-4fc4-a71f-445ffd9acdb5" } }
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);