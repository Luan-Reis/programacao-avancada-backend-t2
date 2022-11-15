const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res)=> {
    // res.end(console.log(req))

    // definindo rotas para a aplicação
    if(req.url === '/')
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), // dirname= pasta onde estou
            (err, content) => {
                if (err) throw err 
                    res.end(content)
            }

        )
        
    // res.write('<h1>Olá!</h1>')
    // res.end()
}).listen(5000, () => (console.log('Servidor rodando...')))

// método para rodar o servidor na porta 5000 usando res e req
