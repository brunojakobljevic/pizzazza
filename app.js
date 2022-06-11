document.getElementById('forma').addEventListener('submit', function(e){
  document.getElementById('forma').style.display = 'none'
  document.getElementById('forma2').style.display = 'block'
  setTimeout(formLoad, 1500)
  e.preventDefault()
});

function formLoad(){
  document.getElementById('forma2').style.display = 'none'
  const footer = document.getElementById('forma3')
  footer.style.marginBottom = '25%'
  document.getElementById('forma3').style.display = 'block'
}
