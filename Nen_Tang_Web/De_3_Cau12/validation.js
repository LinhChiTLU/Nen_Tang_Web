$().ready(function () {
    $.validator.addMethod("Chữ", function (value, element) {
        return this.optional(element) || /^[a-zA-ZÀ-ỹ\s]+$/.test(value);
    }, "Vui lòng chỉ nhập chữ cái và khoảng trắng.");

    $.validator.addMethod("Số", function (value, element) {
        return this.optional(element) || /^[0-9]+$/.test(value);
    }, "Vui lòng chỉ nhập số dương.");

    $("#transactionForm").validate({
        onfocusout: function (element) {
            this.element(element);
        },
        rules: {
            "ten": {
                required: true,
                Chữ: true,
                maxlength: 30
            },
            "hoDem": {
                required: true,
                Chữ: true,
                maxlength: 30
            },
            "diaChi": {
                required: true,
                maxlength: 100
            }
        },
        messages: {
            "ten": {
                required: "Vui lòng nhập tên",
                Chữ: "Vui lòng chỉ nhập chữ cái và khoảng trắng.",
                maxlength: "Tên không được vượt quá 30 ký tự."
            },
            "hoDem": {
                required: "Vui lòng nhập họ đệm",
                Chữ: "Vui lòng chỉ nhập chữ cái và khoảng trắng.",
                maxlength: "Họ đệm không được vượt quá 30 ký tự."
            },
            "diaChi": {
                required: "Vui lòng nhập địa chỉ",
                maxlength: "Địa chỉ không được vượt quá 100 ký tự."
            }
        }
    });
});
