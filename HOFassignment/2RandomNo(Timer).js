let delay = 3000; // in milliseconds

// Delay implementation
setTimeout(function() {

    // Countdown display
    let countdown = setInterval(function() {
        console.log("Generating random number in " + (delay / 1000) + " seconds...");
        delay -= 1000;
        if (delay === 0) {
            clearInterval(countdown);
            
            // Random number generation
            let random_number = Math.floor(Math.random() * 100);
            
            // Output the generated number
            console.log("Random number generated: " + random_number);
        }
    }, 1000);
    
}, delay);