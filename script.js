const form = document.getElementsByTagName("form")[0];
const output = document.getElementById("output");

document.getElementById("btn").addEventListener("click", async () => {
  const val = form.elements.text.value; 
  const del = Number(form.elements.delay.value); 

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res({val,del});
    }, del * 1000);
  });

  await promise.then((res)=> {
      output.textContent = res.val + " - " + res.del;
  })
});
