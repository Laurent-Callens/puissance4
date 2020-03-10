$(document).ready(function() {
	
	$.fn.puissance4 = function(){

		class jeu {


			constructor(X,Y){
				let player = 1;
				let score_J1 = 0;
				let score_J2 = 0;
				let row = X;
				let col= Y;
				let next = 0;
				$('#p4').parent().append('<button id="replay">Rejouer</button>');

				$('#replay').click(function() {
					$('.cell').html('');
					$('.cell').css('backgroundColor', 'white');
					
				});
				$('#p4').css({
					display: 'flex',
					justifyContent: 'center'
				});

				$('#p4').append('<div id="grid">');
				$('#grid').css({
					width: row*102+'px',
					display: 'flex',
					flexWrap: 'wrap',
					backgroundColor: '#607D8B',
    				border: '1px solid #9E9E9E',
    				borderRadius: '15px',
    				padding: '20px',
    				boxShadow: '0px 0px 10px 5px #9E9E9E'
				});

				for (var i = 0; i < row*col; i++) {
					$('#grid').append('<div class="cell"></div>');
				}
				$('.cell').css({
					width: '100px',
					height: '100px',
					backgroundColor: 'white',
					borderRadius: '50%',
				
					
				});
				$('.cell').each(function(index) {
					$(this).attr('id', index);

				});

				$('.cell').click(function() {
				if ($(this).is(':empty')){
					let identif = $(this).attr('id');
					identif = parseInt(identif);
					next = identif+X;
					console.log(next);
					while ($('#'+next).is(':empty')){
						next += X;
					}
					next = next-X;
					
	
					if (player == 1) {
						$('#'+next).append('<p> </>');
						$('#'+next).css('backgroundColor', 'red');
						player = 2;
					}
					else{
						$('#'+next).append('<p> </p>').css('textAlign', 'center');
						$('#'+next).css('backgroundColor', 'Yellow');
						player = 1;
					}
				}
				else{
					alert('Case deja remplie !');
				}
				});
			}
		}
	var test = new jeu(7,6);

	}

	$('#p4').puissance4();

});