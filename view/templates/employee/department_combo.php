    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/forms/select/select2.min.css">
    <script src = "../app-assets/js/scripts/forms/select/form-select2.js"></script>                    
<?PHP 
    
     include('../../common_load_connection.php');
 	$result_department = mysqli_query($varDBConnection_load,"SELECT * FROM `department` where department_status='Active' ");	
  	// echo "Count : ".mysqli_num_rows( $result_user_type );
	
?>                       
                        <label>Department</label>
                            <fieldset>
                                <div class="input-group">
                                    <select class="form-control" id="select_department" placeholder="Button on right" aria-describedby="button-addon4">
                                        <option value="0">-Please Select-</option>
                                        
                                         <?PHP 	while($row_department=mysqli_fetch_assoc($result_department)) { ?>
                                <option value="<?PHP echo $row_department['department_id']; ?>"><?PHP echo $row_department['department_name']; ?></option>
        
                                <?PHP } ?>
                                       
                                    </select>
                                     <div class="input-group-append" id="show-popover1" >
                                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#department" ><i class="bx bx-plus"></i></button>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </fieldset>
                        