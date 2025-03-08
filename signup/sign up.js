document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verifyPassword").value;

  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("verifyPasswordError").textContent = "";

  let valid = true;

  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Tên đăng nhập không được để trống.";
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Email không hợp lệ.";
    valid = false;
  }

  if (password.length < 8 || password.length > 20) {
    document.getElementById("passwordError").textContent =
      "Mật khẩu phải từ 8 đến 20 ký tự.";
    valid = false;
  }

  if (password !== verifyPassword) {
    document.getElementById("verifyPasswordError").textContent =
      "Xác nhận mật khẩu không trùng khớp.";
    valid = false;
  }

  if (valid) {
    try {
      const salt = CryptoJS.lib.WordArray.random(16).toString();
      const hashedPassword = CryptoJS.SHA256(password + salt).toString();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra email đã tồn tại chưa
      if (users.some((user) => user.email === email)) {
        alert("Email đã được đăng ký. Vui lòng dùng email khác.");
        return;
      }

      users.push({
        username: username,
        email: email,
        salt: salt,
        password: hashedPassword,
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công!");
      window.location.href = "/signin/sign in.html";
    } catch (error) {
      console.error("Lỗi mã hóa:", error);
      alert("Đã xảy ra lỗi trong quá trình đăng ký.");
    }
  }
});
