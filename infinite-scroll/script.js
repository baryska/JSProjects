console.log('funguju')
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

//DRY pro atributy
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

//Z dokumentace Unsplash API
const count = 10;
const apiKey = 'vGe--UdSmigzT-zcPm4YPnoqthAdXpEJwfK3NP_Eb-c'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  //pro každou fotku
  photosArray.forEach((photo) => {
    const item = document.createElement('a')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description)
    // img.setAttribute('title', photo.alt_description)
    item.appendChild(img);
    imageContainer.appendChild(item);
  });

}

//Foto z Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()

  } catch (error) {

  }
}

getPhotos()