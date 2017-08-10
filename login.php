<?php 
header('content-type:text/html;charset=utf-8');
session_start();
$username = $_POST['username'];
$pwd = $_POST['password'];
$localhost = "localhost";
$user = "root";//mysql登录账号
$password = "";//mysql登录密码
$conn = new mysqli($localhost,$user,$password);	//连接数据库具体代码

// 检测连接
if ($conn->connect_error) {
    // die("连接失败: " . $conn->connect_error);//类似js中return
	header('location:login.html'); 
}else{
	// echo "连接成功";
	$conn->select_db("js");//打开名为js的数据库
	$sql = "select * from antalogin where (username='$username') and (password='$pwd')";
	$result = $conn->query($sql);//执行sql语句并赋值给result变量
	// echo '<br/>'.$result->num_rows;//换行输出符合sql语句的行数
	if($result->num_rows > 0){
		 $_SESSION['user_account'] = $username;
		 $url = 'index.html';
		 $conn->close();//关闭数据库
		// echo $_SESSION['user_account'];
		// 跳转到首页0秒延迟(php页面跳转方法一)
		 // echo "<meta http-equiv=\"refresh\" content=\"0;url=$url\">";
		header('location:index.html'); 
	}
} 

?>