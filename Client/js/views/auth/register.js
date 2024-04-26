function register() { 
  return `
    <form class="auth-group" id="register-form" method="POST">
      <h1 class="form-title">Register</h1>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="firstname"
          name="firstname"
          required
        />
        <label for="firstname">First name</label>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="lastname"
          name="lastname"
          required
        />
        <label for="lastname">Last name</label>
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="username"
          name="username"
          required
        />
        <label for="username">Username</label>
      </div>

      <div class="form-group">
        <input type="email" class="form-control" id="email" name="email" required />
        <label for="email">Email Address</label>
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          required
        />
        <label for="password">Password</label>
      </div>
      <div class="form-error"><p id="error"></p></div>
      <button class="btn-submit" type="submit">Register</button>
    </form>`; 
}
