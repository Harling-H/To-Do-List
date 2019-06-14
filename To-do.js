var list = $('.list')
var sumbit = $('.sub-btn')

function addTask(){
  var item = $('.name').val();
  list.apprend('<p class="itemTo-do">- ${name}');
  $('.name').val("");
}

sub-btn.on("click", addTask);
