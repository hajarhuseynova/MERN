const pool = require('../config/db');

const getAllBrands = async () => {
    const res = await pool.query('select * from brands');
    return res.rows;
};

const getBrandById = async (id) => {
    const res = await pool.query('select * from brands b where b.id = $1', [id]);
    return res.rows[0];
};

const createBrand = async (brand) => {
    const { name } = brand;
    const res = await pool.query('insert into brands(name) values($1) returning *', [name]);
    return res.rows[0];
};

const updateBrand = async (brand) => {
    const { id, name } = brand;
    const res = await pool.query('update brands set name = $1 where id = $2 returning *', [name, id]);
    return res.rows[0];
};

const deleteBrand = async (id) => {
    const res = await pool.query('delete from brands where id = $1 returning *', [id]);
    return res.rows[0];
};

// const testingInitalize = async () => {
//     await createBrand({ name: "Apple" });

//     const allData = await getAllBrands();
//     console.log("alldata: ", allData);
// };

// testingInitalize();

const testingInitalize2 = async () => {
    const res = await getAllBrands();
    console.log(res);
};

testingInitalize2();