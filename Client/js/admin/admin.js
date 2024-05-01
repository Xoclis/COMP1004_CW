function initialiseAdminFunctions() {
    updateUsers();
    editUser();
}

function showModal(record) {
    const editUUID = document.querySelector('#editUserId');
    editUUID.value = record.uuid;

    const editFirstNameInput = document.querySelector('#editFirstName');
    editFirstNameInput.value = record.firstname;

    const editLastNameInput = document.querySelector('#editLastName');
    editLastNameInput.value = record.lastname;

    const editUsernameInput = document.querySelector('#editUsername');
    editUsernameInput.value = record.username;

    const editEmailInput = document.querySelector('#editEmail');
    editEmailInput.value = record.email;

    const editPasswordInput = document.querySelector('#editPassword');
    editPasswordInput.value = record.password;

    const editUserModal = document.querySelector('#editUserModal');
    editUserModal.style.display = 'block';
}

function closeModal() {
    const editUserModal = document.querySelector('#editUserModal');
    editUserModal.style.display = 'none';
}

async function updateUsers() {
    const tableBody = document.querySelector('#user-table tbody');
  
    const usersDB = await fetchUsers(auth.userUUID);

    const userRecords = usersDB.users;
  
    tableBody.innerHTML = '';

    Object.entries(userRecords).forEach(record => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${record[1].firstname}</td>
        <td>${record[1].lastname}</td>
        <td>${record[1].username}</td>
        <td>${record[1].email}</td>
        <td>${record[1].password}</td>
        <td><a href="#" class="edit-link">Edit</a></td>
      `;
  
      tableBody.appendChild(newRow);

      const editLink = newRow.querySelector('.edit-link');
      editLink.addEventListener('click', function(e) {
        e.preventDefault();
        showModal(record[1]);
      });
    });
  }

async function fetchUsers(uuid) {
    const url = 'http://localhost:3000/admin/fetchUsers';
    const headers = {
      'Content-Type': 'application/json'
    };
  
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
  
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
  
            resolve(responseData);

          } else {
            console.error('Failed to fetch data:', xhr.statusText);
            reject(xhr.statusText);
          }
        }
      };
  
      const data = JSON.stringify({
        uuid: uuid
      });

      xhr.send(data);
    });
  }

function editUser() {
  const url = 'http://localhost:3000/admin/editUser';
  const headers = {
      "Content-Type": "application/json"
  };

  const editForm = document.querySelector('#editUserForm');
  editForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const notificationEl = document.querySelector('#notification');
      const formData = new FormData(editForm);

      const editUUID = document.querySelector('#editUserId');

      const data = {'uuid': auth.userUUID, 'editUUID': editUUID.value};
      formData.forEach((value, key) => {
          data[key] = value;
      });

      const jsonFormData = JSON.stringify(data);

      console.log(jsonFormData);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);

      Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  notificationEl.innerText = "Success: User Edited Successfully";
                  notificationEl.classList.remove('msg-error');
                  notificationEl.classList.remove('msg-warn');
                  notificationEl.classList.add('msg-success');
                  
                  updateUsers();
              } else if(xhr.status === 401) {
                  notificationEl.innerText = "Unauthorised: Incident has been reported.";
                  notificationEl.classList.remove('msg-success');
                  notificationEl.classList.remove('msg-warn');
                  notificationEl.classList.add('msg-error');
              } else {
                  notificationEl.innerText = "Error: Internal Server Error!";
                  notificationEl.classList.remove('msg-success');
                  notificationEl.classList.remove('msg-warn');
                  notificationEl.classList.add('msg-error');
              }
          }
      };

      xhr.send(jsonFormData); 

      closeModal();
  });
}