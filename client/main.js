const kittenContainer = document.querySelector('#kitten-container')
const form = document.querySelector('form')

const baseURL = 'http/localhost:4004/api/kitten'

const kittenCallback = ({data: kittens}) => displayKittens(kittens)
const errCallback = err => console.log(err.response.data)

const seeMyKittens = () => axios.get(baseURL).then(kittenCallback).catch(errCallback)
const breedKitten = body => axios.post(baseURL, body).then(kittenCallback).catch(errCallback)
const abandonKitten = id => axios.delete(`${baseURL}/${id}`).then(kittenCallback).catch(errCallback)
const renameKitten = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(kittenCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let cuddleability = document.querySelector('input[name="name"]:checked')
    let gender = document.querySelector('input[name="gender"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        gender: gender.value,
        cuddleability: cuddleability.value,
        breed: breed.value,
        imageURL: imageURL.value
    }

    designKitten(bodyObj)
    name.value = ''
    gender.checked = false
    cuddleability.checked = false
    breed.value = ''
    imageURL.value = ''

}

function createKittenCard(kitten) {
    const kittenCard = document.createElement('div')
    kittenCard.classList.add('kitten-card')

    kittenCard.innerHTML = `<img alt='kitten image' src=${kitten.imageURL} class="kitten-image"/>
    <p class="kitten-name">${kitten.name}</p>`
    kittenContainer.appendChild(kittenCard)
}

function seeMyKittens(arr) {
    kittenContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        designKitten(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

seeMyKittens()