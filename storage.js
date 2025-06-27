document.getElementById('colorBtn').addEventListener('click', function() {
    let elapsed = 0;
    const interval = 15; // Change color every 100ms
   const duration = 800; // 3 seconds
let lastColor = '';

    const colorInterval = setInterval(() => {
        let randomColor;
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        } while (randomColor === lastColor);

        document.body.style.backgroundColor = randomColor;
        lastColor = randomColor;
        elapsed += interval;
        if (elapsed >= duration) {
            clearInterval(colorInterval);
        }
    }, interval);
});

document.getElementById('randomNumBtn').addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * 100000) + 1;
    document.getElementById("randomNumDisplay").innerHTML = randomNum;
    if (randomNum < 5402) {
        document.getElementById("randomNumDisplay").innerHTML = "Lucky AHHHHHHHHHHHHH";
        document.getElementById("randomNumDisplay").style.color = "red";
    } else if (randomNum < 8000) {
        document.getElementById("randomNumDisplay").innerHTML = "Good Job!";
        document.getElementById("randomNumDisplay").style.color = "orange";
    } else if (randomNum < 10000) {
        document.getElementById("randomNumDisplay").innerHTML = "You can do better!";
        document.getElementById("randomNumDisplay").style.color = "yellow";
    }else {
        document.getElementById("randomNumDisplay").style.color = "black";
    }
});
