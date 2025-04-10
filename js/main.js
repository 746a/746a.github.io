let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let currentWindow = null;

function startDrag(event, windowId) {
    isDragging = true;
    currentWindow = document.getElementById(windowId);
    offsetX = event.clientX - currentWindow.getBoundingClientRect().left;
    offsetY = event.clientY - currentWindow.getBoundingClientRect().top;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(event) {
    if (isDragging) {
        currentWindow.style.left = event.clientX - offsetX + 'px';
        currentWindow.style.top = event.clientY - offsetY + 'px';
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}


function openWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.style.display = 'block'; // Hide the window
    }
}

function closeWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.style.display = 'none'; // Hide the window
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const updateClock = () => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${dateString} ${timeString}`;
        }
    };

    // Update the clock initially
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
});

// Calculator Logic
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-window');
    let currentInput = ''; // Tracks the current input
    let equation = ''; // Tracks the full equation
    let lastResult = ''; // Stores the last result
    let lastEquation = ''; // Stores the last equation for repeat

    // Function to update the display
    function updateDisplay(value) {
        display.textContent = value;
    }

    // Function to handle button click
    function handleButtonClick(e) {
        const value = e.target.getAttribute('data-value');

        // Handle clear (C) button
        if (value === 'C') {
            currentInput = '';
            equation = '';
            lastResult = '';
            lastEquation = '';
            updateDisplay('0');
            return;
        }

        // Handle backspace (E) button
        if (value === 'E') {
            currentInput = currentInput.slice(0, -1);
            equation = equation.slice(0, -1);
            updateDisplay(currentInput || '0');
            return;
        }

        // Handle equals (=) button
        if (value === '=') {
            // If there is no equation, repeat the last one
            if (!equation && lastEquation) {
                equation = lastResult + lastEquation;
            }
            try {
                const result = eval(equation); // Perform the calculation
                updateDisplay(result);
                lastResult = result.toString(); // Store the result
                lastEquation = equation.slice(lastResult.length); // Store the equation part for repeat
                currentInput = ''; // Reset current input
                equation = ''; // Clear the equation
            } catch (err) {
                updateDisplay('Error');
                currentInput = '';
                equation = '';
            }
            return;
        }

        // Handle numeric and operator buttons
        if (value.match(/[0-9\+\-\*\/\.]/)) {
            currentInput += value;
            equation += value;
            updateDisplay(currentInput);
        }
    }

    // Attach event listeners to all calculator buttons
    const buttons = document.querySelectorAll('.calc-btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
