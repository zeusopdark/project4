const input = document.querySelector('#email');
input.classList.add('email');

const button = document.querySelector('#something');
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { //show button //above 300px the below class will be added evertime but we just want once to be added above 300 that's
        //why we use this below if it will just add once because after that class btnentrance will be added .
        if (!button.classList.contains('btnEntrance')) {
            button.classList.remove('btnExit');
            button.classList.add('btnEntrance');
            button.style.display = 'block';
        }
    }
    else { //hide the button
        if (button.classList.contains('btnEntrance')) { //same here
            button.classList.remove('btnEntrance');
            button.classList.add('btnExit')
            setTimeout(function () {
                button.style.display = 'none';
            }, 250);
        }
    }
});
button.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

const redirect = document.getElementsByClassName('get');
for (let i = 0; i < redirect.length; i++) {
    redirect[i].addEventListener('click', function () {
        console.log('you clicked me');
        window.location.href = 'About.html';
    });
}



// changing images 

const mainImage = document.querySelector('#main');
const restImage = document.querySelectorAll('.rest');

for (let i = 0; i < restImage.length; i++) {
    const src2 = restImage[i].getAttribute('src');
    restImage[i].addEventListener('click', function () {
        mainImage.setAttribute('src', src2);
        // mainImage.src = restImage[i].src;  //this can also be done same as above;
    });
}

//product quantity

const main = document.querySelector('.mid');
var count = 1;
const start = document.querySelectorAll('.start');

for (let i = 0; i < start.length; i++) {
    start[i].addEventListener('click', function () {
        console.log(start[i].innerText);
        if (start[i].innerText === '-' && count > 1) {
            count = count - 1;
            main.textContent = count;
        }
        else if (start[i].innerText === '+') {
            count = count + 1;
            main.textContent = count;
        }
    });
}
const add = document.querySelector('.atc');
add.addEventListener('click', () => {
    alert('Product Added Successfully');
    main.textContent = '1';
    count = 1;
});

// redirect to About page

// onclick = "window.location.href='About.html';"