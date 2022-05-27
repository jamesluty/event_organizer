const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;
const DB = "events_db"

// MIDDLEWARE
app.use(cookieParser(), cors({ credentials: true, origin: 'http://localhost:3000' }), express.json(), express.urlencoded({ extended: true }));

require('dotenv').config();

// import mongoose server and routes
require("./config/mongoose.config")(DB);
require("./routes/events.routes")(app);
require("./routes/users.routes")(app);

// server listening on server
app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));