const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMessage");

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    function showError(input, message) {
        const formGroup = input.closest(".form-group");

        const errorElement =
            formGroup.querySelector(".form-error");

        formGroup.classList.add("has-error");

        errorElement.textContent = message;
    }


    function clearError(input) {
        const formGroup = input.closest(".form-group");

        const errorElement =
            formGroup.querySelector(".form-error");

        formGroup.classList.remove("has-error");

        errorElement.textContent = "";
    }


    function validateName() {
        const name = nameInput.value.trim();

        if (name === "") {
            showError(
                nameInput,
                "Please enter your name."
            );

            return false;
        }

        if (name.length < 2) {
            showError(
                nameInput,
                "Name must contain at least 2 characters."
            );

            return false;
        }

        clearError(nameInput);

        return true;
    }


    function validateEmail() {
        const email = emailInput.value.trim();

        if (email === "") {
            showError(
                emailInput,
                "Please enter your email address."
            );

            return false;
        }

        if (!emailPattern.test(email)) {
            showError(
                emailInput,
                "Please enter a valid email address."
            );

            return false;
        }

        clearError(emailInput);

        return true;
    }


    function validateSubject() {
        const subject = subjectInput.value.trim();

        if (subject === "") {
            showError(
                subjectInput,
                "Please enter a subject."
            );

            return false;
        }

        if (subject.length < 3) {
            showError(
                subjectInput,
                "Subject must contain at least 3 characters."
            );

            return false;
        }

        clearError(subjectInput);

        return true;
    }


    function validateMessage() {
        const message = messageInput.value.trim();

        if (message === "") {
            showError(
                messageInput,
                "Please enter your message."
            );

            return false;
        }

        if (message.length < 10) {
            showError(
                messageInput,
                "Message must contain at least 10 characters."
            );

            return false;
        }

        clearError(messageInput);

        return true;
    }


    nameInput.addEventListener(
        "input",
        validateName
    );


    emailInput.addEventListener(
        "input",
        validateEmail
    );


    subjectInput.addEventListener(
        "input",
        validateSubject
    );


    messageInput.addEventListener(
        "input",
        validateMessage
    );


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const isNameValid =
                validateName();

            const isEmailValid =
                validateEmail();

            const isSubjectValid =
                validateSubject();

            const isMessageValid =
                validateMessage();


            if (
                isNameValid &&
                isEmailValid &&
                isSubjectValid &&
                isMessageValid
            ) {

                formStatus.textContent =
                    "Message validated successfully.";

                formStatus.classList.remove(
                    "error"
                );

                formStatus.classList.add(
                    "success"
                );


                contactForm.reset();


                setTimeout(function () {
                    formStatus.textContent = "";

                    formStatus.classList.remove(
                        "success"
                    );
                }, 4000);

            } else {

                formStatus.textContent =
                    "Please correct the highlighted fields.";

                formStatus.classList.remove(
                    "success"
                );

                formStatus.classList.add(
                    "error"
                );
            }

        }
    );
}