//   Завдання 1 — Розбір e-mail

let s = "volodymyr.sondei.24@pnu.edu.ua";
let r = /^([a-z0-9]+)(\.[a-z0-9]+)*@([a-z0-9]+)(\.[a-z0-9]+)*$/i;
let a = s.match(r);

let out = "";

if (a) {
    for (let i = 0; i < a.length; i++) {
        out += `<hr>a[${i}] = ${a[i]}`;
    }
} else {
    out = "E-mail не співпав з шаблоном!";
}

document.getElementById("emailTaskOutput").innerHTML = out;

//   Завдання 2 — Валідація Форми

function validateForm() {

    // Регулярні вирази
    let rEmail = /^[a-z0-9._-]+@pnu\.edu\.ua$/i;
    let rFio = /^[A-ZА-ЯІЇЄ][a-zа-яіїє]+ [A-ZА-ЯІЇЄ]+$/;
    let rLogin = /^[a-zA-Z]+$/;
    let rPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_\-!@#$%^&*]).{8,}$/;
    let rIndex = /^[0-9]{5}$/;

    // Поля
    let email = document.getElementById("email");
    let fio = document.getElementById("fio");
    let login = document.getElementById("login");
    let pass = document.getElementById("pass");
    let index = document.getElementById("index");

    checkField(email, rEmail, "має бути вигляд: ваш_email@pnu.edu.ua", "msg_email");
    checkField(fio, rFio, "Ім’я: Перша велика, прізвище: всі великі", "msg_fio");
    checkField(login, rLogin, "Лише латина", "msg_login");
    checkField(pass, rPass, "Мінімум 8 символів: буква, цифра, спецсимвол", "msg_pass");
    checkField(index, rIndex, "5 цифр", "msg_index");
}

function checkField(field, regex, errorText, messageId) {
    let msg = document.getElementById(messageId);

    if (regex.test(field.value)) {
        field.classList.remove("error");
        field.classList.add("ok");

        msg.classList.remove("error");
        msg.classList.add("okmsg");
        msg.textContent = "✔";
    } else {
        field.classList.remove("ok");
        field.classList.add("error");

        msg.classList.remove("okmsg");
        msg.classList.add("error");
        msg.textContent = errorText;
    }
}

