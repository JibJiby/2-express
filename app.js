const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// 2-express에서 추가.
const session = require('express-session');
const cookieParser = require('cookie-parser');

// 2-express에서 추가.
const db = require('./models');

const port = process.env.PORT || 3005;

// 2-express에서 DB연결 코드 추가.
dotenv.config();
const app = express();
db.sequelize
    .sync(
        { force: true } // 시작할때마다 모두 지우고 새로 만들기
        // { force: process.env.NODE_ENV !== 'production' }
        // { force: process.env.NODE_DB_CLEANER }
    )
    .then(() => {
        console.log('DB 연결 성공');
    })
    .catch(console.error);

// Middlewares
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(
//     session({
//         saveUninitialized: false,
//         resave: false,
//         secret: process.env.COOKIE_SECRET, //undefined이면(.env에 값 없으면) 에러
//         cookie: {
//             httpOnly: true,
//             secure: false,
//             // domain: process.env.NODE_ENV === 'production' && '.nodebird.com',
//         },
//     })
// );

app.get('/test', (req, res, next) => {
    res.send('ok');
});

app.listen(port, () => {
    console.log('Server Start!');
});
