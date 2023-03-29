let btnvar1 = document.getElementById('btnh1')
btnvar1.addEventListener("click", async function() {

  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "white"
  }
  else {
    btnvar1.style.color = "red"
  }
})

