function updateHeading(ev){
    ev.preventDefault()
    const personName  = ev.target.personName.value
    const heading = document.querySelector('h1')
    heading.textContent = personName
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit',updateHeading)
