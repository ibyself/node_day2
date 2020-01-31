//1.引入mongoose
let mongoose=require('mongoose');
//构建promise实例
let dbPromise=new Promise((resolve,reject)=>{
    //2.连接数据库
    mongoose.connect('mongodb://localhost:27017/test');
    //3.绑定监听
    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log('数据库连接成功了！')
            resolve();
        }else{
            reject(err);
        }
    })
});
//第一种写法
// dbPromise.then(()=>{
//     console.log('操作数据库的代码')
// },(err)=>{
//     console.log(err);
// });
//第二种
// dbPromise
//     .then(()=>{
//         console.log('操作数据库的代码')
//     })
//     .catch(()=>{
//         console.log(err);
//     });
//第三种
// async function demo(){
//     await dbPromise;
//     console.log('操作数据库的代码')
// }
// demo();
//IIFE方式写法   操作数据库
!(async ()=>{
    await dbPromise;
    console.log('操作数据库的代码')
})();

