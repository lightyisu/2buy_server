const router=require('../router/index');
const bodyParser=require('koa-bodyparser')
const response=require('./response')
const error=require('./error')
const cors=require('@koa/cors')


const mdBodyParser=bodyParser({
    enableTypes:['json','form','text','xml']
})
const mdRoute=router.routes();
const mdRouterAllowed=router.allowedMethods();
const mdResHandler=response();
const mdErrorHandler=error()
const mdCors=cors({
    origin:'*',
    credentials:true,
    allowMethods:['GET','HEAD','PUT','POST','DELETE']
})

module.exports=[
    mdCors,
    mdBodyParser,
    mdResHandler,
    mdErrorHandler,
    mdRoute,
    mdRouterAllowed,
   
   
]