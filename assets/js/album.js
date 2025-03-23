document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("list-music");
    const audioController = document.getElementById("audio-controller");
    const audioPlayer = document.getElementById("audio-player");
    const progressBar = document.getElementById("progress-bar");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const volumeControl = document.getElementById("volume-control");
    const trackImage = document.getElementById("track-image");
    const trackTitle = document.getElementById("track-title");
    const trackArtist = document.getElementById("track-artist");

    // Play music dan mengganti source album
    document.querySelectorAll(".play-btn").forEach(button => {
        button.addEventListener("click", function() {
            const song = this.getAttribute("audio-src");
            const image = this.getAttribute("image-src");
            const title = this.getAttribute("title-src");
            const artist = this.getAttribute("artist-src");

            if (audioPlayer.src !== song) {
                audioPlayer.src = song;
                trackImage.src = image;
                trackTitle.textContent = title;
                trackArtist.textContent = artist;

                table.classList.add("show");
                audioController.classList.add("show");
                audioPlayer.play();
                playPauseBtn.innerHTML = "⏸";
            } else {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playPauseBtn.innerHTML = "⏸";
                } else {
                    audioPlayer.pause();
                    playPauseBtn.innerHTML = "▶";
                }
            }
        });
    });

    playPauseBtn.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = "⏸";
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = "▶";
        }
    });

    // Update progress-bar
    audioPlayer.addEventListener("timeupdate", function() {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    });

    // Mengatur progress-bar
    progressBar.addEventListener("input", function() {
        const seektime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seektime;
    });

    // Mengatur volume
    volumeControl.addEventListener("input", function() {
        audioPlayer.volume = this.value;
    });

    // Non-aktifkan audio player jika musik habis
    audioPlayer.addEventListener("ended", function() {
        table.classList.remove("show");
        audioController.classList.remove("show");
        playPauseBtn.innerHTML = "▶";
    });
});

// Fungsi Tombol Sidebar --------------------------------------------
document.getElementById("menuBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector(".sidebar").classList.toggle("show");
});

document.getElementById("menuBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    const elements = document.querySelectorAll(".banner, .list-music, .tableMusic");
    elements.forEach(element => {
        element.classList.toggle("swipe");
    });
});

document.addEventListener("click", function(event) {
    const sidebar = document.querySelector(".sidebar");
    const banner = document.querySelector(".banner");
    const listMusic = document.querySelector(".list-music");
    const tableMusic = document.querySelector(".tableMusic");

    if (
        !sidebar.contains(event.target) && event.target !== menuBtn &&
        !banner.contains(event.target) && !listMusic.contains(event.target)
        && !tableMusic.contains(event.target)
    ) {
        sidebar.classList.remove("show");
        banner.classList.remove("swipe");
        listMusic.classList.remove("swipe");
        tableMusic.classList.remove("swipe");
    }
});
