const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content"); // this class is css
content.textContent = "This is the glorious text-content!"; 
content.setAttribute("style", "color: blue; background: white;") // css

container.appendChild(content);


const contentp = document.createElement("p");
contentp.classList.add("para");
contentp.textContent = "Hey i'm red!";
contentp.setAttribute("style", "color: red;");

container.appendChild(contentp);

const contenth = document.createElement("h3");
contenth.classList.add("med");
contenth.textContent = "I'm blue h3!";
contenth.setAttribute("style", "color: blue;");

container.appendChild(contenth);
