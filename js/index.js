$(document).ready(function(){
	function tabOneClickHandler(e) {
    Enabler.counter('tab-one',true);
	}
	document.getElementById('tab-one').addEventListener('click',
	tabOneClickHandler, false);
})