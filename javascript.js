 //generate random number
 function randNum(){
    compNum = (Math.floor(Math.random()*3) +1) ; 
}
    
//comparison between two values to create a desired result to be implemented later.
    function playRound(player1, player2 ) {
        
        
        result ='';
       
        if (player2 == player1){
            result = 0;
        }
        else if (player2== 1 && player1 == 3){
            result = 2;

        }
        else if (player2 == 1 && player1== 2){
            result = 1;
        }
        else if (player2 == 3 && player1== 1){
           result = 1;
        }
        else if (player2 == 3 && player1==2){
            result = 2;
        }
        else if (player2 == 2 && player1== 1){
            result = 2;
        }
        else if (player2== 2 && player1== 3){
           result = 1;
        }
        else  {result = -1}
        
    }
   // initialize player score
    player2Score= 0
    player1Score =0
    //DOM manipulation practice. also makes it easier to reference button when creating event Listener.
    const button1 = document.getElementById( '1' );
    const button2 = document.getElementById('2');
    const button3 = document.getElementById('3');
    const reset = document.getElementById('4');
    
    
    /*append nodes to div element so results of js functions appear on html/webpage*/

    const container = document.querySelector('div');
    const holder = document.createElement('div');
    const results = document.createElement('div');
    const totalGames = document.createElement('div');
    const finalResult = document.createElement('div')
    results.appendChild(totalGames);
    holder.appendChild(results);
    container.appendChild(holder);
    const gameOver=document.createElement('div');
    
   
   gameOver.innerHTML = ('Game is over press restart game to start over');

   //create output based on result of playRound
    function gameIf (){
       if (result ==0 ) {
          results.innerHTML ='You tied there is no winner' 
          
       }
       else if (result== 1){
           results.innerHTML ='You Won this round'
           
           player1Score+=1
       }
       else if (result == 2){
           results.innerHTML='You lost this round'
           
           player1Score+=1
       }
       else if (result == -1){
           results.innerHTML = ('This value is not accepted')
           
       }

    }
    //displays the current value of player1Score and player2Score
    function score(){
       totalGames.innerHTML = ('The current score is '+player1Score+ ' wins for the player 1 and '+player2Score+' wins for the player 2');
       holder.appendChild(totalGames);
    }
    // displays text when either condition is reached
    function gameFinalResults() {
       if (player2Score ==5){
            
           finalResult.innerHTML = ('The Winner is Player 2 please reset game.')
           results.appendChild(finalResult)

       }
       else if (player1Score == 5){
           
           finalResult.innerHTML = ('Winner is the Player 1 please reset game .')
           holder.appendChild(finalResult)
       }

       
    }
    //function that runs when button 1 event is activated.  displays final results and
       //removes button functionality when conditions are met.
    function button1Run(){
           randNum()
       if ((player2Score == 5) || (player1Score == 5)){
           gameFinalResults()
           holder.appendChild(gameOver);
            button1.removeEventListener('click', button1Run)    

       }
       else{
           playRound(1, compNum)
           gameIf()
           
       }
       score()
       
       }
       
       //function that runs when button 3 event is activated.  displays final results and
       //removes button functionality when conditions are met.
       function button3Run (){
           randNum()
       if ((player2Score == 5) || (player1Score == 5)){
           gameFinalResults()
           holder.appendChild(gameOver);
          button3.removeEventListener('click', button3Run)    

           
       }
       else{
           playRound(3, compNum)
           gameIf()
           
       }
       score()
       
       }
       //function that runs when button 2 event is activated.  displays final results and
       //removes button functionality when conditions are met.
       function button2Run(){
           randNum()
       if ((player2Score == 5) || (player1Score == 5)){
           gameFinalResults()  
           holder.appendChild(gameOver);
          button2.removeEventListener('click', button2Run)    
       }

       else{
           playRound(2, compNum)
           gameIf()
           }

       score()
       
       }
    
     //reinitilizes values, and adds functionality back to  buttons.
    function resetGame (){
       player2Score = 0
       player1Score = 0
       totalGames.innerHTML = ('The current score is '+player2Score+ ' wins for the Computer and '+player1Score+' wins for the player');
       results.innerHTML = '';
       gameOver.innerHTML ='';
       finalResult.innerHTML = '';
       button1.addEventListener('click', button1Run )
       button2.addEventListener('click', button2Run)
       button3.addEventListener('click',button3Run)
       reset.addEventListener('click', resetGame)

    }
    //add event listener to buttons, allows function to run when button click.
    button1.addEventListener('click', button1Run )
    
    button2.addEventListener('click', button2Run)

    button3.addEventListener('click',button3Run)
   
    reset.addEventListener('click', resetGame)
