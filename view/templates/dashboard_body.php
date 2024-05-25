<?php

include('../model/connection/connection.php');

$connection = new DBConnection();
$conn = $connection->ConnectToMYSQL();

?>
	<div id="root">
		<div class="container pt-5">
			<div class="row align-items-stretch">
				<?php
					$SQL = "SELECT COUNT(*) AS total FROM company_master";
					$countCompany = mysqli_query($conn, $SQL);

					// Check if the query was successful
					if ($countCompany) {
						$countCompanys = mysqli_fetch_assoc($countCompany);
						$totalCompanies = $countCompanys['total'];
					} else {
						$totalCompanies = 0; // Default value in case of query failure
					}
				?>
				<div class="c-dashboardInfo col-lg-6 col-md-6">
					<div class="wrap">
						<div class="card">
							<div class="card-header mt-1 d-flex align-items-end justify-content-around">
								<h3 class="card-title" style="font-size:22px;">Total Companies</h3>
							</div>
							<div class="card-body">
								<div class="row justify-content-center">
									<div class="col-auto text-center">
										<h4 class="mb-0 text-dark" style="font-size:30px;"><i class="bx bx-building mt-2 ml-100" style="color:black; font-size:20px;"></i> <?php echo $totalCompanies; ?></h4>
									</div>
								</div>
							</div>
									<div class="resize-triggers"><div class="expand-trigger"><div style="width: 210px; height: 35px;"></div></div><div class="contract-trigger"></div></div>
								
							
						</div>
					</div>
				</div>
				<?php
				$SQL = "SELECT COUNT(*) AS total FROM emp_registration_tbl";
				$countEmployee = mysqli_query($conn, $SQL);

				// Check if the query was successful
				if ($countEmployee) {
					$countEmployees = mysqli_fetch_assoc($countEmployee);
					$totalEmployees = $countEmployees['total'];
				} else {
					$totalEmployees = 0; // Default value in case of query failure
				}
				?>
				<div class="c-dashboardInfo col-lg-6 col-md-6">
					<div class="wrap">
						<div class="card">
							<div class="card-header  mt-1 d-flex align-items-end justify-content-around">
								<h3 class="card-title"style="font-size:22px;">Total Employees</h3>
							</div>
							<div class="card-body">
								<div class="row justify-content-center">
									<div class="col-auto text-center">
										<h4 class="text-dark" style="font-size:30px;"><i class="bx bx-user mt-2 ml-100" style="color:black; font-size:20px;"></i><?php echo $totalEmployees; ?></h4>
									</div>
									<div class="col-auto">
										
									</div>
								</div>
								<div class="resize-triggers"><div class="expand-trigger"><div style="width: 210px; height: 35px;"></div></div><div class="contract-trigger"></div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row align-items-stretch">
				<?php
					$SQL = "SELECT company_id,company_name,SUM(earning_amt) AS total_earning_amt FROM salary_child_tbl s JOIN (SELECT emp_tbl_id, MAX(salary_date) AS latest_salary_date FROM salary_child_tbl WHERE allo_ded_tbl_id = 1 AND status = 'Allowence' GROUP BY emp_tbl_id ) latest_salary ON s.emp_tbl_id = latest_salary.emp_tbl_id AND s.salary_date = latest_salary.latest_salary_date WHERE s.allo_ded_tbl_id = 1 AND s.status = 'Allowence' GROUP BY company_id;";
					$countCompany = mysqli_query($conn, $SQL);
					while ($row = mysqli_fetch_assoc($countCompany))
					{
						$company = $row['company_name'];
						$total_earning_amt = $row['total_earning_amt'];
			
				?>
				<div class="c-dashboardInfo col-lg-4 mt-3 col-md-6">
					<div class="card" style="width:351px;">
						<div class="card-header d-flex align-items-end justify-content-around">
							<h1 class="card-title" style="font-size: 22px;">Expected Salary</h1>
						</div>
						<div class="card-body">
							<div class="row justify-content-center">
								<div class="col-auto text-center">
									<h6 class="text-primary" style="font-size:15px;"><?php echo $company  ?></h6>
									<h6 class="text-dark mt-1" style="font-size:20px;"><?php echo $total_earning_amt ?></h6>
								</div>
							</div>
						</div>
						<div class="resize-triggers"><div class="expand-trigger"><div style="width: 246px; height:20px;"></div></div><div class="contract-trigger"></div></div>
					</div>
				</div>	
				<?php
				}
				?>
			</div>
		</div>
	</div>
	
	<style>
	
	.c-dashboardInfo .wrap 
	{
	  background: #ffffff;
	  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
	  border-radius: 7px;
	  text-align: center;
	  position: relative;
	  overflow: hidden;
	  padding: 40px 25px 20px;
	  height: 90%;
	}

	.c-dashboardInfo .wrap:after 
	{
	  display: block;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 10px;
	  content: "";
	}

	.c-dashboardInfo:nth-child(1) .wrap:after {
	  background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
	}
	.c-dashboardInfo:nth-child(2) .wrap:after {
	  background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
	}

	</style>
