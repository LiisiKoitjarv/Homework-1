document.addEventListener("DOMContentLoaded", () => { // waits till everithing is loaded

    if (!window.location.href.includes("login.html")) {
        const profileBtn = document.querySelector(".profile-btn");
        const dropdown = document.querySelector(".dropdown");
        const logoutBtn = document.getElementById("logout");

        profileBtn.addEventListener("click", () => { // show / dont show menu
            dropdown.classList.toggle("hidden");
        });

        logoutBtn.addEventListener("click", () => { // redirect to login page when logout is clicked
            window.location.href = "login.html";
        });
    }

});
