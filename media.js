// Get the ipcRenderer of electron
const {ipcRenderer} = require('electron');

// Execute media key commands
ipcRenderer.on('media_play_pause', function(){
    var btn = document.getElementsByClassName('play_pause_button')
    if(btn.length > 0){
        document.getElementsByClassName('play_pause_button')[0].click();
    } else {
        document.getElementsByClassName('animated-play-button')[0].click();
    }
});

ipcRenderer.on('media_next',function(event,data){
    var btn = document.getElementsByClassName('skip_forward_button')
    if(btn.length > 0){
        document.getElementsByClassName('skip_forward_button')[0].click();
    } else {
        document.getElementsByClassName('skip-forward-button')[0].click();
    }
});

ipcRenderer.on('media_prev',function(event,data){
    var btn = document.getElementsByClassName('skip_back_button')
    if(btn.length > 0){
        document.getElementsByClassName('skip_back_button')[0].click();
    } else {
        document.getElementsByClassName('skip-back-button')[0].click();
    }
});
