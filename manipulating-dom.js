const showMore = function () {
    const elements = document.getElementsByClassName('hid');
    // const button = document.getElementsByClassName('button1');
    for(let el of elements){
        if(el.style.display === 'none'){
            el.style.display = 'inline';
            // button.innerText = 'View Less';
        }
        else {
            el.style.display = 'none'; 
            // button.innerText = 'View More';
        }
    }
}