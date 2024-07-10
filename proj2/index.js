const input = document.getElementById('plndrme');

function reverseStr (str) {
    return str.split('').reverse().join('');
}

function check() {
    const value = input.value;

    const reverse = reverseStr(value);

    if(reverse === value) {
        alert('Palindrome!')
    } else {
        alert('NO')
    }

    input.value = ''
}