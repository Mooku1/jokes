// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
//= require bootstrap/dropdown
//= require bootstrap/collapse
$(function(){
    $("#element").typed({
     strings: ["Hey dude you look good ^1000", "Hey dude you look good, nohomo."],
     showCursor: true,
     cursorChar: "|",
      typeSpeed: 7,



    });

    $("a[href='#bottom']").click(function() {
     $("html, body").animate({ scrollTop: $(document).height() }, "slow");
     return false;
   });

});
