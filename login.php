<?php
// include("koneksi.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 604800");
header("Access-Control-Request-Headers: x-requested-with");
header("Access-Control-Allow-Headers: x-requested-with, x-requested-by");

// Kode Utama jangan di hapus
// $username = $_POST['username'];
// $password = $_POST['password'];

// $sql = "SELECT * FROM akun WHERE Email='$username' and password='$password'";
// $result = $conn->query($sql);
// $data = mysqli_fetch_array($qry);

// if ($result->num_rows > 0) {
//   // output data of each row
//   while($row = $result->fetch_assoc()) {
    
//     $output['pesan'] = "Berhasil masuk";
//     $output['id']=$row["Id"];
//     $output['username']=$row['Email'];

//   }
// } else {
//   // echo "0 results";
//   $output['error'] = true;
//   $output['pesan'] = "Gagal masuk";
// }
// echo json_encode($output);

// $username = "wishnupmi@gmail.com";
// $password = "123";


$username = $_POST['username'];
$password = $_POST['password'];

$database = file_get_contents("akun.json");
$database = json_decode($database, TRUE);
if(isset($username) && isset($password)) {
    for($i=0; $i < count($database); $i++) {
        // echo $database[$i]['username'];
        if($database[$i]['username'] == $username) {
            if($database[$i]['password'] == $password) {
                $success = TRUE;
                $output['pesan'] = "Berhasil masuk";
                $output['id']=$database[$i]['id'];
                $output['username']=$database[$i]['username'];
                break;
            } else {
                $success = FALSE;
                $output['error'] = true;
                $output['pesan'] = "Gagal masuk";
            }
        } else {
            $success = FALSE;
        }
    }
} else {
    echo "Harap isi semua kolom yang tersedia";
}
echo json_encode($output);

?>