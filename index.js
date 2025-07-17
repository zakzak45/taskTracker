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
 res.status(200).json({msg:"message got"})
})


app.put('/tasks/:id',(req,res)=>{
   const task= tasks.find((task)=>{
  task.id === body.params.id
   })
if(task){
 const {task} =body.params

 tasks.task = task
  res.status(200).json({msg:"you got it"})
}
else{
    res.status(404).send({
        msg:"not found"
    })
}
})

app.listen(PORT,()=>{
    console.log("server is running at port"+PORT)
})