function validateForm() {
            let msgArray = [];
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const info = document.getElementById("info").value;
            const days = document.querySelectorAll('input[type="checkbox"]:checked').length;

            if (!name) {
                const nameMsg = "Need's valid name. ";
                msgArray.push(nameMsg);
            }

            if (!email) {
                const emailMsg = "Need's valid email. ";
                msgArray.push(emailMsg);
            }

            if (!phone || phone == isNaN) {
                const phoneMsg = "Need's valid phone. ";
                msgArray.push(phoneMsg);
            }

            if (!info) {
                const infoMsg = "Need's valid additional information. ";
                msgArray.push(infoMsg);
            }

            if (!days) {
                const daysMsg = "Enter best days to contact you. ";
                msgArray.push(daysMsg);
            }

            if (name && email && phone && info && days) {
                const validMsg = "Information is valid."
                msgArray.push(validMsg);
            }
            alert(msgArray.join(" "));
        }
