function login(form)
{
	var usernameField= form.username.value;
	var pwdField= form.password.value;
	var challengeField= form.challenge.value;
	var challengeValue= 1234;
	if(challengeField==challengeValue)
	{alert("challenge passed");
		if(testusername(usernameField)&&testpassword(pwdField))
		{
			window.location= "members.html";
			return true;	
		}
		else popup(); return false;
}
}

function testusername(usernameField)
{
	var temp= "coder";
	if(usernameField==temp)
	{	
alert("username verified");
		return true;
	}
	else return false;
}

function testpassword(pwdField)
{
	var temp= "coder";
	if(pwdField==temp)
	{	
alert("password verified")
		return true;
	}
	else return false;
}

function popup()
{
	var oldHTML= document.getElementById('alert').innerHTML;
	var newHTML= "<span style='color: red'>" + oldHTML + "</span";
	document.getElementById('alert').innerHTML= newHTML;
}
