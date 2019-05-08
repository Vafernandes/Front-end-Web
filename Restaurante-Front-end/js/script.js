
/* ----------------------------------------------Toggle*/
$(document).ready(function(){
  $('.toggle a').click(function (){
    $('#link').toggleClass('active');
  })
})

/*Reserva*/
$(document).ready(function(){
  $('#reservarMesa').click(function (){
    $('#reserva').toggleClass('active');
  })
})

/*Fechar reserva*/
$(document).ready(function(){
  $('#fecharReserva').click(function (){
    $('#reserva').toggleClass('active');
  })
})

/*Mais pratos*/
$(document).ready(function(){
  $('#toggleGaleria').click(function (){
    $('#maisPratos').toggleClass('active');
  })
})

/*Fechar mais pratos*/
$(document).ready(function(){
  $('#fecharMaisPratos').click(function (){
    $('#maisPratos').toggleClass('active');
  })
})


/*---------------------------------------------------------------------- Slide -------------*/
$(document).ready(function() {
  $('.slider_one_big_picture').EasySlides({
      'autoplay': true,
      'stepbystep': false,
      'show': 5,
      'loop': false
  })
  $('.slider_one_big_2').EasySlides({
      'autoplay': false,
      'stepbystep': true,
      'show': 5,
      'loop': false
  })
  $('.slider_circle_10').EasySlides({
      'autoplay': true,
      'show': 13
  })
  $('.slider_four_in_line').EasySlides({
      'autoplay': true,
      'show': 9
  })
  $('.slider_clock').EasySlides({
      'autoplay': true,
      'stepbystep': false,
      'show': 15
  })
});

/*-----------------------------------------Máscara------------------------------*/

$(document).ready(function (){
  $("#fone").mask('(00) 00000-0000')
})

$(document).ready(() => {
  $("#hora").mask("00:00")
})