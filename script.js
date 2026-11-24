
function startSurprise() {

    document.querySelector(".welcome-screen").style.display = "none";

    document.getElementById("birthdayScreen").style.display = "block";

}

function showGallery() {

    document.getElementById("birthdayScreen").style.display = "none";

    document.getElementById("galleryScreen").style.display = "block";

}

function showMessage() {

    document.getElementById("galleryScreen").style.display = "none";

    document.getElementById("messageScreen").style.display = "block";

    window.scrollTo(0, 0);

}
function showVideo() {

    document.getElementById("messageScreen").style.display = "none";

    document.getElementById("videoScreen").style.display = "block";

    window.scrollTo(0, 0);

}