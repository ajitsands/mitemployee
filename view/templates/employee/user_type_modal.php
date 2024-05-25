<!--UserType Modal -->
		 <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalScrollableTitle">Scrolling long Content</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
				
						<div class="modal-body">
							<label>User Type Name </label>
							<div class="form-group">
								<input type="hidden" id="txt_type_id">
								<input type="text" placeholder="User Type Name" id="txt_user_type" class="form-control">
							</div>
							
							
							<!-- Table with no outer spacing -->
								<div class="table-responsive">
									<table class="table mb-0" id="tbl_list_of_user_type" >
										<thead>
											<tr>
												<th>SL No</th>
												<th>User Type</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody style="padding:5px;">
											
										</tbody>
									</table>
								</div>
							
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-light-secondary mr-1" data-dismiss="modal" id="btn_modal_close">
								 <i class="bx bx-x"></i>&nbsp;&nbsp;Close
							</button>
							<button type="button" class="btn btn-primary mr-1"  id="btn_user_type_add"> <i class="bx bxs-save"></i>&nbsp;&nbsp;Save</button>
							
							<button type="button" class="btn btn-warning mr-1" id="btn_user_type_edit" data-dismiss="modal">
								
								<i class="bx bx-edit "></i>&nbsp;Update
								
							</button>
						</div>
				
				</div>
			</div>
		</div>
									
	<!--Popup Message-->
<div class="msgpopup">
    <div class="toast hide toast-right" id="popup-error" role="alert" aria-live="assertive" data-delay="3000" aria-atomic="true">
    	<?PHP include ('templates/toast_sub.php'); ?> 
    	<div class="toast-body"style="background: linear-gradient(90deg, rgba(255,218,218,1) 0%, rgba(252,157,157,1) 100%);">
    		Some error occurs........
    	</div>
    </div>
</div>
<div class="msgpopup">
    <div class="toast hide toast-right" id="popup-user_type-save" role="alert" aria-live="assertive" data-delay="3000" aria-atomic="true">
    	<?PHP include ('templates/toast_sub.php'); ?> 
    	<div class="toast-body"style="background: linear-gradient(90deg, rgba(253,255,242,1) 0%, rgba(223,236,193,1) 100%);">
    		User Type Added Successfully....
    	</div>
    </div>
</div>
<div class="msgpopup">
    <div class="toast hide toast-right" id="popup-user_type_update" role="alert" aria-live="assertive" data-delay="3000" aria-atomic="true">
    	<?PHP include ('templates/toast_sub.php'); ?> 
    	<div class="toast-body"style="background: linear-gradient(90deg, rgba(253,255,242,1) 0%, rgba(223,236,193,1) 100%);">
    		 User Type Details Added Successfully....
    	</div>
    </div>
</div>  								
									