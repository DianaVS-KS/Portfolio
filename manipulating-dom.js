const showMore = function () {
    const elementsHid = document.getElementsByClassName('hid');
    const button = document.getElementById('view');
    for(let el of elementsHid){
        if(el.style.display === 'none'){
            el.style.display = 'inline';
            button.innerText = 'View Less';
        }
        else {
            el.style.display = 'none';
            button.innerText = 'View More';
        }
    }
}