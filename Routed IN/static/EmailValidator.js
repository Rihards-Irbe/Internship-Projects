function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
	funkcija()
	alert("Pabeigts!");
document.form1.epasts.focus()
return false;
}
else
{
alert("Nepareizi ievadita e-pasta adrese!");
document.form1.epasts.focus();
return false;
}
	}