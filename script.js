$( function(){
	
	var v1, v2, op;
	
	$("input[name=btn]").click( function(){
		$("#result").val($("#result").val() + $(this).val());
	});
	
	$("input[name=ce]").click( function(){
		$("#result").val('');
		$("#op").text('');
	});

	$("input[name=soma]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "soma";			
			$("#op").text($(this).val());

	 } else {
	 	alert('Insira um valor para efetuar a conta!');
	 }
	 });

	$("input[name=menos]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "menos";			
			$("#op").text($(this).val());

	 } else {
	 	alert('Insira um valor para efetuar a conta!');
	 }
	 });

	$("input[name=vezes]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "vezes";			
			$("#op").text($(this).val());

			$("input[name=divisao]").click( function(){
		if($("#result").val() != ''){
			v1 = parseFloat($("#result").val());
			$("#result").val('');
			op = "divisao";			
			$("#op").text($(this).val());

	 } else {
	 	alert('Insira um valor para efetuar a conta!');
	 }
	 });

	 } else {
	 	alert('Insira um valor para efetuar a conta!');
	 }
	 });

	$("input[name=igual]").click( function(){

		if($("#result").val() != ''){
			v2 = parseFloat($("#result").val());

			if(op == "soma"){
				$("#result").val(v1 + v2);
			}

			else if(op == "menos"){
				$("#result").val(v1 - v2);
			}

			else if(op == "vezes"){
				$("#result").val(v1 * v2);
			}

			else{
				$("#result").val(v1 / v2);
			}
			

	 } else {
	 	alert('Insira um valor para efetuar a conta!');
	 }
	});

	$("input[name=c]").click( function(){
		var len = $("#result").val().length;

		var valor = $("#result").val();

	 	valor = valor.replace(valor.charAt(len - 1), "");

	 	$("#result").val(valor);
	});

});