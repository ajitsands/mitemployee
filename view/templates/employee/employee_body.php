<section class="users-edit" style="padding-top:10px;"  >
		<div class="card-body" >
			<ul class="nav nav-tabs mb-2" role="tablist">
				<li class="nav-item">
					<a class="nav-link d-flex align-items-center active" id="btn12_employee_register" data-toggle="tab" href="#account" aria-controls="account" role="tab" aria-selected="true">
						<i class="bx bx-user mr-25"></i><span class="d-none d-sm-block">Employee Register</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link d-flex align-items-center" id="btn_list_of_employee" data-toggle="tab" href="#list_of_employee" aria-controls="information" role="tab" aria-selected="false">
						<i class="bx bx-info-circle mr-25"></i><span class="d-none d-sm-block">Employee List</span>
					</a>
				</li>
				<!--<li class="nav-item">
					<a class="nav-link d-flex align-items-center" id="salary_slip_id" data-toggle="tab"  aria-controls="information" role="tab" aria-selected="false">
						<i class="bx bx-info-circle mr-25"></i><span class="d-none d-sm-block">Salary Slip</span>
					</a>
				</li>-->
			</ul>
<!-------------------------------------------------Employee Registration------------------------------------>
		<div class="tab-content" id="emp_reg">
			<div class="tab-pane fade active show" aria-labelledby="account-tab" role="tabpanel">
				<div class="col-md-12 col-12">
					<div class="card">
						<div class="card-header">
							<div class="col">
								<h2 class="content-color-primary page-title">Employee Registration</h2>
							</div>
							<div class="col-auto">
								<button style="background: #00245e;" class="btn btn-rounded text-white text-uppercase pr-3" id="btn_new_employee_registration"><i class="fas fa-plus"style=" margin-right: 8px;"></i> <span class="text-hide-xs"><span class="text-hide-xs">New Employee Register</span></button>
							</div>
						</div>
						<div class="container" style="max-width: 1378px">	
							<div class="card-body">
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="card-body" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Company Name</span></label>
														<div class="input-group">
															<div id="div_company_select" style="width:74%">
																<select class="form-control aria-describedby="button-addon4">
																	<option value="">-Select Company-</option>
																</select>
															</div>
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_company">
																	<i class="bx bx-plus"></i>
																</button>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Employee Name</label>
														<div class="position-relative has-icon-left">
															<input type="text" class="form-control" id="employee_name" name="fname-icon" placeholder="Employee Name">
															<div class="form-control-position">
																<i class="bx bx-user"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Company Id</label>
														<div class="position-relative has-icon-left">
															<input type="number" class="form-control" id="employee_id" name="fname-icon" placeholder="Company Id">
															<div class="form-control-position">
																<i class="bx bx-building"></i>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<div class="form-group">
															<label for="first-name-icon">CPR</label>
															<div class="position-relative has-icon-left">
																<input type="text" class="form-control" id="employee_cpr" name="fname-icon" placeholder="CPR Number">
																<div class="form-control-position">
																	<i class="bx bx-hash"></i>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Passport No</label>
														<div class="position-relative has-icon-left">
															<input type="text" class="form-control" id="employee_passport_no" name="fname-icon" placeholder="Passport No">
															<div class="form-control-position">
																<i class="bx bx-user"></i>
															</div>
														</div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Email Id</label>
														<div class="position-relative has-icon-left">
															<input type="text" class="form-control" id="employee_email" name="fname-icon" placeholder="Email Id">
															<div class="form-control-position">
																<i class="bx bx-envelope"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Division</label>
														<div class="input-group">
															<div id="div_division_select" style="width:74%">
																<select class="form-control aria-describedby:button-addon4">
																	<option value="">-Select Division-</option>
																</select>
															</div>	
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_division" type="button">
																	<i class="bx bx-plus"></i>
																</button>
															</div>
														</div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Department</label>
														<div class="input-group">
															<div id="div_department_select" style="width:74%">
																<select class="form-control aria-describedby:button-addon4">
																	<option value="">-Select Department-</option>
																</select>
															</div>
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_department" type="button">
																	<i class="bx bx-plus"></i>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-6 col-md-12 col-sm-12"> 
													<div class="form-group">
														<label for="mail-icon">Gender</label>
														 <div class="custom-control custom-radio" style="padding-top:9px;">
															 <div class="row">
																<div class="col-lg-6">
																	<input type="radio" class="custom-control-input bg-primary" name="radio_gender" id="radio_gender_male" value="Male">
																	<label class="custom-control-label" for="radio_gender_male">Male</label>
																</div>
																<div class="col-lg-6">
																	<input type="radio" class="custom-control-input bg-secondary" name="radio_gender" id="radio_gender_female" value="Female">
																	<label class="custom-control-label" for="radio_gender_female">Female</label>
																</div>
															  </div>
														 </div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Date of Join</label>
														<div class="input-group">
															<input type="date" class="form-control" id="joining_date" aria-label="Small" aria-describedby="inputGroup-sizing-sm">	
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="card-body" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); height:438px;">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Contact Number</label>
														<div class="position-relative has-icon-left">
															<input type="text" class="form-control" id="employee_phone_no" name="fname-icon" placeholder="Contact Number">
															<div class="form-control-position">
															  <i class='bx bx-phone'></i>
														   </div>
														</div>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="contact-icon">Native Contact Number</label>
														<div class="position-relative has-icon-left">
														   <input type="text" class="form-control" id="emp_native_ph_no" name="fname-icon" placeholder="Contact Number">
														   <div class="form-control-position">
																<i class="bx bx-mobile"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Native Contact Person</label>
														<div class="position-relative has-icon-left">
															<input type="text" class="form-control" id="emp_native_contact_person" name="fname-icon" placeholder="Native Contact Person">
															<div class="form-control-position">
																<i class="bx bx-user"></i>
															</div>
														</div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Normal OT Rate</label>
														<div class="input-group">
															<input type="text" class="form-control" name="fname-icon" id="txt_normal_ot_amt">
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_normalot_all" type="button">Apply to All</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Special OT Rate</label>
														<div class="input-group">
															<input type="text" class="form-control" name="fname-icon" id="txt_special_ot_amt">
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_specialot_all" type="button">Apply to All</button>
															</div>
														</div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">GOSI</label>
														<div class="input-group">
															<input type="text" class="form-control" name="fname-icon" id="txt_gosi_pr">
															<span class="input-group-text">%</span> 
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_gosi_all" type="button">Apply to All</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Leave Travel Allowance Rate</label>
														<div class="input-group">
															<input type="text" class="form-control" name="fname-icon" id="txt_travel_allo">
															<div class="input-group-append">
																<button class="btn btn-primary" id="btn_add_travel_allo" type="button">Apply to All</button>
															</div>
														</div>
													</div>
												</div>
												<div class="  col-lg-6 col-md-6 col-sm-12">
													<div class="form-group">
														<label for="first-name-icon">Indemnity Bonus Rate</label>
														<div class="input-group">
															<input type="text" class="form-control" name="fname-icon" id="txt_indemnity">
															<div class="input-group-append">
																<button class="btn btn-primary" type="button" id="btn_add_indemnity_all">Apply to All</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row  mt-1">
									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="row">
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="form-group">
													<label for="first-name-icon">Rejoinig Date</label>
													<div class="input-group">
														<input type="date" class="form-control" id="txt_rejoining_date" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
													</div>
												</div>
											</div>	
											<div class="col-lg-6 col-md-6 col-sm-12 mt-2">
												<div class="input-group-append">
													<button class="btn btn-primary" id="btn_update_rejoining_date">Update</button>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="row mt-3">
											<div class="col-lg-4 col-md-4 col-sm-12"  style="padding-top:0px;" >
											</div> 
											<div class="col-lg-4 col-md-4 col-sm-12"  style="padding-top:0px;" >
											</div>
											<div class="col-lg-4 col-md-4 col-sm-12"  style="padding-top:0px;" >
												<input type="hidden" id="v_id">
												<button type="button" class="btn btn-primary mr-1" id="btn_employee_register"> <i class="bx bxs-save"></i>&nbsp;&nbsp;Save</button>
												<button type="button" class="btn btn-primary" id="btn_edit_employee"><i class="bx bx-x"></i>&nbsp;&nbsp;Update</button>
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
<!---------------------------------------------------------End-------------------------------------------->
<!---------------------------------------------------List Of Employee------------------------------------->
			
			<div class="tab-content" id="list_of_employee">
				<div class="tab-pane fade active show" id="account" aria-labelledby="account-tab" role="tabpanel">
					<div class="col-md-12 col-12">
					   <div class="card">
							<div class="card-header">
								<h4 class="card-title">List Of Employee</h4>
							</div>
					<div class="container fluid py-1 mb-1 py-1">
						
					<div class="row ">
                        <div class="col-sm-5 col-md-2 col-lg-2">
							<label for="validationTooltip05">Start Date</label>
							<input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="txt_start_date">
                        </div>
						<div class="col-sm-5 col-md-2 col-lg-2">
							<label for="validationTooltip05">End Date</label>
							<input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="txt_end_date">
						</div>
						<div class="col-sm-2 col-md-1 col-lg-1" style="padding-top:25px">
							<button class="btn btn-primary" id="btn_search_date">search</button>
						</div> 
						<div class="col-sm-2 col-md-1 col-lg-1" style="padding-top:30px;padding-left:-10px;">
						</div>
						<div class="col-sm-6 col-md-2 col-lg-3">
						    <label>Employee Name</label>
							<div id="div_employee_select">  
    							<select class="form-control form-control-sm">
    								<option>--Select Employee--</option>
    							</select>
							</div>
						</div>
						<div class="col-sm-6 col-md-3 col-lg-3">
							<label>Contact No</label>
							<input type="text" class="form-control" id="ph_search"> 
						</div>
						
                    </div>
							
							<div class="row justify-content-center py-1">
								<div class="col-lg-12 pt-lg-1 mt-lg-0 text-center">
									<table id="list_of_employees" class="table text-black table-bordered table-hover display">
										<thead>
											<tr>
												<th>Id</th>
												<th>Employee Name</th>
												<th>Company Name</th>
												<th>Joining Date</th>
												<th>Division</th>
												<th>Department</th>
												<th>Contact No</th>
												<th>Status</th>
												<th>View</th>
											</tr>
										</thead>
									</table>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
