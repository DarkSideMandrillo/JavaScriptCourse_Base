// ---------- Funzionamento this START ------------- //
// Cambio this con .call()
function logThis(){
    console.log(this);
  }
  logThis();
  logThis.call('hello');
  
  // Funzionamento con arrow
  console.log('Obj1');
  const obj1 ={
    method: ()=>{
      console.log(this); // Con arrow func prende il this esterno (quindi undefined per questo caso)
    }
  }
  obj1.method();
  
  // Perchè?
  console.log('Obj2');
  const obj2 ={
    method(){
      [1,2,3].forEach(function(){console.log(this); }); // Il this della func è undefined
      [1,2,3].forEach(()=>{console.log(this); }); // il this dell'Arrow func è fuori dalla func, quindi l'oggetto
    }
  }
  obj2.method();
  
  // ---------- Funzionamento this END ------------- //