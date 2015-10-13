function liTemplate(id, input, details){
  return '<li class="language" data-details="' +
  details +
  '">' +
  input +
  '</li>';
}

function detailsTemplate(details){
  return'<div class="details">' +
  details +
  '</div>';
}
function appendToUl(ul, item) {
    ul.append(liTemplate(item.id, item.name, item.details));
}

$(document).ready(function() {
  languages = [{"name":"ruby","details":"the language of ballers","id":1},
    {"name":"python","details":"a snaky language","id":2},
    {"name":"javascript","details":"JUNK!","id":3},
    {"name":"haskell","details":"check out my neckbeard","id":4}
  ]
  languages.forEach(function(item) {
    appendToUl($(".languages"), item);
  })

  $('.languages').click(function(event) {
    var $li = $(event.target);
    if ($li.find('.details').length === 0) {
      var details = $li.data('details');
      $li.append(detailsTemplate(details));
    } else {
      $li.find('.details').remove();
    }
  })
});