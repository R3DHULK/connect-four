 /*

 this script runs all functions that check for win and end the game, such as:

 • check in all directions (vertical, horizontal, diagonal) if there are 4 consecutive marks of the same color.
 • announce the winner.
 • ask if the user wants to play again.

 */




// call this function after each turn (player 1, player 2, player, or computer).
function check_for_win (column_name, winning_mark) {
// column_name is the number of the column that a mark has been made,
// winning_mark is who made the mark.

	// every time, check for win in columns, rows, and diagonally.
	check_column (column_name, winning_mark);
	check_row (winning_mark);
	check_diagonal (winning_mark);

	// check if there is a draw.
	if (moves === 42) {

		$pick_color.fadeOut();
		$row.fadeOut();

		setTimeout(function () {

			$buttons_row.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>It's a Draw!</h1>");

			// invoke the play again function when there is a draw.
			play_again ();

		}, 1000);

	}

}


// for columns, only check for a win in the column that the player(s) or computer chose.
function check_column (column_name, winning_mark) {

	for (var i = 0; i < 7; i++) {

		if (column_name === "col-" + i) {

			// local var with all of the classes with "col-" + i
			var column = document.getElementsByClassName("col-" + i);

			// make an array with the above elements (also local).
			var column_arr = jQuery.makeArray (column);

			// check the column from the bottom up.
			for (var j = column_arr.length - 1; j > 1; j--) {

				console.log(j);

				if (column_arr[j].getAttribute("data-name") === winning_mark &&
					column_arr[j-1].getAttribute("data-name") === winning_mark &&
					column_arr[j-2].getAttribute("data-name") === winning_mark &&
					column_arr[j-3].getAttribute("data-name") === winning_mark) {

					setTimeout(function () {

						// announce winner if there are 4 consecutively same marks.
						announce_winner (winning_mark);

					}, 500);

					break;

				}

			}

		}

	}

}


// for rows also, only check for a win in the row that the player(s) or computer chose.
function check_row (winning_mark) {

	if (winning_mark === player_1.data_name) {

		// sort the array of the player's moves (numbers) in ascending order.
		player_1_moves.sort();

		for (var i = 0; i < player_1_moves.length - 2; i++) {
		// make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.

			var first_match = player_1_moves[i];
			var second_match = player_1_moves[i+1];
			var third_match = player_1_moves[i+2];
			var fourth_match = player_1_moves[i+3];

			if (

				second_match === (first_match + 1) &&
				third_match === (second_match + 1) &&
				fourth_match === (third_match + 1) ) {

				setTimeout(function () {

					announce_winner (winning_mark);

				}, 500);

			}

		}

	} else if (winning_mark === player_2.data_name) {

		// sort the array of the player's moves (numbers) in ascending order.
		player_2_moves.sort();

		for (var i = 0; i < player_2_moves.length - 2; i++) {
		// make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.

			var first_match = player_2_moves[i];
			var second_match = player_2_moves[i+1];
			var third_match = player_2_moves[i+2];
			var fourth_match = player_2_moves[i+3];

			if (

				second_match === (first_match + 1) &&
				third_match === (second_match + 1) &&
				fourth_match === (third_match + 1) ) {

				setTimeout(function () {

					announce_winner (winning_mark);

				}, 500);

			}

		}

	} else if (winning_mark === player.data_name) {

		// sort the array of the player's moves (numbers) in ascending order.
		player_moves.sort();

		for (var i = 0; i < player_moves.length - 2; i++) {
		// make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.

			var first_match = player_moves[i];
			var second_match = player_moves[i+1];
			var third_match = player_moves[i+2];
			var fourth_match = player_moves[i+3];

			if (

				second_match === (first_match + 1) &&
				third_match === (second_match + 1) &&
				fourth_match === (third_match + 1) ) {

				setTimeout(function () {

					announce_winner (winning_mark);

				}, 500);

			}

		}

	} else if (winning_mark === computer.data_name) {

		// sort the array of the computer's moves (numbers) in ascending order.
		computer_moves.sort();

		for (var i = 0; i < player_moves.length - 2; i++) {
		// make the limit of i to the array's length - 2 so that there are no undefined objects that the computer tries to compare.

			var first_match = computer_moves[i];
			var second_match = computer_moves[i+1];
			var third_match = computer_moves[i+2];
			var fourth_match = computer_moves[i+3];

			if (

				second_match === (first_match + 1) &&
				third_match === (second_match + 1) &&
				fourth_match === (third_match + 1) ) {

				setTimeout(function () {

					announce_winner (winning_mark);

				}, 500);

			}

		}

	}

}


