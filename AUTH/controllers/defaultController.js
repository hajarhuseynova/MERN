const getDefaultPage = (req, res) => {
    console.log(`getDefaultPage - req: ${req} - res: ${res}`);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Dashboard</h1>");
};

module.exports = { getDefaultPage };