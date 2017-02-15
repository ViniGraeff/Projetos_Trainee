var text;

$(document).ready(function(){
    $('#table').empty();
    $.get("http://192.168.1.171:3000/product", function(data) {
        text=data;
        for(var i=0;i<text.length;i++){
        	$('#table').append('<tr><td>'+text[i].id+'</td><td>'+text[i].nome+'</td><td>'+text[i].valor+'</td><td>'+text[i].status+'</td><td>'+text[i].estoque+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'+'</td><td>'+'<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>'+'</td></tr>');
        }
    });
});
