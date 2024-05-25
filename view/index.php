<?PHP include('common_session_connection.php');?>

<!DOCTYPE html>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <?PHP include('templates/template_head.php');?>
    <link rel="apple-touch-icon" href="../app-assets/images/ico/">
    <link rel="shortcut icon" type="image/x-icon" href="../app-assets/images/ico/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet">
	
    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/forms/select/select2.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/tables/datatable/responsive.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/tables/datatable/buttons.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/file-uploaders/dropzone.min.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/pages/app-file-manager.css">
    
    <!-- END: Vendor CSS-->
    
    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="../app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/themes/semi-dark-layout.css">
    <!-- END: Theme CSS-->

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="../app-assets/css/core/menu/menu-types/horizontal-menu.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/pickers/pickadate/pickadate.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/vendors/css/pickers/daterange/daterangepicker.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/plugins/file-uploaders/dropzone.css">
    <link rel="stylesheet" type="text/css" href="../app-assets/css/pages/app-invoice.css">
    
    <link rel="stylesheet" type="text/css" href="../app-assets/css/core/menu/menu-types/horizontal-menu.css">
    <!-- END: Page CSS-->
    <link rel="stylesheet" href="vendor/chosen1.8/chosen.css">
    <!-- Country code CSS-->
    <link rel="stylesheet" href="../app-assets/build/css/intlTelInput.css">
    <link rel="stylesheet" href="../app-assets/build/css/demo.css">
    <!-- END: Country code CSS-->
    
    
    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <!-- END: Custom CSS-->
<style>
    .highlight {color: red; }
    .tdpadding{
        padding: 5px;
      
    }
    .dataTables_filter {
            display: none;
    }
    .table th, .table td {
    padding: 0.5rem 0.5rem
    }
     input, select {
    border: 1px solid #CCC;
    width: 100%;
    }
    .intl-tel-input{
      width: 100%;
      padding-left:91px;
    }
    
    .iti {
        width: 100%;
        color:black;
    }
   .chosen-container-single .chosen-single {
   
		height: 38px;
		background: #ffffff;
		border: 1px solid #f2f3f5;
		padding-top:5px;
		color: #909091;
   }	
   .btn:hover {
    
	background-color:#bab9b6;
    
}
.chosen-container-multi .chosen-choices {
    
    height: 40px;
}

</style>
</head>
<!-- END: Head-->

<!-- BEGIN: Body-->
<body class="horizontal-layout horizontal-menu navbar-static 2-columns   footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns">

    <!-- BEGIN: Header-->
	<?PHP include('templates/top_head.php');?>
   <!-- END: Header-->


    <!-- BEGIN: Main Menu-->
	<?PHP include('templates/main_menu.php');?>
   <!-- END: Main Menu-->

    <!-- BEGIN: Content-->
	<?PHP include('templates/dashboard_body.php');?>
	<!-- END: Content-->

   
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <!-- BEGIN: Footer-->
   <?PHP include('templates/footer.php');?>
    <!-- END: Footer-->


    <script src="js/jquery-3.2.1.min.js"></script>
				<script src="js/popper.min.js"></script>
				<script src="vendor/bootstrap-4.1.3/js/bootstrap.min.js"></script>

				<script src="vendor/cookie/jquery.cookie.js"></script>

					<!-- sparklines chart jquery file -->
					<script src="vendor/sparklines/jquery.sparkline.min.js"></script>

					<!-- Circular progress gauge jquery file -->
					<script src="vendor/circle-progress/circle-progress.min.js"></script>

					<!-- Swiper carousel jquery file -->
					<script src="vendor/swiper/js/swiper.min.js"></script>

					<!-- Chart js jquery file -->
					<script src="vendor/chartjs/Chart.bundle.min.js"></script>
					<script src="vendor/chartjs/utils.js"></script>

					<!-- Footable jquery file -->
					<script src="vendor/footable-bootstrap/js/footable.min.js"></script>

					<!-- datepicker jquery file -->
					<script src="vendor/bootstrap-daterangepicker-master/moment.js"></script>
					<script src="vendor/bootstrap-daterangepicker-master/daterangepicker.js"></script>

					<!-- jVector map jquery file -->
					<script src="vendor/jquery-jvectormap/jquery-jvectormap.js"></script>
					<script src="vendor/jquery-jvectormap/jquery-jvectormap-world-mill-en.js"></script>

					<!-- DataTable jquery file -->
					<script src="vendor/DataTables-1.10.18/js/jquery.dataTables.min.js"></script>
					<script src="vendor/DataTables-1.10.18/js/dataTables.bootstrap4.min.js"></script>

					<!-- CK editor file -->
    <script src="vendor/ckeditor/ckeditor.js"></script>
    
    <!-- -LineControl-Editor file -->
    <script src="vendor/LineControl-Editor/editor.js"></script>
	
	
	
    <!--<script src="../app-assets/vendors/js/vendors.min.js"></script>
    <script src="../app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
    <script src="../app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
    <script src="../app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
    <script src="../app-assets/js/scripts/configs/horizontal-menu.js"></script>
	<script src="../app-assets/js/core/app-menu.js"></script>
    <script src="../app-assets/js/core/app.js"></script>
    <script src="../app-assets/js/scripts/components.js"></script>-->
	
	
    <!-- circular progress file -->
    <script src="vendor/circle-progress/circle-progress.min.js"></script>
     <script src="vendor/chosen1.8/chosen.jquery.min.js"></script>
    <!-- Dropzone jquery file -->
    <script src="vendor/dropzone-master/dropzone.js"></script>
    
    
     <!-- swiper slider jquery file -->
    <script src="js/ladda/spin.min.js" type="text/javascript"></script>
	<script src="js/ladda/ladda.min.js" type="text/javascript"></script>
	<script src="js/ladda/ladda.jquery.min.js" type="text/javascript"></script>
	
	<!-- jquery toast message file -->
    <script src="vendor/jquery-toast-plugin-master/dist/jquery.toast.min.js"></script>
    
	 <!-- sweet alert -->
	 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

    <!-- Application main common jquery file -->
    <script src="js/fileupload_ns.js"></script>
    <script src="js/timezone.js"></script>
    <script src="js/main-with-style-switcher.js"></script>
     <!-- User script file -->
