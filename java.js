var holder;
var amount = 0;

window.onload = function() {
    holder = document.querySelector("div.stack-holder");
}

function stackBtn() {
    amount++;
    //updating height
    update();
    //creating stuff lmao
    createButton()
}

function update() {
    if(amount > 0) {
        holder.style.height = (amount * 30 + 10) + "px";
    } else {
        holder.style.height = "0px";
    }
    return;
}

function createButton() {
    //Booleans
    var btnHovering = false;

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
    itemBtn.style.fontSize = "large";
    itemBtn.innerText = "Item: " + amount;

    itemBtn.onmouseenter = function() {
        itemBtn.innerHTML = itemBtn.innerHTML.strike();
        btnHovering = true;
    }

    itemBtn.onmouseleave = function() { 
        itemBtn.innerHTML = itemBtn.innerText;
        btnHovering = false;
    }

    itemBtn.onclick = function() {
        if(btnHovering == true) {
            itemBtn.remove();
            amount--;
            update();
        }
    }

    holder.appendChild(itemBtn);
    return;
}