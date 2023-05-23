import express from "express";
const app=express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send("Hello world")
});
app.get('/users', (req,res)=>{
    res.json(["user1", "user2", "user3"])
});
app.post('/users',(req,res)=>{
    res.json('Юзер добавлен')
});
app.delete('/users:id',(req,res)=>{
    res.json(`Удален пользователь с ID ${req.params.id}`)
});

app.patch('/users:id',(req, res)=>{
    res.json(` юзер с ID изменен  ${req.params.id}`)
});
app.patch('/admin', (req, res)=>{
    res.json("У вас не хватает прав")
})



app.listen(port,()=>{
    console.log("Cервер создан и запущен")
})