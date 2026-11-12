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

terminalInput.addEventListener("keydown", (evnt) => {
    if (evnt.key !== "Enter") return
    evnt.preventDefault()

    const cmd = terminalInput.value.trim()

    if (cmd === "") return;

    const typedcmd = document.createElement("div")
    typedcmd.classList.add("typedcmd")
    typedcmd.textContent = "> visitor@web: ~$ " + cmd

    terminalOutput.appendChild(typedcmd)



// Outputs

    const response = document.createElement("div")
    response.classList.add("cmd-response")

    if (cmd === "help") {
        response.textContent = "Available commands: fastfetch, help, clear, date,\n whoami,about, projects, github, echo"
    } else if (cmd === "date") {
        response.textContent = new Date().toString()
    } else if (cmd === "whoami") {
        response.textContent = "ajithesh"
    } else if (cmd === "about") {
        response.textContent = "Hey, I'm Ajithesh - a high school student interested in software and web design!"
    } else if (cmd === "github") {
        response.textContent = "opening GitHub..."
        window.open("https://github.com/AjitheshB", "_blank")

    } else if (cmd === "projects") {
        response.textContent = "The Archive | MadrigalOS | Ajira | Nocturnal \n For more projects scroll down to the projects section "

    } else if (cmd.startsWith("echo ")) {
        response.textContent = cmd.slice(5)
    } else if (cmd === "clear") {
        terminalOutput.replaceChildren()
    } else if (cmd === "fastfetch" || cmd === "fetch") {
        showFastFetch()
    } else {
        response.textContent = "command not found... " + cmd
    }

    if (cmd !== "clear") {
        terminalOutput.appendChild(response)
    }

    terminalInput.value = ""


})

