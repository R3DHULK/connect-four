 /*

 this script runs all functions that run the game, such as:

 • check if spot is taken or if there are no coins underneath the spot that player(s) or computer picked.
 • make mark on the spot accordingly.

 */




// this function checks to see if the most bottom spot and then on, for 7 columns, is taken or not, and if not, drops your coin
// to the most bottom spot. This function is only invoked after a click.
function check_spot (column_name, new_classname, mark) {
	// column_name is the column number of the spot the user(s) clicked.
	// new classname is the class that the spot should take to add background color.
	// mark is which player (player 1, player 2, player, or computer).

	for (var i = 0; i < 7; i++) {

		if (column_name === "col-" + i) {

			// local var with all of the classes with "col-" + i
			var column = document.getElementsByClassName("col-" + i);

			// make an array with the above elements (also local).
			var column_arr = jQuery.makeArray (column);


			// check from the last spot of the column array and if the most bottom is not taken, populate that spot.
			for (var j = column_arr.length - 1; j > -1; j--) {

				if (column_arr[j].getAttribute("data-name") === "nothing"){

					make_move (column_arr[j], new_classname, mark);

					break;

				}

			}

		}

	}

}


// invoke this function when having a turn, for either player(s) or computer.
function make_move (position, new_classname, mark) {
	// position is the most bottom and non-occupied spot of the particular column the player(s) or computer chose.
	// new classname is the class that the spot should take to add background color.
	// mark is which player (player 1, player 2, player, or computer).

	// check who the mark belongs to.
	if (mark === player_1.data_name) {

		player_1_moves.push(parseInt($(position).attr("data-value")));

		$(position).addClass(new_classname);
		$(position).attr("data-name", mark);

	} else if (mark === player_2.data_name) {

		player_2_moves.push(parseInt($(position).attr("data-value")));

		$(position).addClass(new_classname);
		$(position).attr("data-name", mark);

	} else if (mark === player.data_name) {

		player_moves.push(parseInt($(position).attr("data-value")));

		$(position).addClass(new_classname);
		$(position).attr("data-name", mark);

	} else if (mark === computer.data_name) {

		computer_moves.push(parseInt($(position).attr("data-value")));

		$(position).addClass(new_classname);
		$(position).attr("data-name", mark);

	}

}


// call this function when the game is player 1 vs player 2.
function two_players_move () {

	var $all_circles = $(".circle");

	// for alternating turns. First player always goes first.
	var this_player_clicked = 1;

	// for all of the spots (circles) only make the ones that have data-name as "nothing" be able to be clicked.
	$.each($all_circles, function (index, value) {

		$all_circles.eq(index).click(function () {

			if ( $(this).attr("data-name") === "nothing") {

				// check spot for the first player.

				if (this_player_clicked === 1) {

					check_spot ($(this).attr("class").split(" ")[1], "circle-background-color-" + player_1.mark_color, player_1.data_name);
					this_player_clicked = 2;

		 			// later, if moves === 42, it will mean that there is a draw.
					moves ++;

					// check for win after every turn.
					check_for_win ($(this).attr("class").split(" ")[1], player_1.data_name);

				// check spot for the second player.
				} else {

					check_spot ($(this).attr("class").split(" ")[1], "circle-background-color-" + player_2.mark_color, player_2.data_name);
					this_player_clicked = 1;

		 			// later, if moves === 42, it will mean that there is a draw.
					moves ++;

					// check for win after every turn.
					check_for_win ($(this).attr("class").split(" ")[1], player_2.data_name);

				}

		 	}

		});

	});

}


// call this function when the game is player vs computer.
function player_move () {

	var $all_circles = $(".circle");

	// for all of the spots (circles) only make the ones that have data-name as "nothing" be able to be clicked.
	$.each($all_circles, function (index, value) {

		$all_circles.eq(index).click(function () {

			if ($(this).attr("data-name") === "nothing") {

				// check spot for player.

				check_spot ($(this).attr("class").split(" ")[1], "circle-background-color-" + player.mark_color, player.data_name);

					// later, if moves === 42, it will mean that there is a draw.
					moves ++;

					// check for win after every turn.
					check_for_win ($(this).attr("class").split(" ")[1], player.data_name);

				// after checking for win, if there is no winner, make the computer to make a move.
			 	if (!winner) {

			 		setTimeout(function() {

			 			computer_move ();

			 		}, 1500);

			 	}

			}

		});

	});

}


// call this function when the game is player vs computer.
function computer_move () {

	var $all_circles = $(".circle");

	// computer needs to choose a number between 0 and 41 in order to place their mark on a random spot that is not already taken.
	var computer_choice = Math.floor(Math.random() * 42);

	// for the spot the computer chose, only make the one that have data-name as "nothing" be able to be clicked.
	if ($all_circles.eq(computer_choice).attr("data-name") === "nothing") {

		// check spot for computer.
		check_spot ($all_circles.eq(computer_choice).attr("class").split(" ")[1], "circle-background-color-" + computer.mark_color, computer.data_name);

		// later, if moves === 42, it will mean that there is a draw.
		moves ++;

		// check for win after every turn.
		check_for_win ($all_circles.eq(computer_choice).attr("class").split(" ")[1], computer.data_name);

	// keep running computer_move until the computer finds a spot that is empty.
	} else {

		computer_move ();

	}

}