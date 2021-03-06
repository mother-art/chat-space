$(function(){ 
    function buildHTML(message){
      if (message.image){
        var image = `<img src=${message.image} >`
      }else{
        var image = ""
      }
        var html =
        `<div class="message" data-message-id=${message.id}>
           <div class="message__info">
             <div class="message__info__user">
               ${message.user_name}
             </div>
             <div class="message__info__time">
               ${message.created_at}
             </div>
           </div>
           <div class="message__content">
             <p class="message__content__text">
               ${message.content}
             </p>
           </div>
           ${image}
         </div>`
       return html;
    }

$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    console.table(data)
    var html = buildHTML(data);
    $('.submit-btn').prop('disabled', false);
    $('.messages').append(html);      
    $('form')[0].reset();
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
    $('.submit-btn').prop('disabled', false);
});
})
  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      window.alert('更新に失敗しました')
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});