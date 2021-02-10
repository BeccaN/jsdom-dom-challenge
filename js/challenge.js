document.addEventListener("DOMContentLoaded", function(event){
    const counterNum = document.querySelector("#counter")
    let count = parseInt(counterNum.innerText)
    const pauseBtn = document.querySelector("#pause")

    setInterval(function () {
        if (pauseBtn.innerText === "pause") {
        count += 1
        counterNum.textContent = count }
    }, 1000);

    const minusBtn = document.querySelector("#minus")

    minusBtn.addEventListener("click", function(e) {
        count -= 1
        counterNum.textContent = count
    })

    const plusBtn = document.querySelector("#plus")

    plusBtn.addEventListener("click", function(e) {
        count += 1
        counterNum.textContent = count
    })

    const heartBtn = document.querySelector("#heart")
    let likedList = document.querySelector(".likes")
    likedNums = []

    function counterCheck(array, value) {
        var i = 0;
        array.forEach((v) => (v === value && i++));
        return i;
    }
    
    heartBtn.addEventListener("click", function(e) {
        likedNums.push(count)
        likedList.innerHTML += `<li>${count} Liked ${counterCheck(likedNums, count)} times</li>`
    })

    pauseBtn.addEventListener("click", function(e) {
        if (pauseBtn.innerText === "pause") {
            heartBtn.disabled = true;
            plusBtn.disabled = true;
            minusBtn.disabled = true;
        
            pauseBtn.innerText = "resume" 
        } else {
            heartBtn.disabled = false;
            plusBtn.disabled = false;
            minusBtn.disabled = false;

            pauseBtn.innerText = "pause"
        }

    })
});
