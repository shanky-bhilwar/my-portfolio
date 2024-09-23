
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzs-RbhKj-RcbU7RMF-pzIwlmPhyjpfTOgdmeYFUzDytKc4jo-DStEFUdiIlQIyXIL2pw/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = " Message Sent Successfully "
        setTimeout(function(){

            msg.innerHtml = ""
        },7000)
        form.reset()

      })
       .catch(error => console.error('Error!', error.message ))
  })














































































