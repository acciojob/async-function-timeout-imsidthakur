
const form = document.getElementsByTagName("form")[0];
const output = document.getElementById("output");


document.getElementById("btn").addEventListener("click",()=>{
   
  const val =  form.text.value;
  const del =  Number(form.delay.value);
  
  setTimeout(function() {
    output.textContent = val + "-" + del;
  }, del*1000);
})

