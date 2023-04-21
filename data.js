// this file holds all global vars that are needed throughout the program.

// ========================= vars needed to run functions that run the game, such as =========================
// ========================= player 1 vs player 2, player vs computer, make move, check for win, announce win. =========================




// needed when it is player 1 vs player 2
var player_1 = {

	"mark_color" : "blue",

	"data_name" : "Player 1",

	"wins" : 0

};

var player_1_moves = [];


var player_2 = {

	"mark_color" : "red",

	"data_name" : "Player 2",

	"wins" : 0

};


var player_2_moves = [];

var num_of_players = 0;

// when it is player vs computer
var player = {

	"data_name" : "Player",

	"wins" : 0

};

var player_moves = [];


var computer = {

		"data_name" : "Computer",

		"wins" : 0

};

var computer_moves = [];

// this is used to stop moves from being made after there is a winner.
var winner = false;

// for checking if there is a draw.
var moves = 0;

// all the possible combinations of diagonal wins
var diagonal_win = [

	[14, 22, 30, 38],
	[7, 15, 23, 31],
	[15, 23, 31, 39],
	[0, 8, 16, 24],
	[8, 16, 24, 32],
	[16, 24, 32, 40],
	[1, 9, 17, 25],
	[9, 17, 25, 33],
	[17, 25, 33, 41],
	[2, 10, 18, 26],
	[10, 18, 26, 34],
	[3, 11, 19, 27],
	[3, 9, 15, 21],
	[4, 10, 16, 22],
	[10, 16, 22, 28],
	[5, 11, 17, 23],
	[11, 17, 23, 29],
	[17, 23, 29, 35],
	[6, 12, 18, 24],
	[12, 18, 24, 30],
	[18, 24, 30, 36],
	[13, 19, 25, 31],
	[19, 25, 31, 37],
	[20, 26, 32, 38]

];

// ========================= DOM elements =========================

var $two_players_btn = $("#two-players-btn");

var $one_player_btn = $("#one-player-btn");

var $question = $("#question");

var $buttons_row_1_child = $(".buttons-row :first-child");

var $pick_color = $("#pick-color");

var $red_btn = $("#red-btn");

var $blue_btn = $("#blue-btn");

var $row = $(".row");

// grab ALL of the spots
var $circles = $(".circle");

var $buttons_row = $(".buttons-row");

