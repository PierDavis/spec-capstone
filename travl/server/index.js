const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const {sequelize} = require('./sequelize');
const bcrypt = require('bcrypt')

//middleware
app.use(express.json());
app.use(cors());

//put endpts here
app.post('/signup', async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `)
    console.log(checkUser)
    if(checkUser[1].rowcount !== 0) {
        res.status(500).send('Username already exists')
    }   else {
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password, salt)
        await sequelize.query(`
        INSERT INTO users(first name, last name, email, username, password)
        VALUES (
            '${firstName}',
            '${lastName}',
            '${email}',
            '${username}',
            '${passwordHash}'
        )
        `)
//caching and keep username available on browser so you can greet user on page 'welcome username' etc
        const userInfo = await sequelize.query(`
            SELECT id, username, name FROM users WHERE username = '${username}
        `)
        res.status(200).send(userInfo)
    }  
})
app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
        SELECT * FROM users WHERE username = '${username}
    `)
    if(validUser[1].rowCount === 1) {
        if(bcrypt.compareSync(password, validUser [0][0].password)) {
        let object = {
            id: validUser[0][0].id,
            name: validUser[0][0].name,
            username
        }
        res.status(200).send(object)
    } else {
        res.status(401).send('Password is incorrect')
    }
} else {
    res.status(401).send('Username is incorrect')
}
})

sequelize.authenticate()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
