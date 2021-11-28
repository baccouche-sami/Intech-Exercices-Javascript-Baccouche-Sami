let ListAll = document.querySelectorAll("body > :not(style,script,link,meta,head,html")


ListAll.forEach(
    function(currentValue, currentIndex, listObj) {

        let newText = currentValue.textContent.toUpperCase();
        currentValue.textContent = newText


    }
);