const codeInput = document.getElementById('code-input');
const runButton = document.getElementById('run-button');
const preview = document.getElementById('preview');

runButton.addEventListener('click', () => {
    const code = codeInput.value;
    preview.srcdoc = code;
});