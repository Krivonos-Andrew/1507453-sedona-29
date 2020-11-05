const searshLink = document.querySelector(".searsh_link");
const Popup = document.querySelector(".hotels");
const loginClose = Popup.querySelector(".modal-close");
const Form = Popup.querySelector(".form");
const dateArrival = Popup.querySelector(".arrival");
const dateDeparture = Popup.querySelector(".departure");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("arrival");
    storage = localStorage.getItem("departure");
} catch (err) {
    isStorageSupport = false;
}

searshLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup.classList.add("popup_open");

    if (storage) {
        dateArrival.value = storage;
        dateDeparture.focus();
    } else {
        dateArrival.focus();
    }
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
});

Form.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value) {
        evt.preventDefault();
        Popup.classList.remove("modal-error");
        Popup.offsetWidth = Popup.offsetWidth;
        Popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("arrival", dateArrival.value);
            localStorage.setItem("departure", dateDeparture.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (Popup.classList.contains("popup_open")) {
            evt.preventDefault();
            Popup.classList.remove("popup_open");
            Popup.classList.remove("modal-error");
        }
    }
});
