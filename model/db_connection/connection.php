<?php
class DBConnection
{

    function ConnectToMYSQL()
    {
        
      $con = mysqli_connect("localhost","root","S@NDS1@B","mit_hr_db");
        
      if (mysqli_connect_errno())
        {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        return $con;
    }
   
       
}


?>
