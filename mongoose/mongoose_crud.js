let mongoose=require('mongoose');
mongoose.set('useCreateIndex',true);
let dbPromise=new Promise((resolve,reject)=>{
    mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true,useUnifiedTopology: true});
    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log('数据库连接成功了！');
            resolve();
        }else{
            reject(err);
        }
    });
});
!(async()=>{
   await dbPromise;
   //引入Schema
   let Schema=mongoose.Schema;
   //创建约束对象
   let studentSchema=new Schema({
       stu_id:{
           type:String,
           required:true,//必须填写
           unique:true//唯一字段
       },
       name:{
           type:String,
           required:true
       },
       age:{
           type:Number,
           required:true
       },
       sex:{
           type:String,
           required:true
       },
       hobby:[String],
       info:Schema.Types.Mixed,
       date:{
           type:Date,
           default:Date.now()
       },
       enable_flag:{
           type:String,
           default: 'Y'
       }
   })
    //创建模型对象
    let studentModel=mongoose.model('students',studentSchema);
   //数据的操作crud
    // c
    let result=studentModel.create({
        stu_id: 20200131005,
        name:'小灰',
        age:23,
        sex:'女',
        hobby:['看小说','追剧','打游戏'],
        info:'一个很漂亮的人'
    });
    console.log(await result)

})();
