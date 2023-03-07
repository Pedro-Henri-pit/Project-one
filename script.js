function validateForm() {
    const email = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
    } else if (!passwordRegex.test(password)) {
      alert("Invalid password. Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.");
    } else {
      location.href = "login-erro.html";
      alert("Form submitted successfully.");
      
    }
  }

  const togglePassword = document.querySelector("#togglePassword");
  const password = document.getElementById("pass");

  togglePassword.addEventListener("click", function (e) {
      // toggle the type attribute
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
     
  });

  const visibilityIcon = document.getElementById("togglePassword");
let isVisibilityOn = false;

visibilityIcon.addEventListener("click", function() {
  if (isVisibilityOn) {
    visibilityIcon.textContent = "visibility_off";
    isVisibilityOn = false;
  } else {
    visibilityIcon.textContent = "visibility";
    isVisibilityOn = true;
  }
});
