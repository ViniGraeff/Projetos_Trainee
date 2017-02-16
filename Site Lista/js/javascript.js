var text, aux;
var ID, NOME, VALOR, STATUS, ESTOQUE;


$(document).ready(function(){
    $('#table').empty();
    $.get("http://192.168.1.171:3000/product", function(data) {
        text=data;
        for(var i=0;i<text.length;i++){
        	aux=text[i].id;
        	$('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+text[i].valor+'</td><td>'+text[i].status+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"  onclick="deleta('+aux+')"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
        }
    });

adiciona = function (){
    NOME = document.getElementById('nome').value;
    VALOR = document.getElementById('valor').value;
    STATUS = document.getElementById('status').value;
    ESTOQUE = document.getElementById('estoque').value;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://192.168.1.171:3000/product/",
        data: {nome: NOME, valor: VALOR, status: STATUS, estoque: ESTOQUE}
    });
}

});

function deleta(x){
	$.ajax({
        type: 'DELETE',
        url: "http://192.168.1.171:3000/product/" + x
    });
}

