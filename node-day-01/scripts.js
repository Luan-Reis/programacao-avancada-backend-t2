// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// callback

// const fs = require('fs')

// console.log('Primeiro comando.')

// fs.readFile('./text.txt',callback)

// function callback(err,content) {
//     if (err) return console.error('erro')
//     console.log(String(content))
// }
// console.log('Segundo comando.')
// console.log('Terceiro comando.')

// // utilizando programação assíncrona
// setTimeout(() => (console.log('testando o setTimeout')), 3000) 

// console.log('comando que está após setTimeout')

//Desafio 5

//função com objeto date com log
// const date = new Date()

// console.log(date.getHours(),':', date.getMinutes(), ':', date.getSeconds())

// setTimeout(() => (console.log(date.getHours(),':', date.getMinutes(), ':', date.getSeconds())), 5000)
// setInterval(() => (console.log(date.getHours(),':', date.getMinutes(), ':', date.getSeconds())), 5000)
// setTimeout(() => (console.log(date.getHours(),':', date.getMinutes(), ':', date.getSeconds())), 5000) 


// utilizando programação síncrona

// function sum(){
//     const result = 1+1
//     if(result === 2){
//         sucesso()
//     }else{
//         erro()
//     }
// }
// function sucesso(){
//     console.log('Sucesso! A soma é 2.')
// }

// function erro(){
//     console.log('A soma não é 2. Alguma coisa deu errado...')
// }

// sum()
// console.log('testando exibição...')

// transformando em callback (programação assíncrona)
// function sum(callback, callbackError){
//     const result = 1+1
//     if(result === 2){
//         callback()
//     }else{
//         callbackError()
//     }
// }

// sum(
//     () => (console.log('Sucesso! A soma é 2.')),
//     () => (console.log('A soma não é 2. Alguma coisa deu errado...'))
//     )
// console.log('testando exibição...')

// Promise - é uma classe; a tradução significa promessa
// then()
// resolve e reject

// const promise = new Promise((resolve,reject)=>{
//     const result = 1+2
//     if(result === 2){
//         resolve('Sucesso! A soma é 2.')
//     }else{
//         reject('A soma não é 2. Alguma coisa deu errado...')
//     }

// })

// promise.then(
//     ((resultado)=>(console.log(resultado))),
//     ((erro)=>(console.log(erro)))
// )

// voltando para callback

// const name = 'Paulo Sampaio'

// function whoIsTheBest(callback, callbackError){
//     if(name != 'Paulo Sampaio'){
//         callbackError ('Tá errado. Não tem como!')    
//     }else{
//         callback({
//             name: name,
//             mensage: `humildemente o melhor`
//         })
//     }
// }
// whoIsTheBest( 
//     ((success)=>(console.log(`${success.name} é ${success.mensage}.`))), 
//     ((error)=>(console.log(error)))
// )


const name = 'Paulo Sampaio'
const promise = new Promise((resolve, reject)=>{
    if(name != 'Paulo Sampaio'){
        reject('Tá errado. Não tem como!')    
    }else{
        resolve({
            name: name,
            mensage: `humildemente o melhor`
        })
    }
})


promise.then(
    ((success)=>(console.log(`${success.name} é ${success.mensage}.`))), 
    ((error)=>(console.log(error)))
)

//Desafio 6

