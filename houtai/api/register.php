<?php
include 'sql.php';
$number = isset($_REQUEST["number"])? $_REQUEST["number"] : " ";
$pwd = isset($_REQUEST["pwd"])? $_REQUEST["pwd"] : " ";
$operation  = isset($_REQUEST["operation"])? $_REQUEST["operation"] : "s ";

$froms = isset($_REQUEST["froms"])? $_REQUEST["froms"] : " ";
$target = isset($_REQUEST["target"])? $_REQUEST["target"] : " ";
$content = isset($_REQUEST["content"])? $_REQUEST["content"] : " ";

$target2 = isset($_REQUEST["target2"])? $_REQUEST["target2"] : " ";
$content2 = isset($_REQUEST["content2"])? $_REQUEST["content2"] : " ";


$target3 = isset($_REQUEST["target3"])? $_REQUEST["target3"] : " ";
$content3 = isset($_REQUEST["content3"])? $_REQUEST["content3"] : " ";
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
//搜索多个
if ($operation == 'searchs'){
    $res = $conn-> query(" select * from $froms where $target in($content)        ");
    // SELECT * FROM $froms WHERE $target='".$content."'"
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}

//模糊查询
if ($operation == 'fuzzySearch'){
    $res = $conn-> query("select * from $froms where $target like '%$content%' OR  $target2 LIKE '%$content%'");
    // SELECT * FROM $froms WHERE $target='".$content."'"
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}
//模糊查询排序
if ($operation == 'fuzzySearchPX'){
    $res = $conn-> query("select * from $froms where $target like '%$content%' or $target2 like '%$content%' ORDER BY ($content2 +0) $content3; ");
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
    $res = $conn->query(" SELECT * FROM  $froms ");
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}
//查询所有排序
if ($operation == 'suoyouPX') {
    $res = $conn->query(" SELECT * FROM  $froms ORDER BY ($content +0) $content2");
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
//修改
if($operation == "xiugia"){
    $res = $conn->query(" UPDATE $froms SET $target2 ='$content2' ,$target3 ='$content3'  WHERE $target = '$content' ");

    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}
//删除
if($operation == "remove"){
    $res = $conn->query(" DELETE FROM $froms WHERE $target = $content ");

    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}
//自定义
if($operation == "custom"){
    $res = $conn->query(" $content ");

    $data = $res->fetch_all(MYSQLI_ASSOC);
    $arr = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $arr;
}
  $conn->close();

?>


 