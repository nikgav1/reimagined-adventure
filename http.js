const http = require('http')

const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end('<h1>Welcome to our home page</h1>')
}
 if(req.url === '/about'){
    res.end('<h1>Here you can learn about us</h1>')
 }
 res.end(`
 <h1>The site isnt working!</h1>
 <a href="/">back home<a>
 `)
})

server.listen(5000)