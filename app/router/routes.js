const {test}=require('../controllers/index');

const routes=[
    {
        method:'get',
        path:'/a',
        controller:test.bussiness
    }
];
module.exports=routes;