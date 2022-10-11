
function generate_header(home=true){
    const prefix = home ? '.' : '..'
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = `
        <header class="desktop-header">
            <h1><a href="${prefix}/index.html">Mostafa Lotfy</a></h1>
            <nav>
                <ul>
                    <li><a href="${prefix}/html/projects.html">Projects</a></li>
                    <li><a href="${prefix}/html/skills.html">Skills</a></li>
                </ul>
            </nav>
        </header>

        <header class="mobile-header">
            <nav>
                <ul>
                    <li><a href="${prefix}/index.html">Mostafa Lotfy</a></li>
                    <li><a href="${prefix}/html/projects.html">Projects</a></li>
                    <li><a href="${prefix}/html/skills.html">Skills</a></li>
                </ul>
            </nav>
        </header>
    ` + body.innerHTML

} 