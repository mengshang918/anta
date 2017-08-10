<?php
header('Content-type:text/html;charset=utf-8');
session_start();
if(isset($_SESSION['user_account'])){
        // session_destroy();//销毁一个会话中的全部数据
        // setcookie(session_name(),'',time()-3600);//销毁与客户端的卡号
        // unset ($_SESSION['user_account']);//单独删除一个变量
        /*** 删除所有的session变量..也可用unset($_SESSION[xxx])逐个删除。****/
        $_SESSION = array();
        /***删除sessin id.由于session默认是基于cookie的，所以使用setcookie删除包含session id的cookie.***/
        if (isset($_COOKIE[session_name()])) {
           setcookie(session_name(), '', time()-42000, '/');
        }
        // 最后彻底销毁session.
        session_destroy();
        // php页面跳转方法二
        header('location:index.html');
    }
?>