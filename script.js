

for (i = 1; i < 16; i++) {
    document.getElementById(`randomImg${i}`).src = "https://source.unsplash.com/random/200x200/?sig="+ Math.floor(Math.random()*100);
}

