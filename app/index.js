const Koa=require('koa');
const app=new Koa();
const compose=require('koa-compose');
const middleware=require('./middlewares/index')
const port='8080';
const utils=require('./common/utils');
const Application = require('koa');
app.context.utils=utils;
app.use(compose(middleware))
app.on('error',(err,ctx)=>{
    if(ctx){
        ctx.body={
            code:9999,
            message:`报错${err.message}`
        }
    }
})
app.listen(port,()=>{
    console.log(`API SERVER LISTENING ON ${port}`);
});
