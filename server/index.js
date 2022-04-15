const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {adoptKitten, abandonKitten, breedKitten, renameKitten} = require('./controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A lifetime friend shall soon be made.",
					 "A smile is your personal welcome mat.",
					 "Do not let your limitations overshadow your talents.",
           "Meditation with an old enemy is advised.", 
           "The change you started already have far-reaching effects. Be ready.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get('/api/kitten', (req, res) => {
  const adoptable = [];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});


app.delete('/api/kitten/:id', abandonKitten);
app.post('/api/kitten', breedKitten);
app.put('/api/kitten/:id', renameKitten);

app.listen(4000, () => console.log("Server running on 4000"));
