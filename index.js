const express=require('express');
const app=express();

app.listen(3000);
app.use(express.json());

let users=[{
    "id":1,
    name:"Suyash"
},{
    "id":2,
    name:"Rahul"
}]
const userRouter=express.Router();
app.use('/users',userRouter);
userRouter.route('/').get(getUser).post(postuser).patch(updateuser).delete(deleteuser);



function getUser(req,res){
    res.send(users);
}

function postuser(req,res){
    users=req.body;
    res.send({
        message:"data recieved",
        
    })
}
function updateuser(req,res){
    let dtu=req.body;
    for(k in dtu){
        users[k]=dtu[k];
    }
    res.json({
        message:"data updated"
    })
}
function deleteuser(req,res){
    users={};
    res.send({
        message:"data deleted"
    })
}