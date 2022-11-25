const questionFirst =document.querySelector(".questionFirst")
const answerFirst = document.querySelector(".answerFirst")
const questionSecond =document.querySelector(".questionSecond")
const questionThird =document.querySelector(".questionThird")
const questionFourth =document.querySelector(".questionFourth")
const questionFifth =document.querySelector(".questionFifth")
const answerSecond = document.querySelector(".answerSecond")
const answerThird = document.querySelector(".answerThird")
const answerFourth = document.querySelector(".answerFourth")
const answerFifth = document.querySelector(".answerFifth")
const thirdSectionAnimationFirst=document.querySelector(".thirdSectionAnimationFirst")
const animationImgFirst=document.querySelector(".animationImgFirst")
const thirdSectionAnimationSecond=document.querySelector(".thirdSectionAnimationSecond")
const animationImgSecond=document.querySelector(".animationImgSecond")
const thirdSectionAnimationThird=document.querySelector(".thirdSectionAnimationThird")
const animationImgThird=document.querySelector(".animationImgThird")
const thirdSectionAnimationFourth=document.querySelector(".thirdSectionAnimationFourth")
const animationImgFourth=document.querySelector(".animationImgFourth")
const header=document.querySelector("header")
const nav =document.querySelector("nav")
const burgerMenu=document.querySelector('.burger-menu');


burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle("burger-menu--opened");
    burgerMenu.classList.toggle("burger-menu--closed");
    if(burgerMenu.classList.contains("burger-menu--opened"))
    {
        header.style.display="flex";
        nav.style.display="flex";
    }
    else{
        header.style.display="none";
        nav.style.display="none";
    }
  });



function thirdSectionLightAnimationFirst(){
    thirdSectionAnimationFirst.classList.toggle('activethirdSectionAnimationFirst')
    if (thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
        animationImgFirst.src="./thirdSectionAnimationFirstLight.png"
    }
    else{
        animationImgFirst.src="./thirdSectionAnimationFirst.png"
    }

    if(thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
        thirdSectionAnimationSecond.classList.remove('activethirdSectionAnimationSecond')
        if (thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
            animationImgSecond.src="./thirdSectionAnimationSecondLight.png"
        }
        else{
            animationImgSecond.src="./thirdSectionAnimationSecond.png"
        }
    }
    else if(thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
        thirdSectionAnimationThird.classList.remove('activethirdSectionAnimationThird')
        if (thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
            animationImgThird.src="./thirdSectionAnimationThirdLight.png"
        }
        else{
            animationImgThird.src="./thirdSectionAnimationThird.png"
        }
    }
    else if(thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
        thirdSectionAnimationFourth.classList.remove('activethirdSectionAnimationFourth')
        if (thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
            animationImgFourth.src="./thirdSectionAnimationFourthLight.png"
        }
        else{
            animationImgFourth.src="./thirdSectionAnimationFourth.png"
        }
    }
}

function thirdSectionLightAnimationSecond(){
    thirdSectionAnimationSecond.classList.toggle('activethirdSectionAnimationSecond')
    if (thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
        animationImgSecond.src="./thirdSectionAnimationSecondLight.png"
    }
    else{
        animationImgSecond.src="./thirdSectionAnimationSecond.png"
    }

    if(thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
        thirdSectionAnimationFirst.classList.remove('activethirdSectionAnimationFirst')
        if (thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
            animationImgFirst.src="./thirdSectionAnimationFirstLight.png"
        }
        else{
            animationImgFirst.src="./thirdSectionAnimationFirst.png"
        }
    }
    else if(thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
        thirdSectionAnimationThird.classList.remove('activethirdSectionAnimationThird')
        if (thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
            animationImgThird.src="./thirdSectionAnimationThirdLight.png"
        }
        else{
            animationImgThird.src="./thirdSectionAnimationThird.png"
        }
    }
    else if(thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
        thirdSectionAnimationFourth.classList.remove('activethirdSectionAnimationFourth')
        if (thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
            animationImgFourth.src="./thirdSectionAnimationFourthLight.png"
        }
        else{
            animationImgFourth.src="./thirdSectionAnimationFourth.png"
        }
    }
}

