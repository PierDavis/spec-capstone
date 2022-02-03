const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');
const { default: axios } = require('axios');


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
    if(checkUser[1].rowCount !== 0) {
        res.status(500).send('Username already exists')
    }   else {
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(password, salt)
        console.log('this is a test')
        await sequelize.query(`
        INSERT INTO users(first_name, last_name, email, username, password)
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
        SELECT id, first_name, last_name, username FROM users WHERE username = '${username}'
    `)
    console.log('TEST TEST TEST')
    res.status(200).send(userInfo)
}  
})

app.post('/addpoint', async (req, res) => {
    const {pointName, location, category, imageUpload, link, notes, id} = req.body
    const addNewPoint = await sequelize.query(`
    SELECT * FROM point_of_interest WHERE title = '${pointName}'
    `)
    console.log(addNewPoint)
    if(addNewPoint[1].rowCount !== 0) {
        res.status(500).send('Point of Interest already exists')
    }   else {
        console.log('this is a test')
        await sequelize.query(`
        INSERT INTO point_of_interest(title, coordinates, category_id, link, photo, notes, user_id)
        VALUES (
            '${pointName}',
            '${location}',
            ${category},
            '${link}',
            '${imageUpload}',
            '${notes}',
            ${id}
        )
        `)
    }
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
        SELECT * FROM users WHERE username = '${username}'
    `).catch((err) => console.log(err))
    console.log(validUser)

    if(validUser[1].rowCount === 1) {
        if(bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
            id: validUser[0][0].id,
            first_name: validUser[0][0].first_name,
            last_name: validUser[0][0].last_name,
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

// //profile.js
// function getInfoFromDB() {
//     let body = {
//         id:localStorage.getItem('id')
//     }
//     axios.get(`/getinfo/${localStorage.getItem('id')``})
// }
// localhost:4000/getInfo/1 (what endpt will look like in browser)

// //index.js
//for profile page:
app.get('/getInfo/:id', async (req, res) => {
    let {id} = req.params
    let allPoints = await sequelize.query(`
    SELECT * FROM point_of_interest WHERE user_id = ${id}
`)
res.status(200).send(allPoints)
})

//POINT OF INTEREST PAGE
app.get('/getPoint/:id', async (req, res) => {
    let {id} = req.params
    let newPoint = await sequelize.query(`
    SELECT * FROM point_of_interest 
    JOIN category ON point_of_interest.category_id = category.id
    WHERE point_of_interest.user_id = ${id}
`)
res.status(200).send(newPoint)
})

// //on front end handle that inside my .then


sequelize.authenticate()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));