$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Main_chat__message_list__first" data-message-id=${message.id}>
          <div class="Main_chat__message_list__first__member">
            <div class="Main_chat__message_list__first__member__name">
              ${message.user_name}
            </div>
            <div class="Main_chat__message_list__first__member__time">
              ${message.created_at}
            </div>
          </div>
          <div class="Main_chat__message_list__first__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main_chat__message_list__first" data-message-id=${message.id}>
        <div class="Main_chat__message_list__first__member">
          <div class="Main_chat__message_list__first__member__name">
            ${message.user_name}
          </div>
          <div class="Main_chat__message_list__first__member__time">
            ${message.created_at}
          </div>
        </div>
        <div class="Main_chat__message_list__first__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $(".contents").on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".Main_chat__message_list").append(html);  
      $('form')[0].reset();
      $('.Main_chat__message_list').animate({ scrollTop: $('.Main_chat__message_list')[0].scrollHeight});
      $('.submit_btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit_btn').prop("disabled", false);
    });
  });
});