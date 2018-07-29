function handleContactSubmit(event) {
    event.preventDefault();

    fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
            name: $("#formName").val(),
            email: $("#formEmail").val(),
            message: $("#formMessage").val()
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(payload => {
            if (payload.error) {
                alert("There was an error");
            } else {
                window.location.replace('../emailSuccess');
            }
        }).catch(err => alert(err));
}

$(document).ready(() => {
    if (screen.width > 575) {
        $("#cb1Anim").css({ "opacity": 1, "left": 0 });
    }
});

let animElemsTop = [
    $("#cb2Anim"),
    $("#cb3Anim"),
    $("#cb4AnimTitle"),
    $("#cb4AnimResume")
];

let animElemsBottom = [
    [
        $("#cb4Anim1Position"),
        $("#cb4Anim1List")
    ],
    [
        $("#cb4Anim2Position"),
        $("#cb4Anim2List")
    ],
    [
        $("#cb4Anim3Position"),
        $("#cb4Anim3List")
    ],
    [
        $("#cb4Anim4Position"),
        $("#cb4Anim4List")
    ],
    [
        $("#cb4Anim5Position"),
        $("#cb4Anim5List")
    ],
    [
        $("#cb4Anim6Position"),
        $("#cb4Anim6List")
    ]
];

function isScrolledIntoView(elem, win) {
    let docViewTop = win.scrollTop();
    let docViewBottom = docViewTop + win.height();
    let elemTop = elem.offset().top;
    let elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom)) //&& (elemTop >= docViewTop));
}

$(document).on("scroll", () => {
    animElemsTop.forEach(element => {
        if (isScrolledIntoView(element, $(window)) && screen.width > 575) {
            element.css({ "opacity": 1, "left": 0, "top": 0 });
        }
    });

    animElemsBottom.forEach(element => {
        if (isScrolledIntoView(element[0], $(window)) && screen.width > 575) {
            element[0].css({ "opacity": 1, "left": 0, "top": 0 });
            element[1].css({ "opacity": 1, "left": 0, "top": 0 });
        }
    });
});
