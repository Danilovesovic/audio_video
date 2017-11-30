var videoPlayer = {
    playImage  : document.querySelector('#playImage'),
    reloadImage : document.querySelector('#reloadImage'),
    video : document.querySelector('video'),
    
    init(){
        this.playImage.addEventListener('click',this.playPauseVideo);
        this.reloadImage.addEventListener('click',this.reloadVideo);
    },

    playPauseVideo(){
        if (this.getAttribute('src') == "images/play.png") {
            videoPlayer.video.play();
            this.setAttribute('src', 'images/pause.png')
        }else{
            videoPlayer.video.pause();
            this.setAttribute('src', 'images/play.png')
        }
    },
    reloadVideo(){
        videoPlayer.video.load();
        videoPlayer.playImage.setAttribute('src', 'images/play.png')
    }
}


videoPlayer.init();





