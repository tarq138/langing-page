window.addEventListener('load', function(){
    const questions = document.querySelector('.questions');
    questions.style.opacity = 1;
    const title = document.querySelector('.header_title');
    title.style.opacity = 1;
    const line = document.querySelector('.line-spacer');
    line.style.opacity = 1;
    const about = document.querySelector('.header_about');
    about.style.opacity = 1;
    const slogan = document.querySelector('.header_slogan');
    slogan.style.opacity = 1;
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    const img4 = document.querySelector('#img4');
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const num3 = document.querySelector('#num3');
    window.onscroll = () =>{
        if (scrollY >= 400){
            img1.style.opacity = 1;
            img2.style.opacity = 1;
            img3.style.opacity = 1;
            img4.style.opacity = 1;
        } else{
            img1.style.opacity = 0;
            img2.style.opacity = 0;
            img3.style.opacity = 0;
            img4.style.opacity = 0;
        }
        if (scrollY >= 1300){
            num1.style.opacity = 1;
            num2.style.opacity = 1;
            num3.style.opacity = 1;
            num1.style.animationName = 'numbersTop';
            num2.style.animationName = 'numbersTop';
            num3.style.animationName = 'numbersTop';
            
        } else{
            num1.style.opacity = 0;
            num2.style.opacity = 0;
            num3.style.opacity = 0;
            num1.style.animationName = 'none';
            num2.style.animationName = 'none';
            num3.style.animationName = 'none';
        }
    }
    
})