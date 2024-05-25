	<section class="users-edit" style="padding-top:10px;"  >
		<div class="card-body" >
			<ul class="nav nav-tabs mb-2" role="tablist">
				<li class="nav-item">
					<button class="nav-link d-flex align-items-center active" id="ss_salary_entries"  data-toggle="tab" href="information" aria-controls="information" role="tab" aria-selected="true">
						<span class="d-none d-sm-block">Salary Slip</span>
					</button>
				</li>
				<li class="nav-item">
					<button class="nav-link d-flex align-items-center" id="view_salary_slip"  data-toggle="tab" aria-controls="information" role="tab" aria-selected="false">
						<span class="d-none d-sm-block">List of Salary Slips</span>
					</button>	
				</li>
				<li class="nav-item">
					<button class="nav-link d-flex align-items-center" id="btn_view_basic_salaries"  data-toggle="tab" aria-controls="information" role="tab" aria-selected="false">
						<span class="d-none d-sm-block">List Of Basic Salaries</span>
					</button>
				</li>
			</ul>
		</div>
<!-------------------------------------------------Salary Slip Content----------------------------------->
			<div class="tab-content" id="salary_maincontent_div">
				<div class="tab-pane fade active show" aria-labelledby="account-tab" role="tabpanel">
					<div class="col-md-12 col-12">
						<div class="card">
							<div class="card-header">
								<div class="col">
									<h2 class="content-color-primary page-title" id="dropdownMenuButton">Salary Slip</h2>
									<p class="content-color-secondary page-sub-title">Create/Edit/Delete Salary Slip</p>
								</div>
								<div class="col-auto">
									<button style="background: #00245e;" class="btn btn-rounded text-white text-uppercase pr-3" id="btn_new_salary_slip"><i class="fas fa-plus"style=" margin-right: 8px;"></i> <span class="text-hide-xs"><span class="text-hide-xs">New Salary Slip</span></button>
								</div>
							</div>
							<div class="container" style="max-width: 1378px">	
								<div class="card-body">
									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12" id='div_first'>
											<div class="card-body" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label>Company</label>
															<div class="input-group">
																<div id="div_company_select" style="width:100%">
																	<select class="form-control aria-describedby="button-addon4">
																		<option>--Select company--</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label>Name</label>
															<div class="input-group">
																<div id="div_employee_select" style="width:100%">
																	<select class="form-control aria-describedby="button-addon4">
																		<option>--Select Employee--</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Company Id</label>
															<div class="position-relative">
																<input type="text" class="form-control" id="employee_id">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Division</label>
															<div class="position-relative">
																<input type="text" class="form-control" id="employee_division">
															</div>
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<div class="form-group">
																<label for="first-name-icon">Department</label>
																<div class="position-relative">
																	<input type="text" class="form-control" id="employee_department">
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Contact Number</label>
															<div class="position-relative">
																<input type="text" class="form-control" id="contact_no">
															</div>
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="txt_gosi_pr">GOSI Pr</label>
															<div class="input-group">
																<input type="text" class="form-control" id="txt_gosi_pr">
																<div class="input-group-append">
																	<span class="input-group-text">%</span>
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
																<div class="position-relative">
																	<input type="text" class="form-control" id="txt_travel_allo_rt">
																</div>
															</div>
														</div>
													</div>
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Notes</label>
															<div class="input-group">
																<textarea id="txt_note" class="form-control form-control-sm" style="width: 320px; height: 49px;"></textarea>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12">
											<div class="card-body" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); height:450px;">
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Duty Hr</label>
															<div class="position-relative">
																<input type="text" class="form-control" id="txt_duty_hr">
															</div>
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="contact-icon">Days</label>
															<div class="position-relative">
															   <input type="text" class="form-control" id="txt_days">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Starting Time</label>
															<div class="position-relative">
																<input type="time" class="form-control" id="txt_starting_time">
															</div>
														</div>
													</div>
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Ending Time</label>
															<div class="input-group">
																<input type="time" class="form-control" id="txt_ending_time">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Date</label>
															<div class="input-group">
																<input type="date" class="form-control" name="fname-icon" id="txt_date">
															</div>
														</div>
													</div>
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Normal OT Rate</label>
															<div class="input-group">
																<input type="text" class="form-control" name="fname-icon" id="txt_normal_ot">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="  col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Special OT Rate</label>
															<div class="input-group">
																<input type="text" class="form-control" name="fname-icon" id="txt_special_ot" disabled>
																<input type="hidden" class="form-control form-control-sm" id="txt_basic_salary">
															</div>
														</div>
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label for="first-name-icon">Indemnity Bonus Rate</label>
															<div class="input-group">
																<input type="text" class="form-control" name="fname-icon" id="txt_indemnity_rt">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="form-group">
															<label></label>
															<div>
															<input type="hidden">
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-md-6 col-sm-12">
											<div class="card-body" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); height:380px;">
												<div class="card rounded-0 border-0 mb-12">
													<div class="card-body"> 
														<div class="row">
															<div class="col-md-2 mb-4 sm-12" style="display: flex; align-items: center;">
																<label for="checkbox" style="margin-right: 10px;">Final Settlement</label>
																<input type="checkbox" id="checkbox" name="checkbox" style="width: 12px; height: 12px;">
															</div>
															<div class="col-lg-10 col-md-10 col-mb-4 col-sm-12" id="div_final_stlmt">
																<div class="row">
																	<div class="col-lg-3 col-md-6 col-sm-12" style="">
																		<label>Rejoining Date</label>
																		<input type="date" class="form-control form-control-sm" id="txt_rejoining_date" disabled> 
																	</div>
																	<div class="col-lg-3 col-md-6 col-sm-12" style="">
																		<label>Last Date</label>
																		<input type="date" class="form-control form-control-sm" id="txt_last_date"> 
																	</div>
																	<div class="col-lg-3 col-md-6 col-sm-12" style="">
																		<label>Months</label>
																		<input type="text" class="form-control form-control-sm" id="txt_calc_month" disabled> 
																	</div>
																	<div class="col-lg-3 col-md-6 col-sm-12" style="">
																		<label>No Of Days</label>
																		<input type="text" class="form-control form-control-sm" id="lbl_number_of_days" disabled> 
																	</div>
																</div>    
															</div>     
														</div>               	
														<div class="row">
															<div class="col-lg-4 col-md-4 col-sm-12">
																<div class="form-group">
																	<label for="first-name-icon">Allowance</label>
																	<div class="input-group mb-3" style="vertical-align:middle;">
																		<div id="div_allowence_select" style="width:74%;">
																			<select class="form-control form-control-sm">
																				<option>--Select Allowance--</option>
																			</select>
																		</div>
																		<div class="input-group-append">
																			<button class="btn btn-primary" id="btn_add_allowence">Add</button>
																		</div>
																	</div>
																	<textarea type="text" class="form-control form-control-sm" style="width: 320px; height: 70px;" id="txt_allo_desc"></textarea>
																</div>
															</div>
															<div class="col-md-2 mb-4 sm-12">
																 <label for="validationTooltip03" id="label_allo">Amount</label>
																  <div class="input-group mb-3" style="vertical-align:middle;"> 
																	<input type="text" class="form-control" id="txt_allo_amount" style="width:50%;"/>
																	<div class="input-group-append">
																		<button class="btn btn-primary" id="btn_save_allo">save</button>
																	</div>
																</div>
															</div>
															<div class="col-md-4 mb-4 sm-12" style="">
																 <label for="validationTooltip03">Deduction</label>
																  <div class="input-group mb-3" style="vertical-align:middle;"> 
																	<div id="div_deduction_select" style="width:74%;">
																		<select class="form-control form-control-sm">
																			<option>--Select Deduction--</option>
																		</select>
																	</div>
																	<div class="input-group-append">
																		<button class="btn btn-primary" id="btn_add_deduction">Add</button>
																	</div>
																</div>
																<textarea type="text" class="form-control form-control-sm" style="width: 320px; height: 70px;" id="txt_dedc_desc"></textarea>
															</div>
															<div class="col-md-2 mb-4 sm-12">
																 <label for="validationTooltip03">Amount</label>
																<div class="input-group mb-3" style="vertical-align:middle;"> 
																	<input type="text" class="form-control" id="txt_deduc_amount" style="width:50%;"/>
																	<div class="input-group-append">
																		<button class="btn btn-primary" id="btn_save_dedu">save</button>
																	</div>
																</div>
															</div>
														</div>       
													</div>
												</div>  
											</div>
										</div>         
									</div>
									<div class="container mt-1 main-container mt-1">
										<div class="row">
											<div class="col-sm-12 col-md-6 col-lg-12">
												<div class="card rounded-0 border-0 mb-12">    
													<div class="card-body " style="padding-top:5px;font-size:12px;overflow:auto;" id="div_salary_slip_child">
														<table id="tbl_salary_slip_list" class="table table-striped table-bordered dataTable" style="width:100%" style="padding-top:5px;font-size:12px">
															<thead>
																<tr>
																	<th>SI</th>
																	<th>Allowance/Deduction</th>
																	<th>Allo/Dedu id</th>
																	<th>Hrs</th>
																	<th>Days</th>
																	<th>Allowance Amount</th>
																	<th>Deduction Amount</th>
																	<th>Description</th>
																	<th>status</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
															</tbody>
															<tfoot>
																<tr>
																	<td></td>
																	<!--<td></td>-->
																	<!--<td></td>-->
																	<td colspan="4"><strong>Total</strong></td>
																	<td style="text-align: right;"><span id="total_allowance_amount" style="font-weight: bold; text-align: right;">0.000</span></td>
																	<td style="text-align: right;"><span id="total_deduction_amount" style="font-weight: bold; text-align: right;">0.000</span></td>
																	<td colspan="2"><strong>Net Amount</strong></td>
																	<td style="text-align: right;"><span id="span_net_amount" style="font-weight: bold; text-align: right;">0.000</span></td>
																</tr>
															</tfoot>
														</table> 
														<input type="hidden" id="hid_child_id">                             
													</div>
													<div class="card-footer">
														<div class="row">
															<div class="col-sm-12 col-md-4 col-lg-4">
																<!--<button class="btn btn-secondary" id="btn_salary_slip_print_without_head">Print Without Head</button>-->
															</div>
															<div class="col-sm-12 col-md-4 col-lg-4">
																<!--<button class="btn btn-dark" id="btn_salary_slip_print_with_head"> Print With Head</button>-->
															</div>
															<div class="col-sm-12 col-md-4 col-lg-4" style="text-align:right">
																<button class="btn btn-primary" id="btn_employee_register">Generate</button>
																<button style="display:none;" class="btn btn-warning" id="btn_edit_employee" style="color:white">Update Gate Pass</button>
																<input type="hidden" class="form-control form-control-sm" id="v_id"> 
																<input type="hidden" class="form-control form-control-sm" id="v_salary_main_id">
																<input type="hidden" class="form-control form-control-sm" id="v_final_stlmt">		
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
					</div>
				</div>
			</div>
			   
			<div id="tbl_salary_slip_div">							   
				<div id="list_of_salary_slip_table" class="sidenavR " height="100%" style="background-color:white;z-index: 999">
					<div class="col-sm-12 col-md-12 col-lg-12" style="padding:0px">
						<div class="card rounded-0 border-0 mb-12">
							<div class="card-header">
								<div class="row">
									<h5 class="mb-0">List of Salary Slips</h5>
								</div>          
							</div>
							<div class="col-sm-6 col-md-4 col-lg-4">
								<label>Company Name</label>
								<div class="input-group">
									<div id="div_company_select_for_search" style="width:80%; height:40px;">  
										<select class="form-control form-control-sm">
											<option>--Select Company--</option>
										</select>
									</div>
									<button class="btn btn-primary" id="btn_for_search_company" style="height:40px;">
										<i class="bx bx-search"></i>
									</button>
								</div>
							</div>
							<div class="card-body " style="overflow:auto;">
								<div class="row ">
									<div class="col-sm-5 col-md-2 col-lg-2">
										<label for="validationTooltip05">Start Date</label>
										<input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="txt_start_date">
									</div>
									<div class="col-sm-5 col-md-2 col-lg-2">
										<label for="validationTooltip05">End Date</label>
										<input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="txt_end_date">
									</div>
									<div class="col-sm-6 col-md-2 col-lg-2">
										<label>Employee Name</label>
										<div id="div_employee_select_for_search">  
											<select class="form-control form-control-sm">
												<option>--Select Employee--</option>
											</select>
										</div>
									</div>
									<div class="col-sm-6 col-md-3 col-lg-3">
										<label>Division</label>
										<div id="div_divis_select_for_search">  
											<select class="form-control form-control-sm">
												<option>--Select Division--</option>
											</select>
										</div>
									</div>
									<div class="col-sm-6 col-md-3 col-lg-3">
										<label>Department</label>
										<div id="div_dpt_select_for_search">  
											<select class="form-control form-control-sm">
												<option>--Select Department--</option>
											</select>
										</div>
									</div>
									<!--<div class="col-sm-6 col-md-3 col-lg-3">-->
									<!--	<label>Contact no</label>-->
									<!--	<input type="text" class="form-control form-control-sm" id="ph_search"> -->
									<!--</div>-->
									
								</div>
									
									<!--Table-->
										<table class="table " id="list_of_salary_slip" class="custom-font" style="padding-top:5px;font-size:12px;width:100%">
											<thead>
												<tr class="custom-font">
													<th>ID</th>
													<th>Company Name</th>
													<th>Employee Name</th>
													<th>ID</th>
													<th>Division</th>
													<th>Department</th>
													<th>Salary Date</th>
													<th>Amount</th>
													<th>Status</th>
													<th>View </th>
													<th>Delete</th>
												</tr>
											</thead>
											<tbody>
												
											</tbody>
											<tfoot>
												<tr>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td><strong>Total:</stong></td>
													<td></td>
													<td></td>
													<td></td>
												</tr>
											</tfoot>
										</table>
										<!-- /.table-responsive -->
							</div>
						</div>
					</div>   
				</div>
				<!-- content page ends -->
			</div>
			<div id="tbl_basic_salary_div">	
				<!-- content page ends -->
					
				<div id="list_of_basic_salaries_table" class="sidenavR " height="100%" style="background-color:white;z-index: 999">
					<div class="col-sm-12 col-md-12 col-lg-12" style="padding:0px">
						<div class="card rounded-0 border-0 mb-12">
							<div class="card-header">
								<div class="row ">
									<h5 class="mb-0">List of Basic Salaries</h5>
								</div>       
							</div>
							<div class="card-body " style="overflow:auto;">
								<div class="row">
								</div>
									<!--Table-->
								<table class="table " id="basic_salary_list" class="custom-font" style="padding-top:5px;font-size:12px;width:100%">
									<thead>
										<tr class="custom-font">
											<th>ID</th>
											<th>Company Name</th>
											<th>Employee Name</th>
											<th>Employee ID</th>
											<th>Division</th>
											<th>Department</th>
											<th>Basic Salary</th>
											
										</tr>
									</thead>
									<tbody>	
									</tbody>
									<tfoot>
										<tr>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td><strong>Total:</strong></td>
											<td></td>
											<td></td> 
										</tr>
									</tfoot>
								</table>
							</div>				
						</div>
					</div>
						<div class="col-sm-12 col-md-2 col-lg-2">
							<!--<button class="btn btn-dark" id="btn_basic_salary_print_with_head"><i class="material-icons">print</i> Print With Head</button>-->
						</div>
				</div>		
			</div>
				
				
	<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_allowence_add">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Allowence</h5>
					<button type="button" class="close" data-dismiss="modal" id="btn_top_reissue_close" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div id="error_msg"></div> 
						<div class="row">
							<div class="col-sm-12 col-md-9 col-lg-9">
								<label>Title</label>
								<input type="text" class="form-control" placeholder="" id="txt_allowence_name">
							</div>	
						</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" id="btn_reissue_close">Close</button>
					<button type="button" class="btn btn-primary" id="btn_allowence_save">Save</button>
				</div>
			</div>
		</div>
	</div>					  
	<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_deduction_add">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Deduction</h5>
					<button type="button" class="close" data-dismiss="modal" id="btn_top_reissue_close" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div id="error_msg"></div> 
						<div class="row">
							<div class="col-sm-12 col-md-9 col-lg-9">
								<label>Title</label>
								<input type="text" class="form-control" placeholder="" id="txt_deduction_name">
							</div>	
						</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal" id="btn_reissue_close">Close</button>
					<button type="button" class="btn btn-primary" id="btn_deduction_save">Save</button>
				</div>
			</div>
		</div>
	</div>
</section>