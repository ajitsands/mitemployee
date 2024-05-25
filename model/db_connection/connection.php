<?php
class DBConnection
{

    function ConnectToMYSQL()
    {
        
      $con = mysqli_connect("localhost","sandsl23_mitemployee_user","s@nds1@b","sandsl23_mitemployee_db");
        
      if (mysqli_connect_errno())
        {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        return $con;
    }
   
       
}


?>
