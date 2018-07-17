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

let animElems = [$("#cb2Anim"), $("#cb3Anim")];

function isScrolledIntoView(elem, win) {
    let docViewTop = win.scrollTop();
    let docViewBottom = docViewTop + win.height();
    let elemTop = elem.offset().top;
    let elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", () => {
    animElems.forEach(element => {
        if (isScrolledIntoView(element, $(window)) && screen.width > 575) {
            element.css({ "opacity": 1, "left": 0 });
        }
    });
});
