const popupLinks = document.querySelectorAll('.popup');

let unlock = true;

if (popupLinks > 0) {
    for(let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPupup = document.getElementById(popupName);
            popupOpen(currentPupup);
            e.preventDefault();
        });
    }
}
