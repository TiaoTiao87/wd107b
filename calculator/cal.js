<script>
var temp = 0;
var strcal = 0;
function numberBtn(str){
	if(document.getElementById("box").value==0)
		{
			document.getElementById("box").value = str;
		}
	else
		{
			document.getElementById("box").value += str;
		}
	}
function cal(str){
	equal();
	valueA = document.getElementById("box").value;
	strcal = str;
	document.getElementById("box").value = 0;
	}
function equal(){
	switch(strcal){
		case '+':
			document.getElementById("box").value = parseFloat(valueA)+parseFloat(document.getElementById("box").value);
			break;
		case '-':
			document.getElementById("box").value = parseFloat(valueA)-parseFloat(document.getElementById("box").value);
			break;
		case '*':
			document.getElementById("box").value = parseFloat(valueA)*parseFloat(document.getElementById("box").value);
			break;
		case '/':
			document.getElementById("box").value = parseFloat(valueA)/parseFloat(document.getElementById("box").value);
			break;
		default:
			break;
		}
}
function BtnC(){
	temp = 0;
	strcal = 0;
	document.getElementById("box").value = '0';
	} 
</script>
