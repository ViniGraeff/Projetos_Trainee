var guardar="";
				
function escreverOi() {
	guardar="";
	guardar=guardar+"Oi";
	printar();
}

function abreP() {
	guardar=guardar+"(";
	printar();
}

function fechaP() {
	guardar=guardar+")";
	printar();
}

function escreverTela1() {
	guardar=guardar+"1";
	printar();
}

function escreverTela2() {
	guardar=guardar+"2";
	printar();
}

function escreverTela3() {
	guardar=guardar+"3";
	printar();
}

function escreverTela4() {
	guardar=guardar+"4";
	printar();
}

function escreverTela5() {
	guardar=guardar+"5";
	printar();
}

function escreverTela6() {
	guardar=guardar+"6";
	printar();
}

function escreverTela7() {
	guardar=guardar+"7";
	printar();
}

function escreverTela8() {
	guardar=guardar+"8";
	printar();
}

function escreverTela9() {
	guardar=guardar+"9";
	printar();
}

function escreverTela0() {
	guardar=guardar+"0";
	printar();
}

function escreverMais() {
	guardar=guardar+"+";
	printar();
}

function escreverMenos() {
	guardar=guardar+"-";
	printar();
}

function escreverVezes() {
	guardar=guardar+"*";
	printar();
}

function escreverDividido() {
	guardar=guardar+"/";
	printar();
}

function apagarTela() {
	guardar="";
	printar();
}

function escreverPonto() {
	guardar=guardar+".";
	printar();
}

function resultado(){
	guardar=eval(guardar);
	printar();
}

function printar(){
	document.getElementById("display").value = guardar;
}
