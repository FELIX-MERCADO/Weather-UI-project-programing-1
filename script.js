// Seleccionamos los botones por los nuevos IDs de los días
const Monday = document.getElementById("Monday");
const Tuesday = document.getElementById("Tuesday");
const Wednesday = document.getElementById("Wednesday");
const Thursday = document.getElementById("Thursday");
const Friday = document.getElementById("Friday");
const Saturday = document.getElementById("Saturday");
const Sunday = document.getElementById("Sunday");
const image = document.getElementById("image")



Monday.addEventListener("click", () => {
    image.src = 'weather/cloudy.avif';
});

Tuesday.addEventListener("click", () => {
    image.src = 'weather/sunny.jpg';
});

Wednesday.addEventListener("click", () => {
    image.src = 'weather/rainy.jpeg';
});

Thursday.addEventListener("click", () => {
    image.src = 'weather/hot.jpg';
});

Friday.addEventListener("click", () => {
    image.src = 'weather/windy.jpg';
});

Saturday.addEventListener("click", () => {
    image.src = 'weather/stormy.webp';
});

Sunday.addEventListener("click", () => {
    image.src = 'weather/perfect.jpg';
});