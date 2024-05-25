<?php
require ('../model/common/common_functions.php');
class loginController 
{
    var $varModelObj;
    public $actionevents,$username,$password,$login_result,$type;

  
    function __construct()
	{
        
        $this->varModelObj = new CommonModel();
        $this->actionevents = $_POST['action'];
        $this->username = $_POST['v_username'];
		
        $this->password = $_POST['v_password'];


    }
    function SQLArray()
    {
        $array =  array();
        $array[0] = "SELECT * FROM  user_login where user_name='".$this->username."' ";
        return $array;
    }

    function RequestAccept($FunctionEvents)
    {
        $var =  $this->SQLArray();

        switch ($FunctionEvents)
        {
            
            case 'login':
                $this->login_result = $this->varModelObj->userAuthenticationforcheck($var[0],$this->password);
               
                if (trim($this->login_result)=="Success")
                {
                    echo "success";
                  
                }
                else
                {
                    echo $this->login_result;
                }
               
            break;
			
			
        }
    }


}

$obj = new loginController();
$obj->RequestAccept($obj->actionevents);