const terminalOutput = document.getElementById("terminal-op")
const terminalInput = document.getElementById("terminal-input")

function showFastFetch() {
    const response = document.createElement("div")
    response.classList.add("cmd-response")

    response.textContent = `
    
 █████╗
██╔══██╗      ajithesh@exe
███████║      ______________________
██╔══██║      User: Ajithesh
██║  ██║      Stack: HTML / CSS / JS
██║  ██║      Status: Building
╚═╝  ╚═╝      Resolution: ${screen.width}x${screen.height}
`

terminalOutput.appendChild(response)

}

const projects = {
    madrigalos: {
        name: "MadrigalOS",
        description: "A web operating syste, built with HTML, CSS and JS"
    },

    archive: {
        name: "The Archive",
        description: "A detective game inspired off Breaking Bad"
    },

    nocturnal: {
        name:"Nocturnal",
        description:"A movie catalogue with a halloween theme"
    },

    ajira: {
        name:"Ajira",
        description: "A task delegation platform to connect busy professionals to task doers"
    }
}
