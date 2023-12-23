const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');
const dbConnect = require('./config/dbConfig');

const app = express();

const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);


dbConnect()
.then(()=>console.log('DB is connected'))
.catch(err => console.log('DB error:', err.message));

app.use(routes);





app.listen(PORT, () => console.log(`Server running on port ${PORT}`));