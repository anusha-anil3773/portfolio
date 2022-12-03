function sendEmail(){
    Email.send({
        SecureToken:"d96ed5f9-c787-4661-89ec-1a4529ad2e5b ",
        To : 'anushaanil441@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form enquiry",
        Body : "Name:" +document.getElementById("name").value
        +"<br>Email:"+document.getElementById("email").value
        +"<br> Subject:" +document.getElementById("subject").value
        +"<br> Message:" +document.getElementById("message").value
    }).then(
      message => alert("Messag Sent Successfully")
    );
}