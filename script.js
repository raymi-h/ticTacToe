x		= true
playing	= true

$(document).ready(function()
{
	$(".symbol").click( function() {
		if ( $(this).attr("src") == "images/blank.png" && playing ) {
			if ( x ) {
				$(this).attr("src", "images/x.png");
				x	= false;
				if ( checkWin("images/x.png") ) {
					playing = false;
					alert("X wins!");
				}
			} else {
				$(this).attr("src", "images/o.png");
				x	= true;
				if ( checkWin("images/o.png") ) {
					playing = false;
					alert("O wins!");
				}
			}
		}
	});
});

function checkWin( player ) {
	if ( 	($("#tl").attr("src") == player && $("#tm").attr("src") == player && $("#tr").attr("src") == player) ||
			($("#ml").attr("src") == player && $("#mm").attr("src") == player && $("#mr").attr("src") == player) ||
			($("#bl").attr("src") == player && $("#bm").attr("src") == player && $("#br").attr("src") == player) ||
			($("#tl").attr("src") == player && $("#ml").attr("src") == player && $("#bl").attr("src") == player) ||
			($("#tr").attr("src") == player && $("#mr").attr("src") == player && $("#br").attr("src") == player) ||
			($("#tm").attr("src") == player && $("#mm").attr("src") == player && $("#bm").attr("src") == player) ||
			($("#tl").attr("src") == player && $("#mm").attr("src") == player && $("#br").attr("src") == player) ||
			($("#tr").attr("src") == player && $("#mm").attr("src") == player && $("#bl").attr("src") == player) ) {
		return true;
	} else {
		return false;
	}
}
