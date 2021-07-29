function login(){
    var username=document.getElementById("user_login").value;
    localStorage.setItem("name",username);
    window.location="kwitter.html";
}