<?php
// 配置参数
    $servername='localhost';
    $username='root';
    $password='';
    $database='cnrmall';

    // 链接数据库
    $conn=new mysqli($servername,$username,$password,$database);

    // 检查链接
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_error);
    }
    $conn->set_charset('utf8');
?>