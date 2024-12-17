document.addEventListener("DOMContentLoaded", function() {
    var portalLink = document.querySelector("a[href='/portal']");
    if (portalLink) {
        portalLink.textContent = "Customer Portal";
    }
});
