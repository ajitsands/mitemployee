<div class="modal fade text-left" id="dependent_attachment_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel33">Upload Attachments</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="bx bx-x"></i>
                </button>
            </div>
               
                  
                    <div class="modal-body" style="overflow:hidden">
                          
                         <div class="row">
                             <div class=" col-lg-4 col-md-6 col-sm-12">
                                 <div class="form-group">
                                         <label>Attachment Name </label>
                                        <input type="text" placeholder="Attachment Name" id="txt_attachment_name" class="form-control">
                                  </div>
                             </div>
                             <div class=" col-lg-4 col-md-6 col-sm-12">
                                 <div class="form-group">
                                         <label>Ref ID </label>
                                        <input type="text" placeholder="Ref ID" id="txt_employee_ref_id" class="form-control">
                                  </div>
                             </div>
                             
                             <div class=" col-lg-4 col-md-6 col-sm-12">
                                 <div class="form-group">
                                         <label> Date </label>
                                         <div class="position-relative has-icon-left">
                                        <input type="hidden" id="txt_type_id">
                                        <input type="text" placeholder="Expiry Date" class="form-control pickadate" id="txt_date_attachment">
                                        <div class="form-control-position">
                                        <i class='bx bx-calendar'></i>
                                    </div>
                                     </div>
                                  </div>
                             </div>
                             <!-- <div class=" col-lg-3 col-md-6 col-sm-12">-->
                             <!--               <div class="form-group">-->
                                               <!--<button type="button" class="btn btn-primary mr-1" id="btn_attachment_new"> <i class="bx bxs-save"></i>&nbsp;&nbsp;NEW</button>-->
                             <!--                   <label style="color:white;"> New </label></br>-->
                                               
                             <!--    </div>-->
                             <!--</div>-->
                         </div>  
                        
                        
                        
                            <form action="../employee_assets/upload_attachments.php" method="post" enctype="multipart/form-data" class="dropzone dropzone-area" id="profile_employee_attachment" >
                                 
                                 <input  type="hidden" id="attachment_employee_id" name="attachment_employee_id">                                                             
                                 <input  type="hidden" id="employee_attachment_name" name="employee_attachment_name">                                                             
                                 <input  type="hidden" id="employee_ref_id" name="employee_ref_id">                                                             
                                 <input  type="hidden" id="employee_attachment_date" name="employee_attachment_date">                                                             
                                                                                        
                                <div class="dz-message" >Upload Attachments</div>
                            </form>
                        
                    </div>
                   
                <div class="modal-footer">
                    <!--<button type="button" class="btn btn-light-secondary" id="btn_attachment_new"><i class="bx bxs-save"></i>&nbsp;NEW</button>-->
                    
                    <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                        <i class="bx bx-x d-block d-sm-none"></i>
                        <span class="d-none d-sm-block">Close</span>
                    </button>
                    
                    <!--<button type="button" id="btn_user_type_add" class="btn btn-primary ml-1" data-dismiss="modal">-->
                    <!--    <i class="bx bx-check d-block d-sm-none"></i>-->
                    <!--    <span class="d-none d-sm-block toast-basic-toggler">SAVE</span>-->
                        
                    <!--</button>-->
                    <!--<button type="button" class="btn btn-warning ml-1" id="btn_user_type_edit" data-dismiss="modal">-->
                    <!--    <i class="bx bx-check d-block d-sm-none"></i>-->
                    <!--    <span class="d-none d-sm-block toast-basic-toggler">Update</span>-->
                        
                    <!--</button>-->
                </div>
            
        </div>
    </div>
</div>