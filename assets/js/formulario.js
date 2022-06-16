window.onload = function() {
      let elementos = document.getElementsByTagName("textarea");
      for (var i = 0 ; i < elementos.length; i++) {
          elementos[i].addEventListener('click', function() {
                this.style.backgroundColor = "#e8f0fe";
             });
          }
      }

const $form=document.querySelector("#form")
const $buttonMailto=document.querySelector("#emailN")
$form.addEventListener("submit",handleSubmit);

function handleSubmit(event){
	event.preventDefault();
	const form=new FormData(this)//referencia a $form
	$buttonMailto.setAttribute("href",`mailto:piero.cahuana.69.palomino@gmail.com?subject=${form.get("name")}${form.get("email")}&body=${form.get("message")}`)
	$buttonMailto.click();

} 