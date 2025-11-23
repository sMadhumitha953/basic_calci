let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        let value = e.target.textContent.trim();  // SAFEST

        if (value === '=') {
            string = eval(string);
            input.value = string;
        }

        else if (value === 'AC') {
            string = "";
            input.value = string;
        }

        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }
    });
});
