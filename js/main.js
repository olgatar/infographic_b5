var button = document.getElementById('button');


button.onclick = function() {
  var chordLine = document.querySelectorAll(".chord-img-line");
  var i;

  for (i = 0; i < chordLine.length; i++) {

    if (chordLine[i].style.display === 'block' || chordLine[i].style.display === '') {
        chordLine[i].style.display = 'none';
    }
    else {
      chordLine[i].style.display = 'block';
    }
  }
};

$("li").on("click", function() {

  var chordG = document.getElementById('audioG');
      chordG.preload = "auto";
  var chordC = document.getElementById('audioC');
      chordC.preload = "auto";
  var chordEm = document.getElementById('audioEm');
      chordEm.preload = "auto";
  var chordD = document.getElementById('audioD');
      chordD.preload = "auto";

  if ($(this).is("#G")) {
    chordG.play();
  }
  else if ($(this).is("#C")) {
    chordC.play();
  }
  else if ($(this).is("#Em")) {
    chordEm.play();
  }
  else if ($(this).is("#D")) {
    chordD.play();
  }
});
