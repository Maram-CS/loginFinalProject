const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const mybtn = document.getElementById("btn");

mybtn.onclick = function () {
    if(!email.includes("@") || !email.includes(".")){
        window.alert("your email must have @ and .");
        return 0;
    }else {
        window.alert(`welcome ${email}`);
    }
    
}
