const express = require('express')
const app = express()

app.use(express.json())
PORT =4000

const Task =[
    {
        id:1,
        task:"cleaning"
    }
]

app.get('/tasks',(req,res)=>{
  res.json(Task)
  if(!Task){
    return res.status(404).send("not found")
  }
})


app.post('/tasks' ,(req,res)=>{
   Task.push(req.body)
 res.status(200).send({msg:" message got"})
})
app.put('/tasks/:id',(req,res)=>{
   
})

app.listen(PORT,()=>{
    console.log("server is running at port"+PORT)
})