function thirdSectionLightAnimationThird(){
    thirdSectionAnimationThird.classList.toggle('activethirdSectionAnimationThird')
    if (thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
        animationImgThird.src="./thirdSectionAnimationThirdLight.png"
    }
    else{
        animationImgThird.src="./thirdSectionAnimationThird.png"
    }

    if(thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
        thirdSectionAnimationSecond.classList.remove('activethirdSectionAnimationSecond')
        if (thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
            animationImgSecond.src="./thirdSectionAnimationSecondLight.png"
        }
        else{
            animationImgSecond.src="./thirdSectionAnimationSecond.png"
        }
    }
    else if(thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
        thirdSectionAnimationFirst.classList.remove('activethirdSectionAnimationFirst')
        if (thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
            animationImgFirst.src="./thirdSectionAnimationFirstLight.png"
        }
        else{
            animationImgFirst.src="./thirdSectionAnimationFirst.png"
        }
    }
    else if(thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
        thirdSectionAnimationFourth.classList.remove('activethirdSectionAnimationFourth')
        if (thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
            animationImgFourth.src="./thirdSectionAnimationFourthLight.png"
        }
        else{
            animationImgFourth.src="./thirdSectionAnimationFourth.png"
        }
    }
}

function thirdSectionLightAnimationFourth(){
    thirdSectionAnimationFourth.classList.toggle('activethirdSectionAnimationFourth')
    if (thirdSectionAnimationFourth.classList.contains('activethirdSectionAnimationFourth')){
        animationImgFourth.src="./thirdSectionAnimationFourthLight.png"
    }
    else{
        animationImgFourth.src="./thirdSectionAnimationFourth.png"
    }

    if(thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
        thirdSectionAnimationSecond.classList.remove('activethirdSectionAnimationSecond')
        if (thirdSectionAnimationSecond.classList.contains('activethirdSectionAnimationSecond')){
            animationImgSecond.src="./thirdSectionAnimationSecondLight.png"
        }
        else{
            animationImgSecond.src="./thirdSectionAnimationSecond.png"
        }
    }
    else if(thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
        thirdSectionAnimationThird.classList.remove('activethirdSectionAnimationThird')
        if (thirdSectionAnimationThird.classList.contains('activethirdSectionAnimationThird')){
            animationImgThird.src="./thirdSectionAnimationThirdLight.png"
        }
        else{
            animationImgThird.src="./thirdSectionAnimationThird.png"
        }
    }
    else if(thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
        thirdSectionAnimationFirst.classList.remove('activethirdSectionAnimationFirst')
        if (thirdSectionAnimationFirst.classList.contains('activethirdSectionAnimationFirst')){
            animationImgFirst.src="./thirdSectionAnimationFirstLight.png"
        }
        else{
            animationImgFirst.src="./thirdSectionAnimationFirst.png"
        }
    }
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.thirdSectionAnimation');
  let elementsBackground=document.querySelectorAll('.rectangleThirdSEctionAnimation');

  let animations=[thirdSectionAnimationFirst,thirdSectionAnimationSecond,thirdSectionAnimationThird,thirdSectionAnimationFourth];


  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of elementsBackground) {
    observer.observe(elm);
  }

  for (let elm of animations) {
    observer.observe(elm);
  }





questionFirst.addEventListener('click',function questionFirstShow(){
    questionFirst.classList.toggle('active')
    answerFirst.classList.toggle('active')
    answerFirst.style.color='#ffffff'
    
})
questionSecond.addEventListener('click',function questionSecondShow(){
    questionSecond.classList.toggle('active')
    answerSecond.classList.toggle('active')
    answerSecond.style.color='#ffffff'
})
questionThird.addEventListener('click',function questionThirdShow(){
    questionThird.classList.toggle('active')
    answerThird.classList.toggle('active')
    answerThird.style.color='#ffffff'
})
questionFourth.addEventListener('click',function questionFourthShow(){
    questionFourth.classList.toggle('active')
    answerFourth.classList.toggle('active')
    answerFourth.style.color='#ffffff'
})
questionFifth.addEventListener('click',function questionFifthShow(){
    questionFifth.classList.toggle('active')
    answerFifth.classList.toggle('active')
    answerFifth.style.color='#ffffff'
})


thirdSectionAnimationFirst.addEventListener('click',thirdSectionLightAnimationFirst)
thirdSectionAnimationSecond.addEventListener('click',thirdSectionLightAnimationSecond)
thirdSectionAnimationThird.addEventListener('click',thirdSectionLightAnimationThird)
thirdSectionAnimationFourth.addEventListener('click',thirdSectionLightAnimationFourth)



