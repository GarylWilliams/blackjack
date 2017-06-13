   function handValue(hand) {
    let value = 0; 
    
    hand.sort(card => card === 'A'?1:-1); 
    
    for (let i = 0; i < hand.length; i++) {
    if (hand[i] === '2' ||
        hand[i] === '3' ||
        hand[i] === '4' ||
        hand[i] === '5' ||
        hand[i] === '6' ||
        hand[i] === '7' ||
        hand[i] === '8' ||
        hand[i] === '9' ||
        hand[i] === '10') {
        value += parseInt(hand[i]);
        }    
    else if(hand[i] === "K" || hand[i] === "Q" || hand[i] ==="J") {
        value += 10; 
    } else {
        if (value > 11) {
        value += 1;     
        }
    }        
      return (value);  
  }
}
