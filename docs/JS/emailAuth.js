// SIGN UP
const signUpWithEmail = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        console.log(userCredential.user);
        })
        .catch((error) => {
        console.error(error);
    });
};

// SIGN IN
const signInWithEmail = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        console.log(userCredential.user);
    })
    .catch((error) => {
        console.error(error);
    });
};

// BTTNS TIME
// SIGN UP
document.getElementById('email-signup-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUpWithEmail(email, password);
});
// SIGN IN
document.getElementById('email-signin-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmail(email, password);
});  