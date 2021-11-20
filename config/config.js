const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        timezone: '+09:00', // (대한민국) 타임존을 설정     출처) https://lahuman.github.io/sequelize_timezone/
        // pool: {
        //     max: 5,
        //     min: 0,
        //     acquire: 30000,
        //     idle: 10000,
        //   },
    },
};
