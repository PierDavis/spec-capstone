const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "postgres://gkjtacoqblloya:5fc3f1ea1d7f5fcc42f80250018e389821fee594a19b2f0618f835e371a0d1bc@ec2-34-194-171-47.compute-1.amazonaws.com:5432/d6qa29d5k6dnf8",

{
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
)

module.exports = sequelize