<?php
    // 引入其他文件
    // include 'common.php'
    // 
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
    // 设置字符集
    $conn->set_charset('utf8');

    $id=isset($_GET['id']) ? $_GET['id'] : '2';
    // 编写查询sql语句
    $sql="select * from goods where id=$id";

    // 利用sql语句查询数据库
    // 查询结果集
    $result=$conn->query($sql);

    // 使用查询结果集
    $row=$result->fetch_all(MYSQL_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>