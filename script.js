function getFormvalue() {
    //Write your code here
	let form=document.getElementById('form1');
	let data = new FormData(form);
	let firstName=data.get('fname');
	let lastName=data.get('lname');
	firstName=firstName.trim();
	lastName=lastName.trim();
	alert(`${firstName} ${lastName}`);
}
