<?PHP  
include('../common_session_connection.php');
 //	$result_purchase_order = mysqli_query($varDBConnection,"Select  purchase_order_id,requisition_ref_id,project_name,vendor_name,date_format(default_date,'%d-%m-%Y') as default_date  FROM `purchase_order` where order_status='Active'");
	//echo "Select lead_id,lead_title  FROM `tbl_proposal` where customer_id='".$_POST['v_client_id']."'";
?>



<div class="row">
    <div class="col-12">
        <div class="card">
            
            <div class="card-header">
                <div class="row" style="width:100%">
                    <div class="col-12"> 
                        <h5 class="card-title">
                            Inventory Master Based on PO
                        </h5>
                    </div>
                </div>
            </div>
            
            <div class="row" style="padding-bottom:5px;">
                <!--<div class="col-1" style="padding-top:10px;text-align:right">-->
                <!--    <label for="address-icon">Search </label>-->
                <!--</div>-->
                <div class="col-8" style="padding-top:10px; padding-left:50px;" id="div_purchase_order_select">
                    <label for="first-name-icon">Select PO Details &nbsp;</label>
                    <select class="select2 form-control sel_po_requisition" placeholder="Button on right" aria-describedby="button-addon3" id="select_po_details">
                   
                            <option value="0">--Select PO --</option>
                            <!--<?PHP 	while($row_purchase_order=mysqli_fetch_assoc($result_purchase_order)) { ?>-->
                           
                            <!--  <option value="<?PHP //echo $row_purchase_order['purchase_order_id'].'-'.$row_purchase_order['vendor_id']; ?>"><?PHP echo  $row_purchase_order['requisition_ref_id'].' - '.$row_purchase_order['project_name'].' - '.$row_purchase_order['default_date'].' - '.$row_purchase_order['vendor_name']; ?></option>-->
                              
                            <!--<?PHP } ?>-->
                    </select>
                </div>
                <div class="col-4" style="padding-top:30px; padding-left:50px;">
                    <label for="first-name-icon"></label>
                    <button type="button" class="btn btn-primary" id="btn_po_deatils">Show PO Details</button>
                </div>    
            </div>

            <!--<div class="row">-->
            <!--    <div class="col-1" style="padding-top:10px;text-align:right">-->
            <!--        <label for="address-icon">Search </label>-->
            <!--    </div>-->
            <!--    <div class="col-5">-->
            <!--        <input type="text" id="customer_search" placeholder="Search">-->
            <!--    </div>-->
            <!--</div>-->
                                
            <div class="card-body card-dashboard">
                <!-- table transactions statistics starts -->
                <section id="table-transactions-statistics">
                    <div class="row match-height">
                        <!-- table Transaction history start -->
                        <div id="table-statistics" class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-header border-bottom">
                                    <input type="hidden" id="txt_requsition_master_status">
                                    <h4 class="card-title">Purchase Order List<span></span></h4>
                                    <div style="float:left;"><i class="text-primary bx bx-printer mr-1"></i></div>
                                    <div class="heading-elements">
                                        
                                    </div>
                                </div>
                                <!-- table start -->
                                <div class="table-responsive">
                                    <table id="tbl_list_of_inventory" class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Req Qty</th>
                                                <th>Received Qty</th>
                                                <th>Unit</th>
                                                <th>VAT</th>
                                                <th>Amount</th>
                                                <th>Total Amount</th>
                                                <th>Add</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th>Total Amount</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <!-- table end -->
                            </div>
                        </div>
                        <!-- table table statistics ends -->
                    </div>

                    <!-- table transactions statistics ends -->
                </section>
            </div>
        </div>
    </div>
</div>
                    
