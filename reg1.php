<?php 
header('content-type:text/html;charset=utf-8');
session_start();
$pwd = $_POST['password'];
$username = $_POST['username'];
$localhost = "localhost";
$user = "root";//mysql登录账号
$password = "";//mysql登录密码
$conn = new mysqli($localhost,$user,$password);	//连接数据库具体代码
echo $username;
// 检测连接
if ($conn->connect_error) {
    // die("连接失败: " . $conn->connect_error);//类似js中return
	header('location:index.html'); 
}else{
	echo "连接成功";
	$conn->select_db("js");//打开名为js的数据库
	$sql = "update antalogin set password='$pwd' where username='$username'";
	$conn->query($sql);
	$conn->close();//关闭数据库
	$_SESSION['user_account'] = $username;
	header('location:index.html');
} 
?>