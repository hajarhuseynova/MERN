const generateResponse = ({ res, status, header, data }) => {
    console.log(`res: ${res} - status: ${status} - header: ${header} - data: ${data}`);
    const headers = {
        'Content-Type': header,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': "GET, HEAD, OPTIONS, POST, PUT",
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': 2592000,
    };
    res.writeHead(status, headers);
    const responseData = typeof data === 'object' ? JSON.stringify(data) : data;
    res.end(responseData);
};

module.exports = generateResponse;
