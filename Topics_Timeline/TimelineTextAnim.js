    var myFullpage = new fullpage('#fullpage', {
        afterLoad: function(origin, destination, direction){
            //section 2
            if(destination.index == 1){
                document.querySelector('#section1').querySelector('h1').style.left = 0 + 'px';

            }

            //back to original state
            else if(origin && origin.index == 1){
                 document.querySelector('#section1').querySelector('h1').style.left = 0 + '%';
            }

            //section 3 is using the state classes to fire the animation
            //see the CSS code above!
        }
    });