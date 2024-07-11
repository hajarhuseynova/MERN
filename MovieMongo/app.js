const http = require('http');
const mongoose = require('mongoose');
const PORT = 3200;

mongoose.connect('mongodb+srv://hajar:Hh0554085255@nodejs.ybfkckl.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS')
.then(() => { console.log('connect');}).catch(err => { console.log('something wrong', err);});

const film = new mongoose.Schema({
    name: String
});

const Film = mongoose.model('Film', film);

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/products') {
        try {
            const filmList = await Film.find();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(filmList));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Server error' }));
        }
    } else if (req.method === 'POST' && req.url === '/products') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { name} = JSON.parse(body);
                const newFilm = new Film({ name });
                const savedFilm = await newFilm.save();
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(savedFilm));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid data' }));
            }
        });
    } else if (req.method === 'PUT' && req.url.startsWith('/products/')) {
        const id = req.url.split('/').pop();
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { name} = JSON.parse(body);
                const updatedFilm = await Film.findByIdAndUpdate(id, { name }, { new: true });
                if (updatedFilm) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(updatedFilm));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: ' not found' }));
                }
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid data' }));
            }
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/products/')) {
        const id = req.url.split('/').pop();
        try {
            const deletedFilm = await Film.findByIdAndDelete(id);
            if (deletedFilm) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: ' deleted' }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: ' not found' }));
            }
        } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Invalid data' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Endpoint not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
});
