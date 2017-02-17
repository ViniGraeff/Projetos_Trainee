var text, aux;
var ID, NOME, VALOR, STATUS, ESTOQUE;


$(document).ready(function(){
    $('#table').empty();
    $.get("http://192.168.1.171:3000/product", function(data) {
        text=data;
        for(var i=0;i<text.length;i++){
        	aux=text[i].id;
        	$('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+text[i].valor+'</td><td>'+text[i].status+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"  onclick="deleta('+aux+')"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
        }
    });

    limpa = function(){
    $('#table').empty();
    $.get("http://192.168.1.171:3000/product", function(data) {
            text=data;
            for(var i=0;i<text.length;i++){
                aux=text[i].id;
                $('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+'R$ '+text[i].valor+'</td><td>'+text[i].status+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="modal" data-target="#abrir" onclick="preencher('+i+')"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"  onclick="deleta('+aux+')"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
            }
        });
    }

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

    edita = function(){ 
        NOME = document.getElementById('nome').value;
        VALOR = document.getElementById('valor').value;
        STATUS = document.getElementById('status').value;
        ESTOQUE = document.getElementById('estoque').value;
        $.ajax({
            type: 'PUT',
            dataType: 'json',
            url: "http://192.168.1.171:3000/product/"+ID,
            data: {nome: NOME, valor: VALOR, status: STATUS, estoque: ESTOQUE}
        });
        location.reload(true);
    }

    preencher = function(z){
        document.getElementById('nome').value = text[z].nome;
        document.getElementById('valor').value = text[z].valor;
        document.getElementById('status').value = text[z].status;
        document.getElementById('estoque').value = text[z].estoque;
        ID = text[z].id;
    }

    $("#modalclean").click(function(){
        document.getElementById('nome').value = "";
        document.getElementById('valor').value = "";
        document.getElementById('status').value = "";
        document.getElementById('estoque').value = "";
    });

    $("#adiciona").mouseup(function(){
        adiciona();
        location.reload(true);
    });

    $("#editar").mouseup(function(){
        edita();
    });

    deleta = function(x){
        $.ajax({
            type: 'DELETE',
            url: "http://192.168.1.171:3000/product/" + x
        });
        location.reload(true);
    }

});
