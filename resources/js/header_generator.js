
function generate_header(home=true){
    const prefix = home ? '.' : '..'
    const element = document.getElementsByTagName('header')[0]
    element.innerHTML = `
        <h1><a href="${prefix}/index.html">Mostafa Lotfy</a></h1>
        <nav>
            <ul>
                <li><a href="${prefix}/html/projects.html">Projects</a></li>
                <li><a href="${prefix}/html/skills.html">Skills</a></li>
                <li><a href="${prefix}/html/contact.html">Contact</a></li>
            </ul>
        </nav>
    `
}