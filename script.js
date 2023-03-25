//add red border around required inputs if left empty after focusing on it
const inputs = document.getElementsByClassName('requiredInput');
for (const input of inputs ){
        input.addEventListener("focusout", function() {
            if(input.value === ''){
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid rgb(207, 207, 207)';
            }
        })
    };

//regular expression for email validation and add red border if invalid after focusing on it
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const email = document.getElementById('email');
email.addEventListener("focusout", function(){
    if (email.value.match(emailRegex)) {
        email.style.border = '1px solid rgb(207, 207, 207)';
    } else {
        email.style.border = '1px solid red';
    }
});

//password validation
const pword = document.getElementById('pword');
const pwordConfirm = document.getElementById('pword-confirm');
const pwordChecks = document.getElementsByClassName('pwordMatch');
const pwd1 = document.getElementById('pwd1')
const pword2 = document.getElementById('pword2');
const pwordHint = document.getElementById('pwordHint');
const pwdRegex = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

//Display password criteria upon focusing on password input
pword.addEventListener('focus', function(){
    if (pwordHint.style.visibility === '' || pwordHint.style.visibility === 'hidden') {
        pwordHint.style.visibility = 'visible';
    }
});
//display symbol if password 1 meets criteria upon release of each key.
pword.addEventListener('keyup', function () {
    if (pword.value != '') {
        if (pword.value.match(pwdRegex)) {
            pwd1.textContent = '✔︎';
            pwd1.style.color = 'green';
            pwd1.style.visibility = 'visible';
            pword.style.border = '1px solid green';
        } else { //don't display incorrect symbol with each keyup as that can be too aggressive
            pwd1.textContent = '✖︎';
            pwd1.style.color = 'red';
            pwd1.style.visibility = 'hidden';
        }
    } else { 
        pword.style.border = '1px solid rgb(207, 207, 207)';
        pwd1.style.visibility = 'hidden';
    }
    //if password 2 is not null while inputting password 1, then update password 2 symbol
    if (pwordConfirm.value != '') {
        if (pwordConfirm.value != pword.value) {
            pwordConfirm.style.border = '1px solid red';
            pword2.textContent = '✖︎';
            pword2.style.color = 'red';
        } else {
            pwordConfirm.style.border = '1px solid green';
            pword2.textContent = '✔︎';
            pword2.style.color = 'green';
            pword2.style.visibility = 'visible';
        }
    } else if (pwordConfirm.value === ''){
        pwordConfirm.style.border = '1px solid rgb(207, 207, 207)';
        pword2.style.visbility = 'hidden';
    }
});
//display symbol if password 1 meets criteria after focusing out of password 1 input
pword.addEventListener('focusout', function(){
    if (pword.value != '') {
        if (pword.value.match(pwdRegex)) {
            pwd1.textContent = '✔︎';
            pwd1.style.color = 'green';
            pwd1.style.visibility = 'visible';
            pword.style.border = '1px solid green';
        } else {
            pwd1.textContent = '✖︎';
            pwd1.style.color = 'red';
            pwd1.style.visibility = 'visible';
            pword.style.border = '1px solid red';
        }
    } else {
        pword.style.border = '1px solid red';
        pwd1.style.visibility = 'hidden';
    }
}); 
//display symbol if password 2 matches password 1 upon release of each key. 
pwordConfirm.addEventListener('keyup', function () {
    if (pwordConfirm.value != pword.value) {
        pwordConfirm.style.border = '1px solid red';
        pword2.textContent = '✖︎';
        pword2.style.color = 'red';
        pword2.style.visibility = 'hidden';
    } else if (pwordConfirm.value != ''){ //if passwords match and if it's not null
        pwordConfirm.style.border = '1px solid green';
        pword2.textContent = '✔︎';
        pword2.style.color = 'green';
        pword2.style.visibility = 'visible';
    }
});
//confirm if password 2 matches password 1 after focusing out of password 2 input
pwordConfirm.addEventListener('focusout', function(){
    if (pwordConfirm.value != pword.value) {
        pwordConfirm.style.border = '1px solid red';
        pword2.textContent = '✖︎';
        pword2.style.color = 'red';
        pword2.style.visibility = 'visible';
    } else if (pwordConfirm.value != ''){ //if passwords match and if it's not null
        pwordConfirm.style.border = '1px solid green';
        pword2.textContent = '✔︎';
        pword2.style.color = 'green';
        pword2.style.visibility = 'visible';
    }
});
//confirm if password 2 matches password 1 after focusing out of password 1 input
pword.addEventListener('focusout', function(){
    if (pwordConfirm.value != '') {
        if (pwordConfirm.value != pword.value) {
            pwordConfirm.style.border = '1px solid red';
            pword2.textContent = '✖︎';
            pword2.style.color = 'red';
            pword2.style.visibility = 'visible';
        } else if (pwordConfirm.value != ''){
            pwordConfirm.style.border = '1px solid green';
            pword2.textContent = '✔︎';
            pword2.style.color = 'green';
            pword2.style.visibility = 'visible';
        }
    }

    if (pwordHint.style.visibility === 'visible') {
        pwordHint.style.visibility = 'hidden';
    }
}); 
