function execute(){
		var name=document.getElementById("userId").value;
		var mail=document.getElementById("mail").value;
		var pwd=document.getElementById("pass").value;
		//alert("You have registered successfully!");
		if(userId==""&&mail==""&&pwd=="")
		 {
			alert("enter something!	");
		}
		if (name=="") {
			alert("name must be filled!");
			document.form2.username.focus();
		}
		else if(mail=="")
		{
			alert("enter the email id");
			document.form2.email.focus();
		}
		else(pwd=="")
		 {
			alert("enter the password");
			document.form2.password.focus();
		}

		if(name!=""&&mail!=""&&pwd!="")
		{
		alert("You have registered successfully!");
		}
}



	function validateEmail() 
	{
    var email = document.getElementById("userId").value;
    //var mailId=document.getElementById("userId").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>email.length)
     {
        alert("Not a valid e-mail address");
      document.form2.email.focus();
        return false;    
    }
    else{
    	return true;
    }
}
