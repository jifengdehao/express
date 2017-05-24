var user={
	//增
	userinsert:'INSERT INTO `user` (`id`,`name`,`age`,`pwd`) VALUES(0,?,?,?)',
	//删
	userdelete: 'delete from user where id=?',
	//改
	userupdate:'UPDATE `user` SET `name`=?,`age`=?,`pwd`=? WHERE `id`=?',
    //查
    userAll: 'select * from user',
    userById: 'select * from user where id=?'
}

module.exports=user;