function validateEmail() {
    var email = document.getElementById("user").value;
    //var mailId=document.getElementById("userId").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>email.length) {
        alert("Not a valid e-mail address");
      document.form1.EmailAddress.focus();
        return false;    
    }
    else{
    	return true;
    }
}
function createCustomer(){
	var email=document.getElementById("user").value;
	var pwd=document.getElementById("pass").value;
	if(pwd==""){
		alert("Password cannot be empty");
		document.form1.Password.focus();
		
		}
	
	/*if(email==""||pwd==""){
		alert("email and password cannot be blank");
		//validateEmail();
	}*/
	if(email!=""&&pwd!=""){
		//alert("both are filled out");

     window.open("Contact.html");	
}
	}

	





