import http2 from 'http2';
import fs from 'fs';

const server = http2.createSecureServer( {
    key: fs.readFileSync('./keys/server.key'),
    cert:fs.readFileSync('./keys/server.crt')
}, ( req, res) => {

    console.log(req.url);

    if (req.url === '/' ) {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end( htmlFile );
        return;
    }

});

server.listen(8080, ()=>{
    console.log('server runnig in port 8080')
})