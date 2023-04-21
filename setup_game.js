 /*

 this script runs all functions that set up the game before the player(s) start playing, such as:

 • ask if the user wants to play with another person or with the computer.
 • for two players, ask both their names and assign them automatic colors (player 1 is always blue, player 2 is always red).
 • for one player, ask their name and ask if they want to be blue and red, and then assign the colors accordingly
   (if player chooses blue, the computer automatically gets assigned blue, and vice versa).
 • make the board.

 */




$(document).ready(function() {

 	// the user has to choose either to play with another person or with the computer.
 	function start_game () {

  		$two_players_btn.click(function () {

 			$two_players_btn.remove();
 			$one_player_btn.remove();

 			$question.html("What are your names?");

 			// invote two_players only when the user chooses to play with another person.
 			two_players ();

 		});


   		$one_player_btn.click(function () {

 			$two_players_btn.remove();
 			$one_player_btn.remove();

 			$question.html("What is your name?");


 			// invote one_player only when the user chooses to play with the computer.
 			one_player ();

 		});

 	}


 	function two_players () {

 		// create two input tags and a submit button after the h2 tag within the buttons-row div.
 		$question.css("margin", "30px 0");
 		$buttons_row_1_child.after("<button id = 'submit' style = 'width: 290px; margin: 10px 0 30px 0;'>Here're Our Names</button>").after("<input id = 'player-1' style = 'display: block;' placeholder='Player 1 First Name'</input>" + "<input id = 'player-2' style = 'display: block;' placeholder='Player 2 First Name'</input>");

 		// when the user submit's their name do the following.
 		$("#submit").click(function() {

 			// remove everything, except the input (just hide) because we need the value from the input
 			$question.remove();
 			$("input").css("display", "none");
 			$("#submit").remove();

 			// populate the pick-color h2 with the name of the user and with the question of what color they want to be.
 			$pick_color.html(

 				"Hello, " + $("#player-1").val() + " and " + $("#player-2").val() + "! " + "</br></br>" +
 				$("#player-1").val() + " is <span style='color: #4189C7;'>Blue</span>, and " + $("#player-2").val() + " is <span style='color: #C73D47;'>Red</span>.</br>" +
 				$("#player-1").val() + ", go first!"

 				);

 			// previously, the pick-color h2's display is "none", so change that to show.
	 		$pick_color.css("display", "block");
	 		$pick_color.css("margin", "25px 0");


	 		// update the number of players to 2 so that the two_players_move function is called.
	 		num_of_players = 2;

	 		// for two players, don't ask which colors they want to be, just assign them. So the make_board gets invoked automatically
	 		// after the two players' names are submitted.
	 		make_board ();

 		});

 	}


 	function one_player () {

 		// create an input tag and a submit button after the h2 tag within the buttons-row div.
 		$buttons_row_1_child.after("<button id = 'submit'>Here's My Name</button>").after("<input placeholder='First Name'</input>");

 		// when the user submit's their name do the following.
 		$("#submit").click(function() {

 			// remove everything, except the input (just hide) because we need the value from the input
 			$question.remove();
 			$("input").css("display", "none");
 			$("#submit").remove();

 			// populate the pick-color h2 with the name of the user and with the question of what color they want to be.
 			$pick_color.html("Hello, " + $("input").val() + "! " + "Are you feeling Hot or Cool?")

 			// previously, the pick-color h2's display is "none", so change that to show.
	 		$pick_color.css("display", "block");
	 		$pick_color.css("margin", "25px 0");

	 		// previously, the two buttons' display is "none", so change that to show.
	 		$red_btn.css("display", "initial");
	 		$blue_btn.css("display", "initial");

 		});

 		// if the player chooses to be Red.
 		$red_btn.click(function () {

 			$blue_btn.remove();
 			$red_btn.remove();

 			player.mark_color = "red";
 			computer.mark_color = "blue";

 			$("h2").html("You are <span style='color: #C73D47;'>Red</span>.");

 			// make the board after this button is clicked.
 			make_board ();

 		});

 		// if the player chooses to be Blue.
 		$blue_btn.click(function () {

 			$blue_btn.remove();
 			$red_btn.remove();

 			player.mark_color = "blue";
 			computer.mark_color = "red";

 			$("h2").html("You are <span style='color: #4189C7;'>Blue</span>.");

 			// make the board after this button is clicked.
 			make_board ();

 		});

 	}


	// make board with 7 columns and 6 rows.
	function make_board () {

		for (var i = 0; i < 6; i++) {

			for (var j = 0; j < 7; j++) {

				// make a board with 7 columns and 6 rows, and assign them with the corresponding column and row numbers.
				// give all of them with the data-name "nothing". the data-name will change when that particular spot is taken.
				var $circle = $("<div class = 'circle' data-name = 'nothing'></div>");
				$circle.addClass("col-" + j);
				$circle.addClass("row-" + i);
				$row.append($circle);
				$row.css("background-color", "#FFDF00");

			}

		}

		// give data-value (0-41) to all spots (circles).
		var $circles = $(".circle");

		for (var i = 0; i < $circles.length; i++) {

			$circles.eq(i).attr("data-value", i);

		}

		if (num_of_players === 2) {

			two_players_move ();

		} else {

			computer_move ();
			player_move ();

		}

	}

 	// this is where it all begins.
 	start_game ();

});