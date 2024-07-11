const sequelize = require('./config/db');
const pencil = require('./models/pencil');
const pen = require('./models/pen');
const { Op } = require('sequelize');

// // pen
// async function init() {
//     try {
//         await sequelize.authentipencile();
//         // await sequelize.sync();

//         // await pen.create({
//         //     name: "pen 2",
//         // });

//         // const res = await pen.findAll();

//         // const res = await pen.findAll({
//         //     attributes: ['name'],
//         //     where: {
//         //         name: "pen1"
//         //     }
//         // });

//         // const res = await pen.findOne({
//         //     where: {
//         //         name: 'pen1'
//         //     },
//         //     attributes: [['name', 'pen name']]
//         // });

//         console.log(JSON.stringify(res, null, 2));

//     } catch (error) {
//         console.log(error);
//     } finally {
//         await sequelize.close();
//     }
// };

// init();


// pencil
async function init() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        // await pencil.create({ name: "Hajar", num: 4000 });
        // await pencil.create({ name: "Huseyn", num: 6000 });
        // await pencil.create({ name: "Emilya", num: 2000 });

        //  const res = await pencil.findAll();

        // const res = await pencil.findAll({
        //     attributes: [['name', 'pencil Name'], ['num', 'pencil Num']],
        //     where: {
        //         num: {
        //             [Op.gte]: 3
        //         }
        //     }
        // });

        const res = await pencil.findOne({
            where: {
                num: {
                    [Op.gt]: 4
                }
            },
            attributes: [['name', 'pencil name'], ['num', 'pencil num']]
        });

        console.log(JSON.stringify(res, null, 2));
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

init();