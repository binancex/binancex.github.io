var collab_jumbotron_template = Handlebars.templates['collab_jumbotron'];
$(".collab-jumbotron-div").html(collab_jumbotron_template);

var collab_tabs_template = Handlebars.templates['collab_tabs'];
var collab_tabs_html = collab_tabs_template(collab_tabs_context);
$("#collab_tabs_div").html(collab_tabs_html);

