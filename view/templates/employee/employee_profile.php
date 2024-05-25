<?PHP //include "../model/db_connection/connection.php" ;
//$DBConn = new DBConnection();
//$varDBConnection = $DBConn->ConnectToMYSQL();
 	$result = mysqli_query($varDBConnection,"Select employee_id,employee_name from employee_registration order by employee_id desc");
	
?>

<section class="users-view">
                    <!-- users view media object start -->
                    <div class="row">
                        <div class="col-12 col-sm-7 col-xl-4">
                            <div class="media mb-2" id="div_employee_details" style="display:none">
                                <div id="emp_image_div">
                                <!--<a class="mr-1" href="javascript:void(0);">-->
                                <!--    <img src="../app-assets/images/portrait/small/default.png" alt="users view avatar" class="users-avatar-shadow rounded-circle" height="64" width="64">-->
                                <!--</a>-->
                                </div>
                                <div class="media-body pt-25" style="padding-left:20px;">
                                    <h4 class="media-heading" style="line-height:0px;padding-top:20px;"><span class="users-view-name" id="profile_employee_name">  </span></h4>
                                    <span >EMPLOYEE CODE:</span>
                                    <span class="users-view-id" style="font-size:25px;font-weight:700;" id="profile_employee_code"> </span>
                                </div>
                            </div>
                            <div class="media mb-2" id="div_employee_details_display" >
                                <div id="emp_image_div">
                                <a class="mr-1" href="javascript:void(0);">
                                    <img src="../app-assets/images/portrait/small/default.png" alt="users view avatar" class="users-avatar-shadow rounded-circle" height="64" width="64">
                                </a>
                                </div>
                                <div class="media-body pt-25" style="padding-left:20px;">
                                    <h4 class="media-heading" style="line-height:0px;padding-top:20px;"><span class="users-view-name" id=""> EMPLOYEE NAME </span></h4>
                                    <span >EMPLOYEE ID:</span>
                                    <span class="users-view-id" style="font-size:25px;font-weight:700;" id=""> </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-5 col-xl-8 ">
                            <!--<a href="javascript:void(0);" class="btn btn-sm mr-25 border"><i class="bx bx-envelope font-small-3"></i></a>-->
                            <!--<a href="javascript:void(0);" class="btn btn-sm mr-25 border">Profile</a>-->
                            <div class="row">
                                     <div class="col-10 col-sm-10 ">
                                    
                                        <label>Select Employee</label>
                                        <fieldset>
                                             <!--starts-->
                                           <!--<?PHP// include("employee_combo.php"); ?>-->
                                            <div class="input-group" id="div_select_employee_profile">
                                                <select class="select2 form-control" placeholder="Button on right" aria-describedby="button-addon3" id="select_employee_profile">
                                                  <option value="0">--Select Employee--</option>
                                                  <?PHP 	while($row=mysqli_fetch_assoc($result)) { ?>
                                                  <option value="<?PHP echo $row['employee_id']; ?>"><?PHP echo  $row['employee_name']; ?></option>
                                                  <?PHP } ?>
                                                </select>
                                            </div>
                                        <!--close-->
                                        </fieldset>  
                                                    
                                     </div>
                                     <div class="col-2 col-sm-2 col-xl-2 no-gutter" style="padding-left:0px; padding-top:22px;">
                                      <!--<input  type="hidden" id="txt_employee_id" name="txt_employee_id" value=""> -->
                                        <button class="btn btn-sm btn-primary" id="btn_edit_privileges">Edit Privileges</button>
                                     <!--<input  type="hidden" id="txt_employee_id" name="txt_employee_id" value=""> -->
                                    </div>
                            </div>
                            
                            
                            
                            
                        </div>
                    </div>
                    <!-- users view media object ends -->
                    <!-- users view card data start -->
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-3">
                                    <table class="table table-striped" style="padding:5px;">
                                        <tbody>
                                            <tr>
                                                <td style="padding:5px;">Joined Date: </td>
                                                <td style="padding:5px;"><span id="v_joing_date"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="padding:5px;">DOB :</td>
                                                <td style="padding:5px;" class="users-view-latest-activity" ><span id="v_dob_date"></span></td>
                                            </tr>
                                            
                                            <tr>
                                                <td style="padding:5px;">Role:</td>
                                                <td style="padding:5px;"class="users-view-role"><span id="v_role_no"></span></td>
                                            </tr>
                                            <tr style="display:none" id="tr_emp_status">
                                                <td style="padding:5px;">Status:</td>
                                                <td style="padding:5px;"><span class="badge badge-light-success users-view-status" id="v_emp_status_active"></span></td>
                                            </tr>
                                            <tr id="tr_emp_status_deactive">
                                                <td style="padding:5px;">Status:</td>
                                                <td style="padding:5px;"><span class="badge badge-light-danger users-view-status" id="v_emp_status_deactive"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="padding:5px;">ID NO :</td>
                                                <td style="padding:5px;"><span id="v_id_no"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="padding:5px;">Phone No :</td>
                                                <td style="padding:5px;"><span id="v_phone_no"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="padding:5px;">Dependency :</td>
                                                <td style="padding:5px;" class="users-view-verified"><span id="v_dependency"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-12 col-md-9">
                                    <div class="table-responsive">
                                        <table class="table mb-0" id="tbl_employee_profile_permission" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Module Permission</th>
                                                    <th>View</th>
                                                    <th>Add</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        
                <div class="app-file-content p-2" style="padding-top:30px;" >
                   <h5>Attachments</h5>
                    <div class="row app-file-recent-access" id="emp_attachment_div">
                    
                    </div>
                </div>
                        
                        
                        
                    </div>
                 <!-- users view card data ends -->


                </section>