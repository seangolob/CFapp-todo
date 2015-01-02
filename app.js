$( document ).ready(function() {
  $('#submit').on('click', function(){
    var content = $('#input').val();
    $('<li>' + content + "</li>").addClass('list-item').appendTo('#list');
    $('#input').val('');
    event.preventDefault();
    return false;
  });
  $(document).on('click', 'li', function(){
    $(this).remove();
  });
});
