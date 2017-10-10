// Get the ipcRenderer of electron
const {ipcRenderer} = require('electron');

// Execute media key commands
ipcRenderer.on('media_play_pause', function(){
    document.getElementsByClassName('animated-play-button')[0].click();
	document.getElementsByClassName('play_pause_button')[0].click();
});
ipcRenderer.on('media_next',function(event,data){
    document.getElementsByClassName('skip-forward-button')[0].click();
    document.getElementsByClassName('skip_forward_button')[0].click();
});
ipcRenderer.on('media_prev',function(event,data){
    document.getElementsByClassName('skip-back-button')[0].click();
    document.getElementsByClassName('skip_back_button')[0].click();
});