
document.addEventListener("DOMContentLoaded", main)
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg" }
 ];

 function displayRamens(){
    const imgDiv = document.getElementById("ramen-list")
    imgDiv.innerHTML = ""
    ramens.forEach(ramen => addRamenToMenu(ramen) )
 }
 function addRamenToMenu(ramen){
    const imgDiv = document.getElementById("ramen-list")
    const img = document.createElement("img")
    img.src = ramen.image
    img.alt = ramen.name
    img.dataset.id = ramen.id
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.padding = "5px"
    img.style.borderRadius = "10px"
    img.addEventListener("click", () => handleClicker(ramen));
    imgDiv.appendChild(img)
 }

function handleClicker(ramen){
    const details = document.getElementById("menu-details");
    details.innerHTML = ""
    const img = document.createElement ("img")
    img.src = ramen.image
    img.alt = ramen.name
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.padding="5px"
    img.style.borderRadius ="10px"
    img.addEventListener("click", () => handleClicker(ramen));

    const name = document.createElement("h2");
    name.textContent = ramen.name
    const restaurant = document.createElement('h3')
    restaurant.textContent = ramen.restaurant;
    const rating = document.createElement("h4")
    rating.textContent = ramen.rating;
    const comment = document.createElement('h5')
    comment.textContent = ramen.comment;
    details.appendChild(img)
    details.appendChild(name)
    details.appendChild(restaurant)
    details.appendChild(rating)
    details.appendChild(comment)
    

}

function addSubmitListener(){
    const form = document.getElementById("ramen-form");
    form.addEventListener('submit', handleFormSubmision)
}
 function handleFormSubmision(event){
    event.preventDefault();
    const name = document.getElementById('Ramen-name').value
    const restaurant = document.getElementById('restuarant-name').value
    const image = document.getElementById('ramen-image').value
    const rating = document.getElementById('ramen-rating').value
    const comment = document.getElementById('ramen-comment').value

    if (name && restaurant && image && rating && comment){
        addingRamenToMenu (name, restaurant, image, rating, comment)
        event.target.reset()
    };
}
function addingRamenToMenu(name, restaurant, image, rating, comment){
    const newMenu = {
        name : name,
        restaurant : restaurant,
        image : image,
        rating : rating,
        comment : comment,
    }
    ramens.push(newMenu);1
    addRamenToMenu(newMenu);
    handleClicker(newMenu)
}
 
 
function main() {
    displayRamens();
    addSubmitListener(); 
    if (ramens.length > 0) {
        handleClicker(ramens[0]);
    }
}

