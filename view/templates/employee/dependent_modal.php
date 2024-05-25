<!--UserType Modal -->
		<div class="modal fade text-left" id="dependent_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33" aria-hidden="true" data-backdrop="static">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="myModalLabel33">Add Dependent </h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btn_modal_close">
							<i class="bx bx-x"></i>
						</button>
					</div>
				    <div class="modal-body">
						<!-- Add dependent -->
                        <div class="card-body pt-50">
                    
                    <div class=" " style="padding-top:20px;">
                        <form class="form repeater-default">
                            <div data-repeater-list="dependent_details">
                           
                                <div data-repeater-item>
                                    <div class="row mb-90">
                                        <div class="col-4 col-md-7 invoice-item-title">Dependent  Name</div>
                                        <div class="col-4 invoice-item-title">Relation</div>
                                        <!--<div class="col-2 invoice-item-title">Attachment</div>-->
                                        <!--<div class="col-1 invoice-item-title" style="padding-left:5px;">Save</div>-->
                                        <div class="col-1 invoice-item-title" style="padding-left:5px;">Close</div>
                                    </div>
                                    <div class="  border rounded mb-1">
                                        <div class=" row pt-1 px-1">
                                            
                                            <div class="col-md-7 col-12 form-group " >
                                                <input type="text" class="form-control dependent_name" placeholder="Dependent Name" id="txt_dependent_name" name="depname" >
                                            </div>
                                            <div class="col-12 col-md-4 form-group">
                                                <select class="form-control " id="select_dependent_relation" name="deprel" >
                                                    <option value="select">--Select--</option>
                                                    <option value="Husband">Husband</option>
                                                    <option value="Wife">Wife</option>
                                                    <option value="Son">Son</option>
                                                    <option value="Daughter">Daughter</option>
                                                    <option value="Father">Father</option>
                                                    <option value="Mother">Mother</option>
                                                    <option value="Father in law">Father in law</option>
                                                    <option value="Mother in law">Mother in law</option>
                                                    <option value="Others">Others</option>
                                                    
                                                </select>
                                            </div>
                                            
                                           
                                            <div class="col-md-1 col-12 form-group">
                                                <button class="btn btn-icon btn-light-secondary " type="button" data-repeater-delete >
                                                    <i class="bx bx-x"></i>
                                                </button>
                                               
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col p-0">
                                    <button class="btn btn-light-primary btn-sm" data-repeater-create type="button">
                                        <i class="bx bx-plus"></i>
                                        <span class="invoice-repeat-btn">Add Dependent</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <div class="modal-footer">
							<button type="button" class="btn btn-light-secondary mr-1" data-dismiss="modal" id="btn_modal_close">
								 <i class="bx bx-x"></i>&nbsp;&nbsp;Close
							</button>
							<button type="button" class="btn btn-primary mr-1"  id="btn_save_dependent"> <i class="bx bxs-save"></i>&nbsp;&nbsp;Save</button>
							
							
					</div>
                    <div>
                        <div class="col-12">
                            <div >
                             <div >
                                    <div class="row">
                                        <div class="col-12">
                                        <h5 class="card-title">
                                            List of Employee Dependents
                                        </h5>
                                        </div>
                                        
                                    </div>
                                </div>
                            <div >    
                                <div class="table-responsive">
									<table class="table mb-0" id="tbl_list_of_dependent" style="width:100%" >
										<thead>
											<tr>
												
												<th>Name</th>
												<th>Relation</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody style="padding:5px;">
											
										</tbody>
									</table>
								</div>
						    </div>		
                        </div>
                    
                    </div>
                    
                    
					
				</div>
			</div>
		</div>
				</div>					
            </div>
        </div>    