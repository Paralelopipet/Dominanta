var username = [
"kosta",
"pera",
"mile"
];


var password = [
"kosta123",
"pera123",
"mile123"
];
var name


function login(){
	name = document.getElementById("ime").value;
	var pass = document.getElementById("prezime").value;
	var k=0;
	var i=false;
	while(k<3)
	{
		if(name==username[k]&&pass==password[k])
		i=true;
		k++;
	}
	if(i)
	proceedToMain();
	else
	alert("Wrong username or password");
	}
	function proceedToMain(){
	localStorage.setItem('name',name);
	window.location.href = "index.html";
	}