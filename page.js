$( document ).ready(function() {
    $('#button').click(function() {
        $('#div1').show();
        $('#div2').hide();
        $('#div3').hide();
    });
    $('#button1,#butt').click(function(){
      $('#div1').hide();
      $('#div2').show();
      $('#div3').hide();
    })
    $('#button2,#butt1').click(function(){
      $('#div1').hide();
      $('#div2').hide();
      $('#div3').show();
    })
});
