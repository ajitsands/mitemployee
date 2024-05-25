 <?PHP 
   
     include('../../common_load_connection.php');
    
 	$result_user_type = mysqli_query($varDBConnection_load,"SELECT * FROM `user_type` where status='Active'");
  	// echo "Count : ".mysqli_num_rows( $result_user_type );
	
?>
 
     <label>User Type</label>
     <div class="input-group" id="div_select_user_type">
            <select class="form-control" id="select_user_type" placeholder="Button on right" aria-describedby="button-addon4">
                <option value="0">-Please Select-</option>
                <?PHP 	while($row_user_type=mysqli_fetch_assoc($result_user_type)) { ?>
                <option value="<?PHP echo $row_user_type['user_type_id']; ?>"><?PHP echo $row_user_type['user_type']; ?></option>
        
                <?PHP } ?>
                
           
            </select>
             <div class="input-group-append" id="show-popover1">
                <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalScrollable" ><i class="bx bx-plus"></i></button>
               
            </div>
            
        </div>