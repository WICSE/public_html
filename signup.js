function signup(form) 
{
	var usernameField= form.username.value;
	var pwdField= form.password.value;
	var emailField= form.email.value;
	user newuser= new user(usernameField, pwdField, emailField, newuser);
	
	if(false)
	{
		window.location= "confirmsubmit.html";
		return true;
	}
	else popup(); return false;
}

function popup()
{
	var oldHTML= document.getElementById('alert').innerHTML;
	var newHTML= "<span style='color: white'>" + oldHTML + "</span";
	document.getElementById('alert').innerHTML= newHTML;
}
