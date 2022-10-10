const skills = [
    {name: "c++", dark_logo_path:"../images/dark/c++.png"},
    {name: "python", dark_logo_path:"../images/dark/python.png"},
    {name: "html5", dark_logo_path:"../images/dark/html5.png"},
    {name: "js", dark_logo_path:"../images/dark/js.svg"},
    {name: "c++", dark_logo_path:"../images/dark/cs3.svg"}
]

function generate_skills(){
    const element = document.getElementsByClassName('skills-container')[0]
    skills.forEach(skill =>{
        element.innerHTML += `
        <div class="skill">
            <img src="${skill.dark_logo_path}" alt="${skill.name}" title="${skill.name}">
        </div>`
    })
}