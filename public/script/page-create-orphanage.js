//create map
const map = L.map('mapid').setView([-27.592594, -48.538534], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],

})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lat;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;
    console.log(event.currentTarget)
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2) {
        //limpar o campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//seleção sim ou não
function toggleSelect(event) {
    //retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    //verificar se sim ou não
    input.value = button.dataset.value

}