<?php
include 'sql.php';
$number = isset($_REQUEST["number"])? $_REQUEST["number"] : " ";
$pwd = isset($_REQUEST["pwd"])? $_REQUEST["pwd"] : " ";
$name = isset($_REQUEST["name"])? $_REQUEST["name"] : " ";
$num = isset($_REQUEST["num"])? $_REQUEST["num"] : " ";
$operation  = isset($_REQUEST["operation"])? $_REQUEST["operation"] : "suoyou ";

$froms = isset($_REQUEST["froms"])? $_REQUEST["froms"] : " ";
$target = isset($_REQUEST["target"])? $_REQUEST["target"] : " ";
$content = isset($_REQUEST["content"])? $_REQUEST["content"] : "toplist ";


//注册
if ($operation =='register') {
    $sql = "INSERT INTO `$froms` VALUES ('$number', '$pwd') ";
    $res = $conn->query($sql);
    var_dump($res);
}
//登录
if($operation == 'login'){
    // $sql = "SELECT * FROM $froms WHERE number='".$number."' AND pwd='".$pwd."' ";
    $res = $conn->query(" SELECT * FROM $froms WHERE number='".$number."' AND pwd='".$pwd."' ");
    // $res = $conn->query(" SELECT * FROM admin WHERE number='a2333' AND pwd='a123456' ");
    $data = $res->num_rows;
    echo $data;
    
}

//搜索
if ($operation == 'search'){
    $res = $conn-> query("SELECT * FROM $froms WHERE $target='".$content."'");
    // SELECT * FROM $froms WHERE $target='".$content."'"
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}


//模糊查询
if ($operation == 'fuzzySearch'){
    $res = $conn-> query("select * from $froms where $target like '%$content%' ; ");
    // SELECT * FROM $froms WHERE $target='".$content."'"
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}


//关联查询列表
if ($operation == 'nav') {
    $res = $conn->query(" SELECT * from bottomlist where relevance = ' ".$content." '");
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
  }

  
//查询所有
if ($operation == 'suoyou') {
    $res = $conn->query(" SELECT * FROM  $froms");
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}

//随机
if($operation == "random"){
    $res = $conn->query("  SELECT   *   FROM $froms ORDER BY RAND() LIMIT $content");
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}



  $conn->close();

?>


 