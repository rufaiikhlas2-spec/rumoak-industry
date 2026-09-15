document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");

            menuButton.textContent =
                navLinks.classList.contains("open") ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.textContent = "☰";
            });
        });
    }


    // Automatic current year
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // WhatsApp enquiry buttons
    document.querySelectorAll("[data-order]").forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.getAttribute("data-order");

            const phone = "2348035441702";

            const message =
                "Hello RUMOAK INDUSTRY NIG LTD. I am interested in ordering: " +
                product +
                ". Please provide more information.";

            const whatsappURL =
                "https://wa.me/" +
                phone +
                "?text=" +
                encodeURIComponent(message);

            // Navigate directly to the HTTPS WhatsApp link
            window.location.href = whatsappURL;
        });
    });


    // Page transition
    document.querySelectorAll("a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (
            href &&
            href.endsWith(".html") &&
            !href.startsWith("http") &&
            !href.startsWith("#")
        ) {
            link.addEventListener("click", function () {
                document.body.classList.add("page-leaving");
            });
        }

    });

});
