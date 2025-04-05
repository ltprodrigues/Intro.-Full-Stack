//Step 1: create a function to create variables
function Img(title, src, content) {
    this.title = title;
    this.src = src;
    this.content = content;
}
//Step 2: makeMarkUp => return section
Img.prototype.makeMarkup = function () {
    return `<div><img src="${this.src}" title="${this.title}" content="${this.content}"></div>`;
}
//Step 3: makeElement
Img.prototype.makeElement = function () {
    let ImgDiv = document.createElement("div");
    ImgDiv.innerHTML = this.makeMarkup();
    return ImgDiv;

}
//Step 4:  load the section by addEventListener
document.addEventListener("DOMContentLoaded", function(){
    const bodyElement = document.querySelector("body");
    const i1 = new Img("", "https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-front-view-cat-on-white-background-png-image_9158426.png", "");
    bodyElement.appendChild(i1.makeElement());
})