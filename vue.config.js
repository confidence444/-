
let data=require("./src/sucai/data/user.json")
let list =require("./src/sucai/data/list.json")
let BodyParser=require("body-parser")
module.exports={
    devServer:{
        before(app){
           app.post("/login",BodyParser.json(),(req,res)=>{
                  let {uesname,uespwd} =req.body;
                 let obj=data.find(item=>item.name===uesname)
                 if(!obj){
                   res.send({code:0,msg:"用户名不存在"})
                 }else{
                     if(obj.pwd===uespwd){
                        res.send({code:1,msg:"登录成功",data:obj})
                     }else{
                        res.send({code:0,msg:"密码不对"})
                     }
                 }
           })
           app.get("/getData",(req,res)=>{
               res.send(list)
           })
        }
    }
}


