const express = require('express');
const mongoose = require('mongoose')
// 链接mongo,并且使用react这个集合
const DB_URL = `mongodb://127.0.0.1:27017/react`
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log(`mongo connect success`);
})
// 类似于mysql的表，mongo里有文档、字段的概念
// 通过mongoose操作mongodb，存储的就是json，相对mysql来说，要易用很多
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type:Number, require: true}
}))
// // 新增数据
// User.create({
//   user: 'xiaoming',
//   age: 28
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })

// 新建app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>');
})
app.get('/data', function (req, res) {
  // 查询所有的数据，传入一个空对象即可
  User.find({}, function (err, doc) {
    return res.json(doc);
  })
  // res.json({name:'imooc',type:'IT'})
})
// // 删除数据
// app.get('/delete', function (req, res) {
//   User.remove({age: 18}, function (err, doc) {
//     console.log(doc);// n:删除了几条数据；OK：是否删除成功
//     User.find({}, function (err, doc) {
//       return res.json(doc);
//   })
//   })
// })
// // 更新数据
// app.get('/update', function (req, res) {
//   User.update({'user': 'xiaoming'}, {'$set': {age: 26}}, function (err, doc) {
//     console.log(doc);
//     User.find({}, function(err, doc) {
//       return res.json(doc)
//     })
//   })
// })
app.listen(9093, function () {
  console.log('Node app start at port 9093');
})