import { BrowserAI } from '@browserai/browserai';

let browserAI;

async function initializeBrowserAI() {
    if (!browserAI) {
        browserAI = new BrowserAI();
        await browserAI.loadModel('llama-3.2-1b-instruct');
    }
}

async function generateText(prompt) {
    await initializeBrowserAI();
    const response = await browserAI.generateText(prompt);
    return response;
}

function LLMresponse() {
    const userInput = document.getElementById('userInput');
    const outputDiv = document.getElementById('output');
    let inputStr = userInput.value.trim();
    if( inputStr == "") return;
    // Example usage
    generateText(userInput.value).then(response => {
        outputDiv.textContent = `User:${inputStr} \r\nResponse: ${response}`;
        userInput.value="";
    });

}
window.LLMresponse = LLMresponse;