 document.getElementById("toLogin").addEventListener("click", function() {
    window.location.href = "https://expense-tracker-login.netlify.app";
});
document.getElementById("toSignup").addEventListener("click", function() {
    window.location.href = "https://expense-tracker-signup.netlify.app";
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display elements from the server
    cookieCheck(); 

});

function cookieCheck()
{
    cookie_name = "expense_tracker_cookie_container"
    if(document.cookie.split(';').some((item) => item.trim().startsWith(`${cookie_name}=`)))
    {
        console.log("true")
        window.location.href = "https://expense-tracker-dash-board.netlify.app";
    }
}