/*
* @Author: lulu27753
* @Date:   2018-04-02 17:33:38
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-02 17:34:45
*/
// 数据库模型


const mongoose = require('mongoose');
// 链接mongo,并且使用react这个集合
const DB_URL = `mongodb://127.0.0.1:27017/react`;
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log(`mongo connect success`);
})
// 类似于mysql的表，mongo里有文档、字段的概念
// 通过mongoose操作mongodb，存储的就是json，相对mysql来说，要易用很多
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
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
