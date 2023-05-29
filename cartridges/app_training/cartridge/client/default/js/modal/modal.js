"use strict";

const modalShow = () => {
    $(document).on("click", ".mymodal-button", function() {
        $(".my-exercise-modal").modal("hide");
    });

    $(".mymodal-tutorial").click(function() {
        $.ajax({
            url: $(".mymodal-tutorial").attr("data-modal-url"),
            data: { 
                data: $("#textarea").val() 
            },
            method: "GET",
            success: function(data) {
                var $html = $(`<div class="modal fade my-exercise-modal" id="myModal" role="dialog">${data}</div>`);
                $html.modal();
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
};

module.exports = () => {
    modalShow();
};
