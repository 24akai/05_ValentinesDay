const arrayOfWishes = [
    "May your dreams come true always.",
    "Stay strong and never give up.",
    "Live with passion and purpose daily.",
    "Embrace every challenge with courage.",
    "May happiness fill your every day.",
    "Keep following your heart’s desire.",
    "May success find you everywhere you go.",
    "Never stop believing in yourself.",
    "Chase your dreams with all your heart.",
    "Stay true to yourself always.",
    "Wishing you peace and endless joy.",
    "May life bring you endless opportunities.",
    "Keep shining brightly in everything you do.",
    "Let the day bring you joy and warmth."
]

document.getElementById('btn_love_wishes').addEventListener('click', function(){
    let index = Math.floor(Math.random() * arrayOfWishes.length)
    document.getElementById('love-wishes').innerText = arrayOfWishes[index]
})