const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content"); // this class is css
content.textContent = "This is the glorious text-content!"; 
content.setAttribute("style", "color: blue; background: white;"); // css
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

const contentd = document.createElement("div");
contentd.classList.add("cont");
contentd.setAttribute("style", "border-style: solid; background: pink; padding: 10px;");

const divd = document.createElement("h1");
divd.textContent = "Im in a div";
contentd.appendChild(divd);

const divs = document.createElement("p");
divs.textContent = "ME TOO!";
contentd.appendChild(divs);

container.appendChild(contentd);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello world");

const btns = document.querySelector("#btns");
btns.addEventListener("click", () => {
  alert("Hello world");
});

const bt = document.querySelector("#btne");
bt.addEventListener("click", function(e) {
  e.target.style.background = "blue"; // alert function to addEventListener as an argument, this is callback
}); 
