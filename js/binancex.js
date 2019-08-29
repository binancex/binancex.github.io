var nav_template = Handlebars.templates['nav'];
var nav_html = nav_template(nav_context);
$(".b-navbar").html(nav_html);

var footer_template = Handlebars.templates['footer'];
$(".b-footer").html(footer_template);

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

