let nameGuest = document.getElementById('nameGuest')

let getPresent = document.getElementById('getPresent'),
    closeGetPresent = document.getElementById('closeGetPresent');

closeGetPresent.onclick = function () {
        getPresent.style.display = 'none';
}


let giftButton = document.getElementById('giftButton');

giftButton.onclick = function () {

    getPresent.style.display = 'block';


}

