$(function(){
	
	

	
	$("select" ).change(function() {
		var selectOpt = $(this).val();
		console.log(selectOpt);
		if (selectOpt == 'Зелений масив'){
				$('.house-green').show();
				$('.house-yellow').hide();
			} else if(selectOpt=='Жовтий масив'){
				$('.house-green').hide();
				$('.house-yellow').show();
			}
	});
	
	
	
	var arr_Green =$.ajax({
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
	
	var arr_Yellow =$.ajax({
		url: "js/yellow.json",
		dataType: "json",
		type: 'get',
		catch: false,
		success: function(data){
			var items = [];
			
			$(data).each(function(i, value){

				items.push('<li class="'+ "room_" + value.room + " balcon_" + value.blacon +'  ">' +value.namber + '</li>');
				
			})

			$('<ul/>', {
				'class': 'house-yellow',
				html: items.join('')
			 }).appendTo(".flats");
			
		}
	});
	
	$(".filter input[type='radio']").click(function(){
		
		var take_class = "." +$(this).attr('class');
		$( "ul" ).find('.active').removeClass('active');
		var filter= $( "ul" ).find(take_class).addClass('active');
		
//		if($("#balcon").prop('checked')){
//			var take_class = "." +$(this).attr('class');
//			$( "ul" ).find('.active .for-balcon').removeClass('active');
//			var filter= $( "ul" ).find(take_class).addClass('active');

//		}
		
		//console.log(take_class);
		
		
		
	})
	
	$('#balcon').click(function(){
		if($("#balcon").prop('checked')){
			$( "ul" ).find('.balcon_true').addClass('for-balcon');
			
		} else{
			$( "ul" ).find('.balcon_true').removeClass('for-balcon');
		}
		
		
	})
	
	
	$('.filter').click(function(){
		if($('li').hasClass('for-balcon') && $('li').hasClass('active')) {
			//$('li').css('color','black')
			$('.for-balcon.active').addClass('both')
			$('li').removeClass('for-balcon active ')
			
		   console.log('Ura');
		}else{
			$('.for-balcon.active').removeClass('both')
			
		}
		
	});
	
	
});