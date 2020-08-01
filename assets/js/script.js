
function bookTable() {
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let comment = document.getElementById("message").value;

  if (name == "" || phone_number == "" || date == "" || time == "") {
    alert("Please fill the required");
    return false;
  }
  else{
    var message = `Name: ${name}\nContact: ${phone_number}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nMessage: ${comment}`;
    message = encodeURI(message);
    var query = `https://wa.me/917034700133?text=${message}`;
    window.location.replace(query);
  }
}
