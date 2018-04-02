const express = require('express');

const userRouter = require('./user');

// 新建app
const app = express()

// 只要与“/user”相关的子路由设置为userRouter
app.use('/user/', userRouter);
app.listen(9093, function () {
  console.log('Node app start at port 9093');
})
