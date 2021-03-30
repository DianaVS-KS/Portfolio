const showMore = function () {
    const elements = document.getElementsByClassName('hid');
    const button = document.getElementsByClassName('button1');
    console.log(elements);
    for(let el of elements){
        if (el.classList.contains('hid')) {
            el.classList.toggle('hid');
            el.classList.add('vis');
            button.innerHTML= 'Show Less';
          }
    }
}