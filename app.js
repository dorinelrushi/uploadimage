var demo = document.getElementById("demo");
demo.addEventListener("change",function(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var images = document.getElementById("out");
    out.src = src;
  }
})