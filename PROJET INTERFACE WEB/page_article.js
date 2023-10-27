document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const countElements = document.querySelectorAll('.count');

for (let i = 0; i < decrementButtons.length; i++) {
    let count = 0;

    decrementButtons[i].addEventListener('click', function () {
        if (count > 0) {
            count--;
            countElements[i].textContent = count;
        }
    });

    incrementButtons[i].addEventListener('click', function () {
        count++;
        countElements[i].textContent = count;
    });
}