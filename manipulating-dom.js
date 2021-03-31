const showMore = function () {
    const elementsHid = document.getElementsByClassName('hid');
    for(let el of elementsHid){
        if(el.style.display === 'none'){
            el.style.display = 'inline';
        }
        else {
            el.style.display = 'none';
        }
    }
}