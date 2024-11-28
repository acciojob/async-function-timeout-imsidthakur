const form = document.getElementsByTagName("form")[0];
const output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", async () => {
   event.preventDefault(); 

  const val = form.elements.text.value; 
  const del = Number(form.elements.delay.value); 

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(val); 
    }, del);
  });

  const result = await promise;
  output.textContent = val ;
});
