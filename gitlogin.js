function gitlogin()
{
	var passwrd = prompt("Please enter the password", "");
	if(passwrd == "i12code")
	{
		popup();
		window.location= "F314672E739A45E23A51CCEC9E7CF.html";
		return true;	
	}
	else
	{
		popup(); 
			window.location= "gitaccessedit.html";
			return false;
}
}


function popup()
{
	var oldHTML= document.getElementById('alert').innerHTML;
	var newHTML= "<span style='color: red'>" + oldHTML + "</span";
	document.getElementById('alert').innerHTML= newHTML;
}
