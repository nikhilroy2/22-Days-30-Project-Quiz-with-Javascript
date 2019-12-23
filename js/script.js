'use strict';



// form card slide......
    //...............Global Variable.............
    let form_card = document.querySelectorAll('.form_card');
    let prev = document.querySelector('#prev');
    let next = document.querySelector('#next');
    let cardIndex = 1;
    showCard(cardIndex);

   function btnControl(n){
       showCard(cardIndex +=n);
   }

    // showCard.......
    function showCard(n) {
        if (n > form_card.length) {
          //  alert('Finished');
            cardIndex = form_card.length;
        }
        if (n > form_card.length - 1) {
            next.innerHTML = 'Complete';

        } else {
            next.innerHTML = 'Next';
        }
        if (n < 1){
          cardIndex = form_card.length;
        };
        form_card.forEach((a)=> {
            a.style.display = 'none';
        });
        form_card[cardIndex - 1].style.display = 'block';
        
        
        // new idea for compared style  source: https://codepen.io/nikhilroy2/pen/XWJpvRY?editors=1111

        let form_card_prev = window.getComputedStyle(form_card[0]).getPropertyValue('display');
        if (form_card_prev == 'block'){
            prev.style.display = 'none';
        } else {
            prev.style.display = 'block';
        }

        //
    }


    // question time count....
    // global variable here..........
    let sec = document.querySelector('.sec');
    let min = document.querySelector('.min');
    let circle2 = document.querySelector('#circle2');
    let minCount = 0; 
    let secCount = 0;
    let lessCount = 0;
    let circle2Count = 0;

        let setTime = setInterval(function(){
            circle2Count+=0.625;
            circle2.setAttribute('style', `stroke-dashoffset: calc((273 - (273 * ${circle2Count}) / 100)  )`)
           
            secCount++;
            if (secCount < 10){

                sec.innerHTML = lessCount.toString() +  secCount;
            } else {
                sec.innerHTML = secCount;
            }
            if (secCount == 59) {
                secCount = 0;
            }
            minCount++;
            if (minCount < 60 * 10) {
                min.innerHTML = lessCount.toString() + Math.floor(minCount / 60);
            } 
            else if (minCount > 60) {
                min.innerHTML =  Math.floor(minCount / 60);

            }

            // stop the time
            if (minCount == Math.floor(60 * 2)   /* 2 min */) {
                clearInterval(setTime);
                sec.innerHTML = '00';
            }
           
        }, 1000)


        // checkbox

        // answer showing........
      
       
