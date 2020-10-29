function makeModal(project){
	$('#modalTitle').html(`${projects[project].name}`);
	//$('#share').html(`<p><a href="" onclick="makeLink('${projects[project].name}');">Link to this project</a></p>`);
	$('#modalBody').html(`
	    <div class="justify-content-center py-3" style="text-align: center; padding-top: 20px">

		    <div class="justify-content-center" style="text-align: center; padding: 0 40px">
		        <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } 
		        .embed-container iframe, .embed-container object, .embed-container embed 
		        { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>
		        <iframe width="560" height="315" src="https://www.youtube.com/embed/${projects[project].yt}" frameborder="0" 
		        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
		    </div>
	    </div>

	    <h5>Project Description</h5>
	    <p>${projects[project].desc}. See more on our <a href="https://www.${projects[project].site}" target="_blank">website</a></p>
	    <h5>Founding Team</h5>
	    <p style=" font-style: italic">${projects[project].founders[0].name}, ${projects[project].founders[0].title}</p>
	    <p>${projects[project].founders[0].bio} Follow me on <a href="https://www.linkedin.com/in/${projects[project].founders[0].linkedin}/" target="_blank">Linkedin</a></p>
	`);
}

function makeCards(){
	Object.keys(projects).forEach(key => {
		console.log(key);
	  $('#cards').append(`
	  	<div class="col-xl-2 col-sm-3 col-lg-2">
	        <div class="card fellow-card" style="">
	          <div class="fellow-card-div">
	            <img src="./static/logos/${key}.png" class="card-img-top fellow-card-img" >
	          </div>
	          <div class="card-body fellow-card-body">
	            <h5 class="card-title fellow-card-title">${projects[key].name}</h5>
	            <p class="card-text fellow-card-text">${projects[key].oneliner}</p>
	            <div style="text-align: center">
	              <button class="btn-sm btn-primary binance-button" style="text-align: center; font-size: 12px" data-toggle="modal" data-target="#projectModal" onclick="makeModal('${projects[key].name}');">Details
	              </button>
	            </div>
	          </div>
	        </div>
	    </div>
	  	`);
	});	
}

window.onload = function(){
	makeCards();
	checkURL();
}


function checkURL(){
	//todo
	//if window.location includes ? then extract it and open corresponding modal
	//makeModal(name);
	//$('#projectModal').modal('show');
}

function resetModal(){
	//on modal close, empty the html div's
	$('#projectModal').on('hidden.bs.modal', function (e) {
	  $('#modalTitle').html('');
	  $('#modalBody').html('');
	});
}

function makeLink(name){
	//todo
	//copy to clibboard https://www.binancex.dev/projects.html?project=name
	var copyText = `https://www.binancex.dev/projects.html?project=${name}`;
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Copied the text: " + copyText.value);
}

