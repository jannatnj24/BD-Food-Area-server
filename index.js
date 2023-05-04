const express=require('express');
const cors=require("cors");
const app =express();
app.use(cors());
const port =process.env.PORT||5000;

const ChefInfo=require('./Data/ChefData.json');


app.get('/',(req,res)=>{
    res.send('  BD food  server is running')
});

app.get('/chefData',(req,res)=>{
    res.send(ChefInfo)
})

app.get('/ViewRecipe/:id',(req,res)=>{
    const id=req.params.id;
    const selectedChef=ChefInfo.find(n=>n.id==id);
    res.send(selectedChef)
})
app.listen(port,()=>{
    console.log(` BD food API is running on port: ${port}`)
})