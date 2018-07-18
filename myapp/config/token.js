// var crypto=require("crypto");
const crypto = require('jsonwebtoken')
const secret = "JWT-TOKEN"
const token={
    createToken:function(obj,timeout){
        // Token 数据
        let payload = {
            name: obj.username,
            admin: true
        };
        // 密钥
        
        // 签发 Token
        let tokens = crypto.sign(payload, secret, { expiresIn: 3600})
        // console.log(parseInt(timeout)||0);
        // var obj2={
        //     data:obj,//payload
        //     created:parseInt(Date.now()/1000),//token生成的时间的，单位秒
        //     exp:parseInt(timeout)||10//token有效期
        // };
        // //payload信息
        // var base64Str=Buffer.from(JSON.stringify(obj2),"utf8").toString("base64");
        // //添加签名，防篡改
        // var secret="hel.h-five.com";
        // var hash=crypto.createHmac('sha256',secret);
        // hash.update(base64Str);
        // var signature=hash.digest('base64');
        return  tokens;
    },
    decodeToken:function(tokens){
        console.log(tokens)
        let res = false;
        crypto.verify(tokens, secret , function(err,decoded) {
            if(err){
                res = {'flag':false,'decoded':decoded}
            }else{
                res = {'flag':true,'decoded':decoded}
            }
                // try{
                //     console.log(err,decoded)
                //     res = decoded || {};
                // }catch(err){
                //     console.log(e);
                // }

            })
        return res;
        // var decArr=token.split(".");
        // if(decArr.length<2){
        //     //token不合法
        //     return false;
        // }
        // var payload={};
        // //将payload json字符串 解析为对象
        // try{
        //     payload=JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
        // }catch(e){
        //     return false;
        // }
        // //检验签名
        // var secret="hel.h-five.com";
        // var hash=crypto.createHmac('sha256',secret);
        // hash.update(decArr[0]);
        // var checkSignature=hash.digest('base64');
        // return {
        //     payload:payload,
        //     signature:decArr[1],
        //     checkSignature:checkSignature
        // }
    },
    checkToken:function(token){
        var resDecode=this.decodeToken(token);
        if(!resDecode){
            return false;
        }
        //是否过期
        var expState=(parseInt(Date.now()/1000)-parseInt(resDecode.payload.created))>parseInt(resDecode.payload.exp)?false:true;
        if(resDecode.signature===resDecode.checkSignature&&expState){
            return true;
        }
        return false;
    }
};
module.exports=exports=token;