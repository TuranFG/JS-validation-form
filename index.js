const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitButton = document.getElementById('button');

function showError(value, message) {
    value.nextElementSibling.innerText = message;
    value.style.borderColor = "red";
}

function showSuccess(value) {
    value.nextElementSibling.innerText = "";
    value.style.borderColor = "green";
}

function resetStyles (){
    userName.style.borderColor = "#ece9e9";
    email.style.borderColor = "#ece9e9";
    password.style.borderColor = "#ece9e9";
    password2.style.borderColor = "#ece9e9";

}


function checkInputs() {
    const userNameVal = userName.value;
    const passwordVal = password.value;
    const passwordVal2 = password2.value;
    const emailVal = email.value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = true;

    if (userNameVal.length <= 3 || userNameVal.length >= 15) {
        showError(userName, "Username must be between 3 and 15 characters long");
        isValid = false;

    } else {
        showSuccess(userName);
    }

    if (passwordVal.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
        
    } else {
       showSuccess(password);
    }

    if (passwordVal2 !== passwordVal) {
        showError(password2, "Confirm Password does not match");
        isValid = false;

    } else {
        showSuccess(password2);
    }

    if (emailVal.match(regex)) {
        showSuccess(email);

    } else {
        showError(email, "Invalid email address");
        isValid = false;
    }

    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
        const cardInner = `
            <div id="userInfo">
                <div class="userVal"> <strong>Username:</strong> ${userName.value}</div>
                <div class="userVal"> <strong>Email:</strong> ${email.value}</div>
                <div class="userVal"> <strong>Password:</strong> ${password.value}</div>
            </div>`;

        const dataInfo = document.getElementById("dataBase");
        dataInfo.innerHTML += cardInner;

        userName.value = "";
        password.value = "";
        password2.value = "";
        email.value = "";
        resetStyles();
    }
});

