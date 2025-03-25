const paragraphs = document.getElementsByTagName("p");
const myButton = document.querySelector("button");
const paragraphsArray = Array.from(paragraphs);
myButton.addEventListener("click", () => {
    for(let i = 0; i < paragraphsArray.length; i++) {
        const bufData = paragraphsArray[i].innerText;
        paragraphsArray[i].innerText = bufData + " " + (i+1);
    }
})