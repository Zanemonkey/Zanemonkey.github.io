// racer.js - a drag racing game in JS
// by Howard Smith 16/01/2016 AD
// char x = 88
// char o = 79

$(document).ready(function() {
  function doStuff() {
 // $(".racer_table #player1_strip .active").html("X");
    $(".racer_table #player1_strip .active").next().addClass("active").html("X");
    if($("#finish_line_x").hasClass("active") ) {
      alert("X wins!");
    }
  }

  function doOtherStuff() {
   // $(".racer_table #player2_strip .active").html("O");
    $(".racer_table #player2_strip .active").next().addClass("active").html("O");
    if($("#finish_line_o").hasClass("active") ) {
      alert("O wins!");
    }
  }

  $("button#resetButton").click(function() {
      alert("OK, I'm resetting");
      location.reload();
    });
  //$("button#otherGoButton").click(doOtherStuff);

  $(document).keyup(function(e){
    if(event.which == 88) {
      doStuff();
    } else
    if(event.which == 79) {
      doOtherStuff();
    }
  });
});

