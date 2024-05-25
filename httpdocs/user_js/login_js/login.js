$(document).ready(function(){
    
	$('#div_login_error_message').hide();

    $( '#btn_log_in' ).click(function(){
               
                
            var v_username = $('#txt_login_username').val();
			var v_password = $('#txt_login_password').val();

			$.post("../controller/login_controller.php",
			{action:'login',v_username:v_username,v_password:v_password}, 
			function(result,status){
              	var str = result.split('#');
                if($.trim(str[0])=='true')
                {
                    $('#div_login_error_message').show();
                    $(location).attr('href',str[1]);
                }
                else
                {
    				$('#div_login_error_message').show(1000);
    				var errName = $("#div_login_error_message"); //Element selector
                    errName.html(result); // Put the message content inside div
                } 

           }); 
		
    });
  
});