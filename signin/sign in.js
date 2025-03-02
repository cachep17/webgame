document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //giá trị input
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verifyPassword").value;

  // Reset thông báo lỗi
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("verifyPasswordError").textContent = "";

  let valid = true;

  // Xác thực Username
  if (username.length < 6 || username.length > 18) {
    document.getElementById("usernameError").textContent =
      "Username phải từ 6 đến 18 ký tự.";
    valid = false;
  }

  // Xác thực Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Email không hợp lệ.";
    valid = false;
  }

  // Xác thực Password
  if (password.length < 8 || password.length > 20) {
    document.getElementById("passwordError").textContent =
      "Password phải từ 8 đến 20 ký tự.";
    valid = false;
  }

  // Xác thực Verify Password
  if (password !== verifyPassword) {
    document.getElementById("verifyPasswordError").textContent =
      "Verify Password không trùng khớp.";
    valid = false;
  }

  if (valid) {
    alert("Đăng ký thành công!");
  }
});
