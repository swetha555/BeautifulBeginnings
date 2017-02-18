function clickedMenu() {
        var x = document.getElementById("menu-items");
        if (x.className === "menu-section") {
            x.className += " responsive";
        } else {
            x.className = "menu-section";
        }
    }


var itemsSelected = 0;
 
    function hasClass(el, className) {
        if (el.classList)
            return el.classList.contains(className)
        else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
 
    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!hasClass(el, className)) el.className += " " + className
    }
 
    function removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className)
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            el.className = el.className.replace(reg, ' ')
        }
    }
 
    function adjustItemCount(element) {
        // check if alreday selected, if selected remove
        if (hasClass(element,'active')) {
            removeClass(element,'active');
            itemsSelected--;
        }else{
            addClass(element,'active');
            itemsSelected++;
        }
        document.getElementById("items-selected").textContent = itemsSelected;
    };