var dom_button = document.getElementById("button_password");
var dom_input = document.getElementById("input_password");
var dom_button_copy = document.getElementById("dom_button_copy");

const generate_password = () => {
  let carters = "abcdefghijklmnopqrstuvwxyz1234567890!(){}[]";
  let password_length = 16;
  let password = "";
  for (let index = 0; index < password_length; index++) {
    let random_number = Math.floor(Math.random() * carters.length);
    password += carters.substring(random_number, random_number + 1);
  }
  dom_input.value = password;
};

const copy_password = () => {
  dom_input.select();
  dom_input.setSelectionRange(0, 9999);
  document.execCommand("copy");
};

dom_button.addEventListener("click", (e) => {
  e.preventDefault();
  generate_password();
});

dom_button_copy.addEventListener("click", (e) => {
  e.preventDefault();
  copy_password();
});
