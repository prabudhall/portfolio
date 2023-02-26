function handle(){
  document.querySelector(".subbtn button").innerHTML = "Submitting";
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var params = {
    name: name,
    subject: subject,
    message: message
  };
  if(!name || !subject || !message){
    document.querySelector(".subbtn button").innerHTML = "Submit";
    alert("Fields cannot be empty");
    return;
  }
  // alert("Submitting the data");

  emailjs.send("service_pmjxrkr", "template_q0jd92p", params)
    .then(function(response) {
      document.getElementById("name").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      document.querySelector(".subbtn button").innerHTML = "Submit";
      console.log('SUCCESS!', response.status, response.text);
      console.log(params);
      alert("Message sent successfully");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Error in sending message");
    });
};
