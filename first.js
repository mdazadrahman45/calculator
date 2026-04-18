let display = document.getElementById ("display")





//  value display mai ane ke liye 

 function add(val){

if(display.value==="0"){ // agar display mai 0 hai tu value zerp se replace ho
  display.value=val
} else {
  display.value  +=  val  // add hoga value  

}
}


function  allclear(){ ///
if(display.value==="0"){
  display.value = 0
} else{
  display.value = 0
}
}


function oneclear(){

  display.value=display.value.slice(0,-1)


  if(display.value===""){
  display.value = "0"
  }

  }



function calculate(){


  if(display.value===""){
    display.value = 0
  }

  try{
  display.value = eval(display.value)

  



  }catch{
    display.value = "error"
  }
}