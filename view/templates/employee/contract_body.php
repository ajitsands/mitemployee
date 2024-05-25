                <section class="users-edit" style="padding-top:10px;"  >
                   
                        
                         <div class="card-body" >
                            <ul class="nav nav-tabs mb-2" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center active" id="account-tab" data-toggle="tab" href="#account" aria-controls="account" role="tab" aria-selected="true">
                                        <i class="bx bx-user mr-25"></i><span class="d-none d-sm-block">Employee</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center" id="information-tab" data-toggle="tab" href="#information" aria-controls="information" role="tab" aria-selected="false">
                                        <i class="bx bx-info-circle mr-25"></i><span class="d-none d-sm-block">Employee Directory</span>
                                    </a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center" id="profile-tab" data-toggle="tab" href="#profile" aria-controls="profile" role="tab" aria-selected="false">
                                        <i class="bx bx-image mr-25"></i><span class="d-none d-sm-block">Profile</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="account" aria-labelledby="account-tab" role="tabpanel">
                                    
                          
                                    
                                      <div class="col-md-12 col-12">
                                       <div class="card">
                                                   <div class="card-header">
                                            <h4 class="card-title">Employee Contract</h4>
                                        </div>
                                                    <div class="card-body">
                                                        <?PHP  include('templates/employee/contract_add.php');?>
                                                    </div>
                                        </div>
                                     </div>
                                   
                                </div>
                                <div class="tab-pane fade list_employe_tab" id="information" aria-labelledby="information-tab" role="tabpanel">
                                   
                                   
                               
                                      
                                                        <?PHP include('templates/employee/employee_list.php');?>
                                                    
                                  
                                </div>
                                <div class="tab-pane fade" id="profile" aria-labelledby="profile-tab" role="tabpanel">
                                    <?PHP include('templates/employee/employee_profile.php');?>
                                </div>
                                
                            </div>
                        </div>
                    
                </section>
                         

    
    
    
    
    
                 <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_add_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-bulb"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                The employee added to the system successfully ...!
                            </div>
                        </div>
                    </div>
                </div>
                 <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_update_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-bulb"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                The employee updated to the system successfully ...!
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_add_warning_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-error"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                Please fill all the mandatory fields ...!
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_add_error_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-error-circle"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                Some error occurs ...!
                            </div>
                        </div>
                    </div>
                </div>
                 <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_deleted_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-bulb"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                The employee Status Updated to the system successfully ...!
                            </div>
                        </div>
                    </div>
                </div>
                
                
             
                  <div aria-live="polite" aria-atomic="true" style="position: relative">
                    <!-- Position it -->
                    <div style="position: fixed; top: 1rem; right: 1rem; margin-left: 1rem; z-index: 1030">
                        <div class="toast employee_image_toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="top: 1rem; right: 1rem">
                            <div class="toast-header">
                                <i class="bx bx-bulb"></i>
                                <span class="mr-auto toast-title">Employee Contract</span>
                                <small></small>
                                <button type="button" class="close" data-dismiss="toast" aria-label="Close">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                            <div class="toast-body" >
                                The Profile Image uploaded to the system successfully ...!
                            </div>
                        </div>
                    </div>
                </div>
                 
      