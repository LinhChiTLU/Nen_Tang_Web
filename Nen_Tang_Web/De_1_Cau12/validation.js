$().ready(function () {
    $.validator.addMethod("chuKhongDau", function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Please enter letters and spaces only.");

    $.validator.addMethod("phoneVN", function (value, element) {
        return this.optional(element) || /^0\d{9}$/.test(value);
    }, "Phone number must start with 0 and be exactly 10 digits.");

    $("#addEmployeeModal form").validate({
        onfocusout: function (element) {
            this.element(element);
        },
        rules: {
            name: {
                required: true,
                chuKhongDau: true,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true,
                maxlength: 100
            },
            phone: {
                required: true,
                phoneVN: true
            }
        },
        // messages: {
        //     name: {
        //         required: "Please enter employee name",
        //         chuKhongDau: "Name must not contain numbers or special characters.",
        //         maxlength: "Name must be less than 30 characters."
        //     },
        //     email: {
        //         required: "Please enter employee email",
        //         email: "Please enter a valid email address"
        //     },
        //     address: {
        //         required: "Please enter address",
        //         maxlength: "Address must be less than 100 characters."
        //     },
        //     phone: {
        //         required: "Please enter phone number",
        //         phoneVN: "Phone number must start with 0 and have exactly 10 digits"
        //     }
        // }
    });
});
