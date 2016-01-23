var player1Name
var player2Name
var player1Score = 0
var player2Score = 0
var someoneWon = false

function moveX(){
  $('#player1_strip .active').removeClass('active').empty().next('td').addClass('active').text('X');
  player1Score++
  if ($('#finish_line_x').hasClass('active')){
    //alert(player1Name + " Wins!");
    if ((player1Score - player2Score) > 1){
    $('#winner_banner').html('<h3>' + player1Name + ' wins by ' + (player1Score - player2Score) + ' squares!</h3>')
    }
    else {
    $('#winner_banner').html('<h3>' + player1Name + ' wins by only ' + (player1Score - player2Score) + ' square!</h3>')
    }
    someoneWon = true
    //resetRace()
  };
}

function moveO(){
  $('#player2_strip .active').removeClass('active').empty().next('td').addClass('active').text('O');
  player2Score++
  if ($('#finish_line_o').hasClass('active')){
    //alert(player2Name + ' Wins!');
    if ((player2Score - player1Score) > 1){
    $('#winner_banner').html('<h3>' + player2Name + ' wins by ' + (player2Score - player1Score) + ' squares!</h3>')
    }
    else {
    $('#winner_banner').html('<h3>' + player2Name + ' wins by only ' + (player2Score - player1Score) + ' square!</h3>')
    }
    someoneWon = true
    //resetRace()
  };
}

function resetRace(){
  $('.active').empty().removeClass('active');
  $('#player1_strip td:first').addClass('active').text('X');
  $('#player2_strip td:first').addClass('active').text('O');
  $('#winner_banner').empty()
  getNames()
  someoneWon = false
  player1Score = 0
  player2Score = 0
}

function getNames(){
  player1Name = prompt('What is Player 1\'s name?')
  player2Name = prompt('What is Player 2\'s name?')
  $('#p1Name').text(player1Name + " - push x")
  $('#p2Name').text(player2Name + " - push o")
}

$(document).keyup(function(e){
  if ((e.keyCode == 88 || e.keyCode == 120) && !someoneWon) {moveX();}
  if ((e.keyCode == 79 || e.keyCode == 111) && !someoneWon){moveO();}
});

$('#resetButton').click(resetRace)

$(resetRace)

