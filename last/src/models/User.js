class User {

  #username;
  #password;

  constructor({ username = 'username', password = 'password' }) {
    this.#username = username;
    this.#password = password;
  }

  getUsername() {
    return this.#username;
  }

  getPassword() {
    return this.#password;
  }

  setUsername(username) {
    this.#username = username;
  }

  setPassword(password) {
    this.#password = password;
  }

}

module.exports = User;
