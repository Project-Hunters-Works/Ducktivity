<?php 

$server= "db5008944633.hosting-data.io"; /* Address of the IONOS Database servers */
$user= "dbu2095089"; /* Database Username */
$password= "Try2022Harder!!"; /* Password */
$database= "dbs7549006"; /* Name of the Database */
/* Access SQL Server and create the table */

$link = mysqli_connect($server, $user, $password, $database);

if (isset($_POST["submit"]))
{
	$email = $_POST['email'];
  	$add = "INSERT INTO subscribers_list (email) VALUES ('$email')";
  	$run = mysqli_query($link,$add);
}
 
mysqli_close($link);
   
?>