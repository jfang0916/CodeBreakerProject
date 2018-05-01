let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer=='' or attempt == ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      attempt+=1;
    }else{
      return false;
    }
    if(getResults(input)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }else if(attempt>=10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    setMessage("Incorrect, try again.");
}

//implement new functions here
function setHiddenFields() {
  answer = Math.floor(9999*Math.random());
  answer = answer.toString();
  while(answer.length<4){
    answer = '0'+answer;
  }
  attempt = 0;
}

function setMessage(msg){
  let message = document.getElementById('message');
  message.innerHTML = msg;
}

function validateInput(input){
  if(input.length==4){
    return true;
  }else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }

}

function getResults(res){
  let cnt = 0;
  let tmp = <div class="row"><span class="col-md-6">' + res + '</span><div class="col-md-6">;
  for(i = 0;i<4;i++){
    if(res[i]===answer[i]){
      tmp+=<span class="glyphicon glyphicon-ok"></span>;
      cnt++;
    }else if(answer.includes(res[i])){
      tmp+=<span class="glyphicon glyphicon-transfer"></span>;
    }else{
      tmp+=<span class="glyphicon glyphicon-remove"></span>;
    }
    tmp+=</div></div>;
  }
  let results = document.getElementById('results');
  results.innerHTML = tmp;
  if(cnt===4){
    return true;
  }else{
    return false;
  }
}

function showAnswer(win){
  let code = document.getElementById('code');
  code.innerHTML = answer;
  if(win){
    code.className = " success";
  }
}

function showReplay(){
  document.getElementById('guessing-div').style.display = none;
  document.getElementById('replay-div').style.display = block;
}
