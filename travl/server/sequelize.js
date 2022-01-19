const {Sequelize} = require('sequelize')

//comment below back in once you have the URI link from heroku
// const sequelize = new Sequelize(
//     "postgress://find link from heroku https://data.heroku.com/datastores/9e1cf550-e3d4-4cd3-8c16-b640ad45ffbe#administration and input here",
// 
{
    dialect: "postgres"
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
)

module.exports = sequelize