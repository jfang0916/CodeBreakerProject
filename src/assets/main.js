let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      attempt.value+=1;
    }else{
      return false;
    }
    if(getResults(input.value)){
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    }else if(attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }else{
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(9999*Math.random()).toString();
  while(answer.value.length < 4){
    answer.value = '0'+answer.value;
  }
  attempt.value = "0";
}

function setMessage(msg){
  document.getElementById('message').innerHTML = msg;
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
  let tmp = '<div class="row"><span class="col-md-6">' + res + '</span><div class="col-md-6">';
  for(i = 0;i<4;i++){
    if(res[i]==answer.value[i]){
      tmp+='<span class="glyphicon glyphicon-ok"></span>';
    }else if(answer.value.indexOf(res[i]) > -1){
      tmp+='<span class="glyphicon glyphicon-transfer"></span>';
    }else{
      tmp+='<span class="glyphicon glyphicon-remove"></span>';
    }
    tmp+='</div></div>';
  }
  document.getElementById('results').innerHTML = tmp;
  if(res==answer.value){
    return true;
  }else{
    return false;
  }
}

function showAnswer(win){
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if(win){
    code.className += " success";
  }else{
    code.className += " failure";
  }
}

function showReplay(){
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}
