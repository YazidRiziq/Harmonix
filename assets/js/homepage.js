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
});