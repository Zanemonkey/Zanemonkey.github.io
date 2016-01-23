var player1Name
var player2Name
var someoneWon = false

function moveX(){
  $('#player1_strip .active').removeClass('active').empty().next('td').addClass('active').text('X');
  if ($('#finish_line_x').hasClass('active')){
    //alert(player1Name + " Wins!");
    $('#winner_banner').html('<h3>' + player1Name + ' wins!</h3>')
    someoneWon = true
    //resetRace()
  };
}

function moveO(){
  $('#player2_strip .active').removeClass('active').empty().next('td').addClass('active').text('O');
  if ($('#finish_line_o').hasClass('active')){
    //alert(player2Name + ' Wins!');
    $('#winner_banner').html('<h3>' + player2Name + ' wins!</h3>')
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

