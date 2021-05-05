// let uploadImageButton = document.querySelector(".uploadImageButton")
// let uploadImageInput = document.querySelector(".uploadImageInput")

// uploadImageButton.addEventListener('click', () => {
//     uploadImageInput.click();
// })

let brightnessSlider = document.querySelector(".brightness")
let contrastSlider = document.querySelector(".contrast")
let saturationSlider = document.querySelector(".saturation")
let invertSlider = document.querySelector(".invert")
let addText = document.querySelector(".addText")

class ImageFilters{
    constructor(img) {
        this.img = img;
    }

    brightness(value){
        this.img.style.filter = `brightness(${value}%)`
    }

    contrast(value){
        this.img.style.filter = `contrast(${value}%)`
    }

    saturation(value){
        this.img.style.filter = `saturate(${value}%)`
    }

    invert(value){
        this.img.style.filter = `invert(${value}%)`
    }
}

let image = document.querySelector(".thumbnail")
let imageClass = new ImageFilters(image)

brightnessSlider.oninput = () => {
    imageClass.brightness(brightnessSlider.value)
}

contrastSlider.oninput = () => {
    imageClass.contrast(contrastSlider.value)
}

saturationSlider.oninput = () => {
    imageClass.saturation(saturationSlider.value)
}

invertSlider.oninput = () => {
    imageClass.invert(invertSlider.value)
}

function laodAllDefaultsOnLoad() {
    imageClass.brightness(brightnessSlider.value)
    imageClass.contrast(contrastSlider.value)
    imageClass.saturation(saturationSlider.value)
    imageClass.invert(invertSlider.value)
}

document.querySelector(".reset").addEventListener("click", () => {
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    saturationSlider.value = 100;
    invertSlider.value = 1;
    laodAllDefaultsOnLoad()
})
