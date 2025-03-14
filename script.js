function handleSubmit(event) {  
    event.preventDefault();  

    const name = document.getElementById("name").value;  
    const email = document.getElementById("email").value;  
    const message = document.getElementById("message").value;  

     
    const confirmationMessage = document.getElementById("confirmation-message");  
    confirmationMessage.textContent = `Thank you, ${name}. Your message has been sent!`;  
    confirmationMessage.style.display = "block";  

    
    document.getElementById("contact-form").reset();  
}  