<?php 
header('content-type:text/html;charset=utf-8');
$username = $_POST['username'];
$localhost = "localhost";
$user = "root";//mysql登录账号
$password = "";//mysql登录密码
$conn = new mysqli($localhost,$user,$password);	//连接数据库具体代码

// 检测连接
if ($conn->connect_error) {
    // die("连接失败: " . $conn->connect_error);//类似js中return
	header('location:index.html'); 
}else{
	echo "连接成功";
} 
$conn->select_db("js");//打开名为js的数据库
$sql1 = "select * from antalogin where username='$username'";
$result = $conn->query($sql1);
// echo $result->num_rows;
if($result->num_rows==0){
	$sql = "insert into antalogin(username) values('$username')";
	$conn->query($sql);
	$conn->close();//关闭数据库
	header('location:reg2.html?username='.$username);
}else{
	$conn->close();//关闭数据库
	header('location:reg1.html?username=false');
}
// $result = $conn->query($sql);//执行sql语句并赋值给result变量
// echo '<br/>'.$result->num_rows;//换行输出符合sql语句的行数
?>