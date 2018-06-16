$( window ).resize(function() {
      var w = $( document ).width();
      var h = $( document ).height();
      var txt = "Szerokość okna wynosi " + w + " pikseli, natomiast szerokość " + h + " pikseli";
      document.getElementById("demo").innerHTML = txt;

})
