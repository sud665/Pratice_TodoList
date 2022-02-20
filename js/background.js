const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];

const randomNum = Math.floor(Math.random() * images.length)

const chosenImage = images[randomNum]

const bgImage = document.createElement("img")


bgImage.src =`img/${chosenImage}`

document.body.appendChild(bgImage)

// document.body.prepend(bgImage)