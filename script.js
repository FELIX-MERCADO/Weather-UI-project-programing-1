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



const tome = document.getElementById("tome");


const today = new Date();

const year = today.getFullYear();
const day = today.getDate();
const month = today.getMonth();
let mont = "january";

if (month === 0) {
    mont = "January";
} else if (month === 1) {
    mont = "February";
} else if (month === 2) {
    mont = "March";
} else if (month === 3) {
    mont = "April";
} else if (month === 4) {
    mont = "May";
} else if (month === 5) {
    mont = "June";
} else if (month === 6) {
    mont = "July";
} else if (month === 7) {
    mont = "August";
} else if (month === 8) {
    mont = "September";
} else if (month === 9) {
    mont = "October";
} else if (month === 10) {
    mont = "November";
} else if (month === 11) {
    mont = "December";
}

tome.innerHTML = mont + " " + day + " " + year;
