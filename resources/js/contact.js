const contacts = [
    {
        name:"gmail", logo_dark_path:"./images/contacts/gmail/gmail.png",
        email:"mostafaXlotfy@gmail.com",
    },
    {
        name:"github", logo_dark_path:"./images/contacts/github/github_120.png",
        link:"https://github.com/MostafaXLotfy",
    },
]
function generate_contacts(){
    const element = document.getElementsByClassName('contacts')[0]
    contacts.forEach(contact =>{
        element.innerHTML += `
        <div class='contact'>
            <a href=${contact.email?
                '"mailto:' + `${contact.email}"`:
                `"${contact.link}"`} target="_blank">
                <img src="${contact.logo_dark_path}" alt="${contact.name}" title="${contact.name}">
            </a>
        </div>`
    })
}