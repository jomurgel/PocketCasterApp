// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.addEventListener("keyup", function(e){

	// console.log(e.keyCode);

	var webview = document.getElementById('pcast');
	if(e.keyCode == 179){
		webview.send('media_play_pause');
	}
	else if(e.keyCode == 176){
		webview.send('media_next');
		document.getElementsByClassName('skip_forward_button')[0].click();
	}
	else if(e.keyCode == 177){
		webview.send('media_prev');
		document.getElementsByClassName('skip_back_button')[0].click();
	}
});
