function calculateSalary() {
    let days = document.getElementById("days").value;
    let result = document.getElementById("result");

    if (days === "" || days < 0 || days > 30) {
        result.innerHTML = "Please enter valid days (0–30).";
        result.style.color = "red";
        return;
    }

    let salary = days * 500;
    message = "";

    if (days > 25) {
        salary += 1000;
        message = "Excellent Attendance! Bonus added 🎉"
    } else if (days >= 15 && days <= 25) {
        message = "Good work! Keep it up 👍"
    } else {
        message = "Low attendance! Warning ⚠️"
    }

    result.innerHTML = `
    Total Present Days: <b>${days}</b><br>
    Final Salary:  <b>₹${salary}</b><br>
    ${message}`;
    result.style.color = "green";
}