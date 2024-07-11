
const pool = require('../config/db');
const path = require('path');
const fs = require('fs');

const createPlayer = async (player) => {
    const imagePath = path.join(__dirname, '..', 'img.jpg');
    const imageData = fs.readFileSync(imagePath);
    const byteArray = Buffer.from(imageData);

    const res = await pool.query('insert into Player(firstname, lastname, photo) values($1, $2, $3) returning *', [player.firstname, player.lastname, byteArray]);

    return res.rows[0];
};

const result = createPlayer({
    firstname: "Zumrud",
    lastname: "Isgandarli"
});

result.then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});
