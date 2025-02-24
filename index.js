const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const user = require('./schema')
mongoose.connect('mongodb://127.0.0.1:27017/CSE7')
.then(()=>{console.log('MOngodb is connected')})
.catch((err)=>{console.log('Error connecting  MongoDB',err)})



app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.get('/register',(req,res)=>{
    res.sendFile(__dirname +"/public/register.html")
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname +"/public/login.html")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/public/index.html ")
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname +"/public/about.html ")

})
app.get('/service',(req,res)=>{s
    res.send(" only cse student ")
})

app.get('/contact',(req,res)=>{
    res.send("come to class ")
})


app.post('/register',(req,res)=>{
    const NewUser =new user({
        Username :req.body.Username,
        Email : req.body.Email,
        Address : req.body.Address
    })


    NewUser.save()
    .then(result=>{res.send("User is sacved")})
    .catch(err=>res.status(500).send('ERROR saving data'+err.message))
})

app.get('/contact',(req,res)=>{
    res.send("come to class ")
})


app.post('/login',(req,res)=>{
    const NewUser =new user({
        Username :req.body.Username,
        Email : req.body.Email,
        Address : req.body.Address
    })

    
    NewUser.save()
    .then(result=>{res.send("User is sacved")})
    .catch(err=>res.status(500).send('ERROR saving data'+err.message))
})


app.listen(8000,()=>{
   console.log("server created")

})



































































// const http=require('http')
// const fs = require('fs')
// const path = require('path')
// const myserver= http.createServer((req,res)=>{

//    //anonomen function
//     const log =`${new Date()}:${req.url} : ${req.method} requested\n`
//     fs.appendFile('log.txt',log, ()=>{})


//     console.log('requested')
//   switch(req.url){
//     case'/':
//         if(req.method ==='GET')
//         {
//             fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
//                 res.end(content )
//             })
//         }
//         else  if(req.method=== 'POSt'){
//             //db.query//
//             res.end("posted")
//         }
//          break 


//     case'/about':
//         fs.readFile(path.join(__dirname,'about.html'),(err,content)=>{
//             res.end(content )
//         })
//          break



//     case'/service':
//         fs.readFile(path.join(__dirname,'service.html'),(err,content)=>{
//             res.end(content )
//         })
//         break



//     case'/contact':
//         fs.readFile(path.join(__dirname,'contact.html'),(err,content)=>{S
//             res.end(content )
//         })
//         break


//     default:
//          res.end("404 error ja na ya se ")
//          break

//     case'/services':
        
    
  


//   }
// })
// myserver.listen(8000,()=>{
//     console.log("server created")

// })

