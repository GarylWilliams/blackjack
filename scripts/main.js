(function () {

  'use strict';
    


// Assert Function
  function assert(hand, value) {
    let output = handValue(hand);
    console.assert(output === value, `Expecting ${output} to be ${value}`);
  }

  // Blackjack Hand Tests
  // Hand, Value
  assert(["2", "2", "8"], 12);
  assert(["2", "2", "K"], 14);
  assert(["2", "Q"], 12);
  assert(["7", "J"], 17);
  assert(["7", "A"], 18);
  assert(["8", "J", "A"], 19);
  assert(["8", "A", "J"], 19);
  assert(["8", "7", "A", "A"], 17);

})();


       function handValue(hand) {
        let value = 0; 

        hand.sort(card => card === 'A'?1:-1); 

        for (let i = 0; i < hand.length; i++) {
        if(hand[i] === '2' ||
            hand[i] === '3' ||
            hand[i] === '4' ||
            hand[i] === '5' ||
            hand[i] === '6' ||
            hand[i] === '7' ||
            hand[i] === '8' ||
            hand[i] === '9' ||
            hand[i] === '10') {
            value += parseInt(hand[i]);
            // console.log("its a small card");
            }    
        else if(hand[i] === "K" || hand[i] === "Q" || hand[i] ==="J") {
            value += 10; 
            // console.log("its a face card");
        } else {
            if (value > 11) {
            value += 1;     
            } else {
            value += 11; 
            }
        }        
 
      }
           return (value); 
    }
console.log(handValue(['2', 'K', '9']));