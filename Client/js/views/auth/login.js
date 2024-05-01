// THE HTML COMPONENT FOR LOGIN
function login() {
  return `
  <form class="auth-group" id="login-form" method="POST">
    <h1 class="form-title">Sign In</h1>

    <div class="form-group">
      <input class="form-control" id="username" name="username" required />
      <label for="username">Username/Email address</label>
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
    <button class="btn-submit" type="submit">Sign In</button>
  </form>`;
}