var holder;
var amount = 0;

window.onload = function() {
    holder = document.querySelector("div.stack-holder");
}

function stackBtn() {
    amount++;

    holder.style.height = (amount * 30 + 10) + "px";
    var itemBtn = document.createElement("button");
    itemBtn.style.position = "relative";
    itemBtn.style.top = "1.5px"
    itemBtn.style.width = "230px";
    itemBtn.style.height = "25px";
    itemBtn.style.backgroundColor = "#808080";
    itemBtn.style.outline = "0px";
    itemBtn.style.borderWidth = "0px";
    itemBtn.style.marginTop = "5px";
    itemBtn.style.marginLeft = "10px";
    itemBtn.style.borderRadius = "5px";
    itemBtn.innerText = "Item: " + amount;

    holder.appendChild(itemBtn);
}