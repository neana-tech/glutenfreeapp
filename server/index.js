const config = require('config');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(compression());
app.use(cors());

app.use(cookieParser())
.use(bodyParser.json({ limit: '500mb', strict: false}))
.use(bodyParser.urlencoded({ extended: false }))
.use(session({ resave: true, saveUninitialized: true, secret: 'some secret', cookie: { httpOnly: true }}));

// app.get('/api/users', (req, res) => {
//     const users = [
//         { id: 1, name: 'John'},
//         { id: 2, name: 'Susan'}
//     ];
//     res.json(users);
// });

app.listen(config.port, () => {
    console.log(`Server listening to ${config.port}`);
});