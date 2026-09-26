// =========================================================
// CONTACT FORM VALIDATION
// =========================================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const formStatus = document.getElementById("formStatus");

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMessage");

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    function showError(input, message) {

        if (!input) {
            return;
        }

        const formGroup =
            input.closest(".form-group");

        if (!formGroup) {
            return;
        }

        const errorElement =
            formGroup.querySelector(".form-error");


        formGroup.classList.add("has-error");


        if (errorElement) {
            errorElement.textContent = message;
        }

    }


    function clearError(input) {

        if (!input) {
            return;
        }

        const formGroup =
            input.closest(".form-group");

        if (!formGroup) {
            return;
        }

        const errorElement =
            formGroup.querySelector(".form-error");


        formGroup.classList.remove("has-error");


        if (errorElement) {
            errorElement.textContent = "";
        }

    }


    function validateName() {

        const name =
            nameInput.value.trim();


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

        const email =
            emailInput.value.trim();


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

        const subject =
            subjectInput.value.trim();


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

        const message =
            messageInput.value.trim();


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


    // Real-time validation

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


    // Form submission

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


            const formIsValid =
                isNameValid &&
                isEmailValid &&
                isSubjectValid &&
                isMessageValid;


            if (formIsValid) {

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



// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navLinks.classList.toggle(
                    "open"
                );


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }
    );


    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );

    });


    // Close mobile menu when screen becomes desktop-size

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 720) {

                navLinks.classList.remove(
                    "open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );

}