<!------------------------------------------------End------------------------------------------------>
		</div>
</section>

<!----------------------------------------------Company Modal---------------------------------->

    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_company_add">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
					<h5 class="modal-title">Add Company</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
                </div>
                <div class="modal-body">
                    <div id="error_msg"></div> 
                        <div class="row">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<label>Company Name</label>
								<input type="text" class="form-control" placeholder="" id="txt_company_name">
							</div>	
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<label>Company Adress</label>
								<textarea class="form-control" id="txt_company_adress" rows="4" cols="50"></textarea>
							</div>	
                        </div>
                </div>
				<div class="modal-footer">
					<button type="button" class="btn btn-light-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary mr-1" id="btn_company_save">Save</button>
				</div>
            </div>
        </div>
    </div>
	
<!---------------------------------------------------END---------------------------------------->


<!----------------------------------------------Division Modal---------------------------------->

    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_division_add">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
					<h5 class="modal-title">Add Division</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
                </div>
                <div class="modal-body">
                    <div id="error_msg"></div> 
                        <div class="row">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<label>Division Name</label>
								<input type="text" class="form-control" placeholder="" id="txt_division_name">
							</div>	
						</div>
                </div>
				<div class="modal-footer">
					<button type="button" class="btn btn-light-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary mr-1" id="btn_division_save">Save</button>
				</div>
            </div>
        </div>
    </div>
	
<!---------------------------------------------------END--------------------------------------->


<!----------------------------------------------Department Modal---------------------------------->

    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_department_add">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
					<h5 class="modal-title">Add Department</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
                </div>
                <div class="modal-body">
                    <div id="error_msg"></div> 
                        <div class="row">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<label>Department Name</label>
								<input type="text" class="form-control" placeholder="" id="txt_department_name">
							</div>	
						</div>
                </div>
				<div class="modal-footer">
					<button type="button" class="btn btn-light-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary mr-1" id="btn_department_save">Save</button>
				</div>
            </div>
        </div>
    </div>
	
<!---------------------------------------------------END--------------------------------------->
