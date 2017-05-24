var express = require('express');
var router = express.Router();
//关联主程序
var userDao = require('../user/userDao.js');

//这个路由可以设置用户
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('用户中心');
});

//增
router.get('/userAdd',function(req,res,next){
	userDao.useradd(req,res,next);
});
//删
router.get('/userDel',function(req,res,next){
	userDao.userdelete(req,res,next);
});
//改
router.get('/userUpdate',function(req,res,next){
	userDao.userupdate(req,res,next);
});
//查
router.get('/userAll',function(req,res,next){
	userDao.userAll(req,res,next);
});
router.get('/userById',function(req,res,next){
	userDao.userById(req,res,next);
});

module.exports = router;
