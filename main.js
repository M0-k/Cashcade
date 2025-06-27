
function spinCounter(counterId, min, max, suffix = '') {
    const counter = document.getElementById(counterId);
    let elapsed = 0;
    const interval = 40;
    const duration = 1200;
    let spinInterval = setInterval(() => {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        counter.textContent = formatValue(value, suffix);
        elapsed += interval;
        if (elapsed >= duration) {
            clearInterval(spinInterval);
            counter.textContent = formatValue(
                Math.floor(Math.random() * (max - min + 1)) + min,
                suffix
            );
        }
    }, interval);
}

function formatValue(value, suffix) {
    if (suffix === 'B$') {
        return (value / 1000000000).toFixed(2) + 'B$';
    }
    if (suffix === 'k') {
        return Math.floor(value / 1000) + 'k';
    }
    return value + suffix;
}


    spinCounter('jackpotCounter', 1000000000, 1310000000, 'B$');
    spinCounter('luckyCounter', 87, 96, '%');
    spinCounter('quickCounter', 10000, 50000, 'k');
    var delayInMilliseconds = 1100; 

setTimeout(function() {
  spinCounter('jackpotCounter', 1310000000, 1310000000, 'B$');
    spinCounter('luckyCounter', 96, 96, '%');
    spinCounter('quickCounter', 50000, 50000, 'k');
}, delayInMilliseconds);