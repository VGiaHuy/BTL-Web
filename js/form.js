function validateform() {
    var name = document.myform.name.value
    var email = document.myform.email.value;
    var subject = document.myform.subject.value;
    var message = document.myform.message.value;

    if (email == null || email == "" || name == null || name == "" || subject == null || subject == "" || message==null || message == "") {
        alert("Form can't be blank");
        return false;
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        alert("Email is incorrect.");
        return false;
    } else {
        alert("Sent successfully");
        return true;
    }
}