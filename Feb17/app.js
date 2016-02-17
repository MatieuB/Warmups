$(document).ready(function(){

  $("button").on('click',function(){
    $('#imageToToggle').slideToggle();
  });
  $("input").on('keyup',function(){
    $('#previewParagraph').text($(this).val());
  })

})
