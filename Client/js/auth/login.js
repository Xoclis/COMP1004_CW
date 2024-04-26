function initialiseLoginSubmission() {
    loginFormConfiguration();
}


function loginFormConfiguration() {
    const loginForm = document.getElementById('login-form');

    const url = 'http://localhost:3000/login';
    const headers = {
        "Content-Type": "application/json"
    };

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);

        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const jsonFormData = JSON.stringify(data);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key]);
        });

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const responseData = JSON.parse(xhr.responseText);

                    auth.isAuthed = true;
                    auth.userUUID = responseData['uuid'];

                    viewSelector = 0;
                    viewport.innerHTML = dashboard();

                    const welcomeNI = document.querySelector('#welcome');
                    welcomeNI.innerHTML = `Welcome ${responseData['name']}`;
                    welcomeNI.style.display = 'block';

                    const authLinks = document.querySelectorAll('.auth-links .auth');

                    authLinks.forEach((link) => {
                        link.style.display = 'none';
                    });
                } else {
                    const error = document.querySelector("#error");
                    const msg = JSON.parse(xhr.responseText)['error'];
                    error.innerHTML = msg;
                }
            }
        };

        xhr.send(jsonFormData); 
    });
}