$(document).ready(function() {

	function cellClick(){
		$('.cell').click(function() {
			if (player == 1) {
				$(this).css('backgroundColor', 'Red');
				player = 2;
			}
			else{
				$(this).css('backgroundColor', 'Yellow');
				player = 1;
			}
		});		
	}

	function createGrid(X,Y){
		let row = X;
		let col= Y;
		$('#p4').css({
			display: 'flex',
			justifyContent: 'center'
		});

		$('#p4').append('<div id="grid">');
		$('#grid').css({
			width: row*102+'px',
			display: 'flex',
			flexWrap: 'wrap',
			backgroundColor: 'black'
		});

		for (var i = 0; i < row*col; i++) {
			$('#grid').append('<div class="cell"></div>');
		}
		$('.cell').css({
			width: '100px',
			height: '100px',
			backgroundColor: 'white',
			borderRadius: '50%',
			border: '1px solid white'
		});
	}


});