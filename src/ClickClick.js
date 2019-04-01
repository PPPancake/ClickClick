(function (){
	function $(){
    if (arguments[0] === 'coreValues' || arguments[0] === 1) {
      var clickCount = 0;
      var text = ['富强', '民主', '文明', '和谐'];

      document.onclick = function(e) {
        var symbol = document.createElement("div");
        document.body.appendChild(symbol);

        symbol.style.position = "absolute";
        symbol.style.left = e.pageX + "px";
        symbol.style.top = e.pageY + "px";
        symbol.style.zIndex = 9999;
        symbol.style.fontSize = "20px"; 
        symbol.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        symbol.style.transition="all 1.5s";

        symbol.innerText = text[clickCount%(text.length)];
        clickCount++;

        symbol.addEventListener("transitionend",function(et){
          if(et.propertyName == "opacity" && et.srcElement.style.opacity==0)
            et.srcElement.remove();
        });

        requestAnimationFrame(()=>{
          symbol.style.top = (e.pageY - 100) + "px";
          symbol.style.opacity = 0;
        });
      };
    } else if (arguments[0] === 'wavelet' || arguments[0] === 2) {
      document.onclick = function(e) {
        var symbol = document.createElement("div");
     
        symbol.style.position = "absolute";
        symbol.style.left = e.pageX + "px";
        symbol.style.top = e.pageY + "px";
        symbol.style.zIndex = 9999;
        symbol.style.transition="all 1.5s";
        symbol.style.border="1px red solid";
        symbol.style.borderColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        symbol.style.borderRadius="100%";
        symbol.style.width = "0px";
        symbol.style.height = "0px";
    
        symbol.addEventListener("transitionend",function(et){
           if(et.propertyName == "opacity" && et.srcElement.style.opacity==0)
             et.srcElement.remove();
         });
     
        document.body.appendChild(symbol);
     
        requestAnimationFrame(()=>{
          symbol.style.width = "80px";
          symbol.style.margin = "-7px -40px";
          symbol.style.height = "14px";
          symbol.style.opacity = 0;
        });
      };
    } else {
      throw "'parameter error'";
    }
  }
    

  window['clickClick'] = {}

  window['clickClick']['$']=$;
          
})();