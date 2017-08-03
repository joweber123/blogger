$(function(){
  spaceShift();
});


function spaceShift(){
  $('.post-list-container-cover').hover(function(event){
    event.preventDefault();
    $(this).next().find(">:first-child").find(">:first-child").addClass('move');
  });
};
