const check = Boolean(sessionStorage.getItem('isSignin'))
if (!check) {
    window.location.href = '/lesson11/signin.html'
}