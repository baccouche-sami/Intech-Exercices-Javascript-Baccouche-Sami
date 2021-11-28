let ListH = document.querySelectorAll("title,h1,h2,h3,h4,h5,h6")

ListH.forEach(
    function(currentValue, currentIndex, listObj) {
        let newText = currentValue.textContent.toUpperCase();
        currentValue.textContent = newText

    }
);