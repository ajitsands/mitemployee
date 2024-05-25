<?PHP 
include "../../model/db_connection/connection.php" ;
$DBConn = new DBConnection();
$varDBConnection = $DBConn->ConnectToMYSQL();

?>
 <select  id="select_company_search" name="select_division_search" class="chosen_select form-control form-control-lg" data-live-search="true" tabindex="-1"  aria-hidden="true" style="width:100%" >
 <option value="0" style="font-size: 14px;">--Select Company--</option>
<?PHP 
   $result = mysqli_query($varDBConnection,"SELECT ids,company_name FROM company_master where status!='Deactive'");
   while($row=mysqli_fetch_assoc($result)) {
                                                    		   
?>
  <option value="<?PHP echo $row['ids']; ?>" style="font-size: 14px;">  <?PHP echo $row['company_name'] ?></option>
                             
                                                          
 <?PHP
                      
 }
                        
 ?> 
</select>
			
    <style>
        /* Reduce the font size for the Chosen select text */
        .chosen-container-single .chosen-single span {
            font-size: 14px; /* Adjust the font size as needed */
        }
    </style>
    <script>
        $('.chosen_select').chosen();
    </script>