const projectName = "neeks"

let headTop;
let nameText;


window.onload = function() {
    headTop = document.querySelector('div.head-top');
    nameText = document.querySelector('label.front-page-text-name');
    
    nameText.innerHTML = projectName;
    
}

window.onscroll = function(e) {
    if(scrollY >= 1000) {
        headTop.style.opacity = "100%";
    } else if (scrollY < 1000) {
        headTop.style.opacity = "0%";
    }
    console.log(scrollY);
}


function task(amount) { 
    setTimeout(function() { 
        // Add tasks to do 
    }, 1000 * amount); 
} 