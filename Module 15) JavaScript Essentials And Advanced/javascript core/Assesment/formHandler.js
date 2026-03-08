class CustomerFormHandler {

constructor() {
this.form = document.getElementById("guestForm");
this.messageBox = document.getElementById("messageBox");

this.form.addEventListener("submit", (e) => this.handleSubmit(e));

this.form.addEventListener("blur", (e) => {
if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
this.validateField(e.target);
}
}, true);

}

handleSubmit(e) {
e.preventDefault();

if (this.validateForm()) {

let data = this.getFormData();

this.saveToLocalStorage(data);

this.showMessage("Guest Registered Successfully", "success");

this.clearForm();

}
}

getFormData() {

return {
name: document.getElementById("name").value.trim(),
phone: document.getElementById("phone").value.trim(),
email: document.getElementById("email").value.trim(),
address: document.getElementById("address").value.trim(),
aadhar: document.getElementById("aadhar").value.trim(),
checkin: document.getElementById("checkin").value,
checkout: document.getElementById("checkout").value,
adults: document.getElementById("adults").value,
purpose: document.getElementById("purpose").value.trim()
};

}

validateForm() {

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let email = document.getElementById("email").value.trim();
let address = document.getElementById("address").value.trim();
let aadhar = document.getElementById("aadhar").value.trim();
let checkin = document.getElementById("checkin").value;
let checkout = document.getElementById("checkout").value;
let adults = document.getElementById("adults").value;
let purpose = document.getElementById("purpose").value.trim();

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (name.length < 3) {
this.showMessage("Name must be at least 3 characters", "danger");
return false;
}

if (!/^\d{10}$/.test(phone)) {
this.showMessage("Phone must be exactly 10 digits", "danger");
return false;
}

if (!emailRegex.test(email)) {
this.showMessage("Invalid Email", "danger");
return false;
}

if (address === "") {
this.showMessage("Address required", "danger");
return false;
}

if (!/^\d{12}$/.test(aadhar)) {
this.showMessage("Aadhar must be 12 digits", "danger");
return false;
}

let today = new Date().toISOString().split("T")[0];

if (checkin < today || checkout < today) {
this.showMessage("Dates must be future", "danger");
return false;
}

if (adults <= 0) {
this.showMessage("Adult number invalid", "danger");
return false;
}

if (purpose === "") {
this.showMessage("Purpose required", "danger");
return false;
}

return true;

}

saveToLocalStorage(data) {

let guests = JSON.parse(localStorage.getItem("guests")) || [];

guests.push(data);

localStorage.setItem("guests", JSON.stringify(guests));

}

clearForm() {
this.form.reset();
}

showMessage(msg, type) {

this.messageBox.innerHTML =
`<div class="alert alert-${type}">${msg}</div>`;

setTimeout(() => {
this.messageBox.innerHTML = "";
}, 3000);

}

}

new CustomerFormHandler();