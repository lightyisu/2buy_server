const error=()=>{
    return async (ctx,next)=>{
        try{
            await next();
            if(ctx.status===200){
                ctx.res.success();
            }
        }catch(err){
            if(err.code){
                console.log(err);
                ctx.res.fail({code:err.code,msg:err.message})
            }else{
                ctx.app.emit('error',err,ctx)
            }
        }
    }
}
module.exports=error;