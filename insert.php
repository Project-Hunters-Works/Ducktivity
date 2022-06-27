<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['email'])) {
        
        $email = $_POST['email'];
        $host = "db5008944633.hosting-data.io";
        $dbUsername = "dbu2095089";
        $dbPassword = "Try2022Harder!!";
        $dbName = "dbs7549006";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM subscribers_list WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO subscribers_list(email) values(?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("s",$email);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
?>