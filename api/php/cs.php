<?php
include 'sql.php';
$res = $conn->query(" SELECT a.*,b.*
FROM toplist a
INNER JOIN bottomlist b
ON a.topListID = '1'=b.relevance");
    
$data = $res->fetch_all(MYSQLI_ASSOC);
$arr = json_encode($data,JSON_UNESCAPED_UNICODE);
echo $arr;
$conn->close();
?>