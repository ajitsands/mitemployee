<div class="modal fade text-left" id="profile_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel33">Upload Profile Image</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="bx bx-x"></i>
                </button>
            </div>
           
                <div class="modal-body">
                        <form action="../employee_assets/upload_profile_image.php" method="post" enctype="multipart/form-data" class="dropzone dropzone-area" id="profile_employee_image">
                            
                            <input  type="hidden" id="profile_image_employee_id" name="profile_image_employee_id">                                                             
                                                                                      
                            <div class="dz-message">Upload Profile Image</div>
                        </form>
                  
                </div>
                <div class="modal-footer">
                  
                    <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                        <i class="bx bx-x d-block d-sm-none"></i>
                        <span class="d-none d-sm-block">Close</span>
                    </button>
                    
                </div>
            
        </div>
    </div>
</div>