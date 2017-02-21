//Como fazer
var msgPTBR = {
	empty : 'O campo não deve ser nulo!',
	hello: 'Olá ',
	welcome: ', seja bem vindo!'
}

function printMsg(msg) {
	$('#result').html(msg);
}

function verifyName(name){
	var resp = '';
	if(name == ''){
		resp = msg.empty;
	}else{
		resp = msg.hello+name+msg.welcome;
	}
	printMsg(resp);
}

function getValue(){
	var val = $('#nome').val();
	return val;
}

function actions(){
	$('#send, #test').click(function(){
		var nome = getValue();
		verifyName(nome);
	});
}

$(document).ready(function(){
	actions();
});

//Como não fazer
// $(document).ready(function(){
// 	$('#send').click(function(){
// 		var name = $('#nome').val();
// 		var msg = '';
// 		if(name == ''){
// 			msg = 'O campo não deve ser nulo!';
// 		}else{
// 			msg = 'Olá '+name+', seja bem vindo!';
// 		}
// 		$('#result').html(msg);
// 	});

// 	$('#test').click(function(){
// 		var name = $('#nome').val();
// 		var msg = '';
// 		if(name == ''){
// 			msg = 'O campo não deve ser nulo!';
// 		}else{
// 			msg = 'Olá '+name+', seja bem vindo!';
// 		}
// 		$('#result').html(msg);
// 	});
// });