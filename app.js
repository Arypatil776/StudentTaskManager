const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const publicDir = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
    let filePath = req.url === "/" ? "/index.html" : req.url;
    filePath = path.join(publicDir, filePath);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
        }

        const ext = path.extname(filePath);
        const contentTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript"
        };

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "text/plain"
        });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Student Task Manager running at http://localhost:${PORT}`);
});
