// function to check if the user has entered info on both login fields
function validateForm() {
    // getting the email and password that's entered by the user
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // checking whether either field (or both of them) is empty and then alerting the user accordingly
    if (email === '' && password === '') {
        alert('Please enter your login information');
    } else if (email === '') {
        alert('Please enter your email address');
    } else if (password === '') {
        alert('Please enter your password');
    } else {
        window.location.href = 'index.html'; // if we have all the info, redirect the user to index page
    }
  }