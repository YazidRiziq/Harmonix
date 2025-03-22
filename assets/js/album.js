document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("list-music")
    const audioController = document.getElementById("audio-controller");
    const audioPlayer = document.getElementById("audio-player");
    const progressBar = document.getElementById("progress-bar");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const volumeControl = document.getElementById("volume-control");
    const trackImage = document.getElementById("track-image");
    const trackTitle = document.getElementById("track-title");
    const trackArtist = document.getElementById("track-artist");

    // Untuk play music dan mengganti source album
    document.querySelectorAll(".play-btn").forEach(button => {
        button.addEventListener("click", function() {
            const song = this.getAttribute("audio-src");
            const image = this.getAttribute("image-src");
            const title = this.getAttribute("title-src");
            const artist = this.getAttribute("artist-src");

            audioPlayer.src = song;
            trackImage.textContent = image;
            trackTitle.textContent = title;
            trackArtist.textContent = artist;

            table.classList.add("show");
            audioController.classList.add("show");
            audioPlayer.play();

            // play pause
            playPauseBtn.addEventListener("click", function() {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
            });

            // update progress-bar
            audioPlayer.addEventListener("timeupdate", function() {
                progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            });

            // mengatur volume
            volumeControl.addEventListener("input", function() {
                audioPlayer.volume = this.value;
            });

            // nona-ktifkan audio player jika musik habis
            audioPlayer.addEventListener("ended", function() {
                table.classList.remove("show");
                audioController.classList.remove("show");
            });
        });
    });
});