const form = document.querySelector("#form");
const statusMessage = document.querySelector("#status");
const fromName = document.querySelector("#name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(message.value);
    if (fromName.value && subject.value && message.value && email.value) {
        sendEmail(fromName.value, subject.value, email.value, message.value);
        fromName.value = "";
        subject.value = "";
        email.value = "";
        message.value = "";
    }
});

emailjs.init({
    publicKey: "sZKwvZMizJk7yk5LL",
    blockHeadless: true,
    limitRate: {
        id: "app",
        throttle: 10000,
    },
});

function sendEmail(fromName, subject, email, message) {
    const templateParams = {
        name: fromName,
        subject: subject,
        email: email,
        message: message,
    };

    emailjs.send("service_p5okwbb", "template_o3hphch", templateParams).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            statusMessage.style.display = "block";
            statusMessage.innerHTML = `<p>SUCCESS!, ${response.text}</p>`;
        },
        (error) => {
            console.log("FAILED...", error);
            statusMessage.style.display = "block";
            statusMessage.innerHTML = `<p>FAILED..., ${error}</p>`;
        }
    );
}