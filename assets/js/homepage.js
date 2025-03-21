// Fungsi untuk scroll 
document.addEventListener("DOMContentLoaded", function() {
    function scrollAlbum (scrollLeftId, scrollRightId, scrollContainerId) {
        const scrollContainerAlbum = document.getElementById(scrollContainerId);
        const scrollLeftAlbum = document.getElementById(scrollLeftId);
        const scrollRightAlbum = document.getElementById(scrollRightId);

        const scrollAmount = 300;

        scrollLeftAlbum.addEventListener("click", () => {
            scrollContainerAlbum.scrollLeft -= scrollAmount;
        });

        scrollRightAlbum.addEventListener("click", () => {
            scrollContainerAlbum.scrollLeft += scrollAmount;
        });
    };

    scrollAlbum("scroll-left-1", "scroll-right-1", "content-a-1");
    scrollAlbum("scroll-left-2", "scroll-right-2", "content-a-2");
    scrollAlbum("scroll-left-3", "scroll-right-3", "content-a-3");
});

// Fungsi Tombol Sidebar
document.getElementById("menuBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector(".sidebar").classList.toggle("show");
});

document.getElementById("menuBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    document.querySelector(".content", ".content-a-1", ".content-a-2", ".content-a-3").classList.toggle("swipe");
});

document.addEventListener("click", function(event) {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const content1 = document.querySelector(".content-a-1");
    const content2 = document.querySelector(".content-a-2");
    const content3 = document.querySelector(".content-a-3");
    const menuBtn = document.getElementById("menuBtn");

    if (
        !sidebar.contains(event.target) && event.target !== menuBtn &&
        !content1.contains(event.target) && !content2.contains(event.target) &&
        !content3.contains(event.target) && event.target !== menuBtn
    ) {
        sidebar.classList.remove("show");
        content.classList.remove("swipe");
        content1.classList.remove("swipe");
        content2.classList.remove("swipe");
        content3.classList.remove("swipe");
    }
});

