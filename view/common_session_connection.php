<?PHP
if (session_status() == PHP_SESSION_NONE) {
    session_start();
    include "../model/db_connection/connection.php" ;
    $DBConn = new DBConnection();
    $varDBConnection = $DBConn->ConnectToMYSQL();
      
}

if($_SESSION["loggedin"] !=true)
{?>
<script>
	window.location="login.php";
</script>
<?PHP } ?>