<!-- *************************************************-->



    <!--<script src="../app-assets/js/scripts/pickers/dateTime/pick-a-datetime.js"></script>-->

    <!-- BEGIN: Theme JS-->
    <!-- <script src="../app-assets/js/scripts/configs/horizontal-menu.js"></script>
    <script src="../app-assets/js/core/app-menu.js"></script>
    <script src="../app-assets/js/core/app.js"></script>
    <script src="../app-assets/js/scripts/components.js"></script>
    <script src="../app-assets/js/scripts/footer.js"></script>-->
    
    <!-- END: Theme JS-->
    
    <!--<script src="../app-assets/js/ladda/spin.min.js" type="text/javascript"></script>
	<script src="../app-assets/js/ladda/ladda.min.js" type="text/javascript"></script>
	<script src="../app-assets/js/ladda/ladda.jquery.min.js" type="text/javascript"></script>
    <script src="../assets/js/fileupload_ns.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>-->

    <!-- BEGIN: Page JS-->
     <!--<script src = "../app-assets/vendors/js/ui/jquery.sticky.js"></script>
    <script src = "../app-assets/vendors/js/forms/repeater/jquery.repeater.min.js"></script>
    <script src = "../app-assets/js/scripts/forms/select/form-select2.js"></script>
    <!--<script src="../app-assets/js/scripts/datatables/datatable.js"></script>-->
    <!--<script src = "../app-assets/js/scripts/pages/bootstrap-toast.js"></script>-->
    <!--<script src = "../app-assets/js/scripts/extensions/dropzone.js"></script>-->
    <!--<script src="../app-assets/js/scripts/forms/form-repeater.js"></script>-->
    
    <!--<script src="../app-assets/js/scripts/modal/components-modal.js"></script>-->
    <!--<script src="../app-assets/build/js/intlTelInput.js"></script>-->
    <script src="../httpdocs/user_js/salary.js"></script>


    <script>
    var input = document.querySelector("#phone");

  </script>  
    <script>
     $(document).ready(function () {
         
        $("#employee_data_after_save").hide(); 
        $("#div_add_dependent").hide();
        $("#btn_employee_save").click(function(){
          
        })
        
        
        
     });
        
   </script>
   

	<style>
		.hideon_desktop
		{
			display : block;
		}
		
		@media screen and (min-width: 480px) {
		  .hideon_desktop
			{
				display : none;
			}
		}
		
	</style>
</body>
<!-- END: Body-->

</html>
