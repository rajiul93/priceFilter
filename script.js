const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress =document.querySelector(".slider .progress")

let priceGAp =1000;
// control input value
priceInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(priceInput[0].value),
         maxVal = parseInt(priceInput[1].value)
         if ((maxVal -minVal >= priceGAp) && (maxVal<=10000)) {
            if (e.target.className ==="input-min") {
                rangeInput[0].value = minVal;
                progress.style.left= ((minVal*100)/ rangeInput[0].max)  +"%";
            }else{
                rangeInput[1].value = maxVal ;
                progress.style.right=100- ((maxVal*100)/ rangeInput[1].max)  +"%";
            }
         }
    })
});

// control slider value
rangeInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(rangeInput[0].value),
         maxVal = parseInt(rangeInput[1].value)
         if (maxVal -minVal< priceGAp) {
            if (e.target.className ==="range-min") {
                rangeInput[0].value = maxVal -priceGAp
            }else{
                rangeInput[1].value = minVal + priceGAp

            }
         }else{
            priceInput[0].value =minVal
            priceInput[1].value =maxVal
             progress.style.left= ((minVal*100)/ rangeInput[0].max)  +"%";
             progress.style.right=100- ((maxVal*100)/ rangeInput[1].max)  +"%";
         }
    })
})