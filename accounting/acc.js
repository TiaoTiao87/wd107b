<script>
	function add(){
	var a = parseInt(document.getElementById("box1").value);
	var b = parseInt(document.getElementById("box2").value);
	var c = parseInt(document.getElementById("box3").value);
	var d = parseInt(document.getElementById("box4").value);
	if( d == 0 ) var e = a + b + c;
	else var e = a + b + c + d ; 
	 document.getElementById("box5").value = e; 
	 if(e > 300){
		alert("TOOOOOO MUCH!");
		}
}
	</script>
