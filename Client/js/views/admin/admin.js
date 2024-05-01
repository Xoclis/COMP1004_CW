// THE HTML COMPONENT FOR Admin
function admin() { 
    return `
    <div id="admin">
        <h1>User Management</h1>
        <table id="user-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>

        <div id="editUserModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>Edit User</h2>
                <form id="editUserForm">
                    <input type="hidden" id="editUserId">
                    <label for="editFirstName">First Name:</label>
                    <input type="text" id="editFirstName" name="editFirstName">
                    <label for="editLastName">Last Name:</label>
                    <input type="text" id="editLastName" name="editLastName">
                    <label for="editUsername">Username:</label>
                    <input type="text" id="editUsername" name="editUsername">
                    <label for="editEmail">Email:</label>
                    <input type="email" id="editEmail" name="editEmail">
                    <label for="editPassword">Password:</label>
                    <input type="password" id="editPassword" name="editPassword">
                    <input type="submit" value="Save">
                </form>
            </div>
        </div>
    </div>`; 
}