// for diagonals, go through all possible wins instead of just checking for the spot that the player(s) or computer chose.
function check_diagonal (winning_mark) {

	for (var i = 0; i < diagonal_win.length; i++) {

		// data-value is assigned to each circle (div) and goes from 0 to 41.
		var $check_1 = $("div[data-value='" + diagonal_win[i][0] + "']");
		var $check_2 = $("div[data-value='" + diagonal_win[i][1] + "']");
		var $check_3 = $("div[data-value='" + diagonal_win[i][2] + "']");
		var $check_4 = $("div[data-value='" + diagonal_win[i][3] + "']");

		if (
			$check_1.attr("data-name") === winning_mark &&
			$check_2.attr("data-name") === winning_mark &&
			$check_3.attr("data-name") === winning_mark &&
			$check_4.attr("data-name") === winning_mark
			) {

			setTimeout(function () {

				announce_winner (winning_mark);

			}, 500);

		}

	}

}


// announce who won.
function announce_winner (winning_mark) {

	if (winning_mark === player_1.data_name) {

		winning_mark = $("#player-1").val();

		$pick_color.fadeOut();
		$row.fadeOut();

		setTimeout(function () {

			$buttons_row.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>"+ winning_mark + " wins!</h1>").fadeIn();
			play_again ();

		}, 500);

		winner = true; // this stops the game.

		player_1.wins++;

	} else if (winning_mark === player_2.data_name) {

		winning_mark = $("#player-2").val();

		$pick_color.fadeOut();
		$row.fadeOut();

		setTimeout(function () {

 			$buttons_row.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>"+ winning_mark + " wins!</h1>");
 			play_again ();

 		}, 500);

		winner = true; // this stops the game.

		player_2.wins++;

	} else if (winning_mark === player.data_name) {

		winning_mark = $("input").val();

		$pick_color.fadeOut();
		$row.fadeOut();

		setTimeout(function () {

	 		$buttons_row.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>"+ winning_mark + " wins!</h1>");
	 		play_again ();

	 	}, 500);

		winner = true; // this stops the game.

		player.wins++;

	} else {

		$pick_color.fadeOut();
		$row.fadeOut();

		setTimeout(function () {

	 		$buttons_row.append("<h1 style='font-size: 6em; margin: 13vh 0 25px 0'>Computer wins!</h1>").fadeIn();
	 		play_again ();

	 	}, 500);

		winner = true; // this stops the game.

		computer.wins++;

	}

}


// create a reset button.
function play_again () {

	setTimeout(function () {

		$buttons_row.append("<button id = 'play-again'>Play Again?</button>");

	 	// onclick, reload the window.
		$("#play-again").click(function () {
		console.log("clicked");
		location.reload();

	});

	}, 950);

	// for storing player 1, player 2, player, computer's win numbers.
	// this is not 100% working and will work on it later.
	var player_1_score = player_1.wins;
	localStorage.setItem("player_1_score", player_1_score);

	 var player_2_score = player_2.wins;
	localStorage.setItem("player_2_score", player_2_score);

	var player_score = player.wins;
	localStorage.setItem("player_score", player_score);

	var computer_score = computer.wins;
	localStorage.setItem("computer_score", computer_score);

}