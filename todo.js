$( document ).ready(function() {
	document.getElementById("content").setAttribute("contenteditable", "true");
    if(!localStorage.content)
	{
	}
	else
	{
		document.getElementById("content").innerHTML = localStorage.content;
	}
});

$( "#save" ).on( "click", function( event ) {
		localStorage.content = document.getElementById("content").innerHTML;
});

$( "#reset" ).on( "click", function( event ) {
		if(confirm("are you sure"))
		{	
			localStorage.content =  "<ol> <li></li> <li></li> <li></li> <li></li> </ol>"
			document.getElementById("content").innerHTML = "<ol> <li></li> <li></li> <li></li> <li></li> </ol>"
		}
});

