// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require_tree .

(function() {
  $(document).on('click', '.toggle-window', function(e) {
    e.preventDefault();
    var panel = $(this).parent().parent();
    var messages_list = panel.find('.messages-list');
    // keep last status
    var visible = panel.find('.panel-body').is(":visible");

    if ($('#conversations-list').children().length > 2) {
      $('#conversations-list > li > div').removeClass('panel-default').addClass('panel-warning');
      $('#conversations-list > li > .panel-warning > .panel-body').hide();
    }


    if (visible) {
      panel.find('.panel-body').hide();
      panel.attr('class', 'panel panel-warning');
    }else {
      panel.find('.panel-body').show();
      panel.attr('class', 'panel panel-default');
      var height = messages_list[0].scrollHeight;
      messages_list.scrollTop(height);
    }
  });
})();

