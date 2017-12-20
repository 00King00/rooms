$(function(){
	
	

	
	$("select" ).change(function() {
		var selectOpt = $(this).val();
		console.log(selectOpt);
		if (selectOpt == 'Зелений масив'){
				$('.flats').show();
			} else {$('.flats').hide();}
	
		if (input)
	
	
	});
	
	
	
	$.ajax({ 
		url: "js/green.json",
		dataType: "json",
		type: 'get',
		catch: false,
		success: function(data){
			var items = [];
			
			$(data).each(function(i, value){

				items.push('<li class="'+ "room_" + value.room + " balcon_" + value.blacon +'  ">' +value.namber + '</li>');
				
			})

			$('<ul/>', {
				'class': 'house-green',
				html: items.join('')
			 }).appendTo(".flats");
			
		}
	});
	
	
});