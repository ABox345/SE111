var foodImage = document.getElementById("food")

var foodButton = document.getElementById("foodButton")

function changeImage(){
    console.log(foodImage.src)
    foodImage.src = "Bread.webp"
}

foodButton.addEventListener('click',changeImage) 
