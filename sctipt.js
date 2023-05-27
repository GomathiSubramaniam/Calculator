output = document.getElementById('inputext')

function clicking(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value)
    }
   catch(err){
    alert("Invalid")
   }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);  
}

     //keyboard
window.addEventListener('keypress',(event)=>{
  operator = ['-','+','/','*']  
  key = event.key;
  code = event.code;
  if(code.includes('Digit')|| operator.includes(key)){
    parent = document.getElementById('inputext');
    parent.value = parent.value + key;
    console.log('key is press')
    console.log(event)
  }
  else{
    console.log('error')
  }
})