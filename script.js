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
					while ($('#'+next).is(':empty')){
						next += X;
					}
					next = next-X;
					
	
					if (player == 1) {
						$('#'+next).append('<p></p>');
						$('#'+next).css('backgroundColor', 'red');
						player = 2;
					}
					else{
						$('#'+next).append('<p></p>').css('textAlign', 'center');
						$('#'+next).css('backgroundColor', 'Yellow');
						player = 1;
					}
				}
				else{
					alert('Case deja remplie !');
				}
				// Variables pour voir le backgroundColor du jeton posé
				let currentcolor = $('#'+next).css('backgroundColor');
				// Variables pour voir a pos du click +Y
				let VerifyY1 = next+X;
				let VerifyY2 = next+(X*2);
				let VerifyY3 = next+(X*3);

				// Variables pour voir a pos du click +X
				let VerifyX1 = next+1;
				let VerifyX2 = next+2;
				let VerifyX3 = next+3;
				// Variables pour voir a pos du click -X
				let VerifyX1less = next-1;
				let VerifyX2less = next-2;
				let VerifyX3less = next-3;

				/*
				let posright = next+1;
				let posleft = next-1;
				let posupper = next-X;
				let posdown = next+X
				*/
				// Variables pour voir a pos du click -X en diagonale
				let VerifyDiagX1 = next-X+1;
				let VerifyDiagX2 = next-(X*2)+2;
				let VerifyDiagX3 = next-(X*3)+3;

				let VerifyDiagX1less = next-X-1;
				let VerifyDiagX2less = next-(X*2)-2;
				let VerifyDiagX3less = next-(X*3)-3;

				let VerifyDiagY1 = next+X+1;
				let VerifyDiagY2 = next+(X*2)+2;
				let VerifyDiagY3 = next+(X*3)+3;
			
				let VerifyDiagY1less = next+X-1;
				let VerifyDiagY2less = next+(X*2)-2;
				let VerifyDiagY3less = next+(X*3)-3;
			
				if ($('#'+VerifyY1).css('backgroundColor') == currentcolor && $('#'+VerifyY2).css('backgroundColor') == currentcolor && $('#'+VerifyY3).css('backgroundColor') == currentcolor) {
					
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}
				}
				if ($('#'+VerifyX1).css('backgroundColor') == currentcolor && $('#'+VerifyX2).css('backgroundColor') == currentcolor && $('#'+VerifyX3).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}
				if ($('#'+VerifyX1less).css('backgroundColor') == currentcolor && $('#'+VerifyX2less).css('backgroundColor') == currentcolor && $('#'+VerifyX3less).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}
				if ($('#'+VerifyDiagX1).css('backgroundColor') == currentcolor && $('#'+VerifyDiagX2).css('backgroundColor') == currentcolor && $('#'+VerifyDiagX3).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}

				if ($('#'+VerifyDiagY1).css('backgroundColor') == currentcolor && $('#'+VerifyDiagY2).css('backgroundColor') == currentcolor && $('#'+VerifyDiagY3).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}

				if ($('#'+VerifyDiagX1less).css('backgroundColor') == currentcolor && $('#'+VerifyDiagX2less).css('backgroundColor') == currentcolor && $('#'+VerifyDiagX3less).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}
				if ($('#'+VerifyDiagY1less).css('backgroundColor') == currentcolor && $('#'+VerifyDiagY2less).css('backgroundColor') == currentcolor && $('#'+VerifyDiagY3less).css('backgroundColor') == currentcolor) {
					if (currentcolor == 'rgb(255, 0, 0)') {
						alert('Joueur 1 Gagne !');
						score_J1++;
					}
					else{
						alert('Joueur 2 gagne !');
						score_J2++;
					}	
				}


				});
			}
		}
	var test = new jeu(7,6);

	}

	$('#p4').puissance4();

});