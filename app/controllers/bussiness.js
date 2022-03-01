const db=require('../service/index')
const bussiness=async ctx=>{
    let sql='SELECT * FROM LISTS WHERE ID'
    let res=await db.query(sql)
    console.log(res)
    ctx.body = res
};
module.exports={
    bussiness
}