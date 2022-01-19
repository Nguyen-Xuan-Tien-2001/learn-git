var login = document.querySelector(".navbar-user");
    openLogin = document.querySelector(".modal");
    closeLogin = document.querySelector(".modal__overlay")
    openLogin.style.display = "block";
login.onclick = function(){
        openLogin.style.display = "block";
    };
closeLogin.onclick = function() {
    openLogin.style.display = "none";

}
