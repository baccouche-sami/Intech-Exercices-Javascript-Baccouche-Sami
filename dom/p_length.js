let ListP = document.querySelectorAll("p");
ListP.forEach(
    function(currentValue, currentIndex, listObj) {
        let len = currentValue.textContent.length;
        let newInnerHTML = `<b> ${len} </b>` + currentValue.innerHTML;
        currentValue.innerHTML = newInnerHTML
    }
);