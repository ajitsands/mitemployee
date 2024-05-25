<?PHP 
    include('../../common_load_connection.php');
 	$result = mysqli_query($varDBConnection_load,"Select employee_id,employee_name from employee_registration where employee_status='Active' order by employee_id desc");
	
?>
      <div class="input-group" id="div_select_employee_profile">
            <select class="select2 form-control" placeholder="Button on right" aria-describedby="button-addon3" id="select_employee_profile">
            <option value="0">--Select Employee--</option>
            <?PHP 	while($row=mysqli_fetch_assoc($result)) { ?>
              <option value="<?PHP echo $row['employee_id']; ?>"><?PHP echo  $row['employee_name']; ?></option>
              
            <?PHP } ?>
            </select>
            
        </div>

