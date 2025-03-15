document.addEventListener("DOMContentLoaded", function () {
    console.log("Webbsidan är laddad och redo!");

    document.querySelectorAll(".catalog-item").forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#b0b0b0";
        });
        item.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#dcdcdc";
        });
    });
});
