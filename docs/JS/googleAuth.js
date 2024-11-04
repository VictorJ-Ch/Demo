const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .then((result) => {
        console.log(result.user);
    })
    .catch((error) => {
        console.error(error);
    });
};

document.getElementById('google-signin-btn').addEventListener('click', signInWithGoogle);

// IMPORTANT THINGS
// BTTN ID = google-signin-btn
