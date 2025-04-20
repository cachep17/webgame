document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Reset thông báo lỗi
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let valid = true;

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Email không hợp lệ.";
      valid = false;
    }

    // Kiểm tra mật khẩu
    if (password.length < 8 || password.length > 20) {
      document.getElementById("passwordError").textContent =
        "Mật khẩu phải từ 8 đến 20 ký tự.";
      valid = false;
    }

    if (valid) {
      // Kiểm tra thư viện CryptoJS đã tải chưa
      if (typeof CryptoJS === "undefined") {
        alert("Lỗi: Không tìm thấy thư viện CryptoJS.");
        return;
      }
      // Lấy danh sách user đã lưu (nếu có)
      let users = JSON.parse(localStorage.getItem("users")) || [];
      // Tìm user có email ok rồi
      const user = users.find((user) => user.email === email);
      if (!user) {
        alert("Sai email hoặc mật khẩu!");
        return;
      }
      // Mã hóa mật khẩu nhập vào với salt ( chuỗi ký tự ngẫu nhiên ) đã lưu
      const hashedPassword = CryptoJS.SHA256(password + user.salt).toString();

      if (hashedPassword === user.password) {
        alert("Đăng nhập thành công!");
        window.location.href = "/home/home.html"; // Chuyển đến trang chủ
      } else {
        alert("Sai email hoặc mật khẩu!");
      }
    }
  } catch (error) {
    console.error("Lỗi xử lý đăng nhập:", error);
    alert("Đã xảy ra lỗi trong quá trình đăng nhập.");
  }
});
