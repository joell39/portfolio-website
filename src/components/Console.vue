<script>
import { nextTick } from 'vue'
import { store } from './../store.js'

export default {
  data() {
    return {
      inputs: [], // Command, Result
      input_text: "",
      input_focus: false,
      store,
      commandLengthLimit: 19,
      commandMaxLength: this.$consoleCommandMaxLength,
      commands: [
        {cmd: "help", func: "returnHelp"},
        {cmd: "github", func: "openNewTab", args: "https://github.com/" + this.$githubName},
        {cmd: "repo", func: "openNewTab", args: "https://github.com/" + this.$githubName + "/" + this.$repositoryName},
        {cmd: "weather", func: "returnWeather", async: true},
          
        {cmd: "echo", func: "returnText"},
        {cmd: "ls", func: "returnStaticText", args: "... \n assets/ \n components/ \n App.vue \n main.js \n store.js"},
        {cmd: "whoami", func: "returnStaticText", args: "guest"},
          
        {cmd: "clear", func: "clearConsole"},
        {cmd: "reload", func: "reloadSite"},
      ],
      width: document.documentElement.clientWidth
    }
  },

  created()  {
    this.onResize()
    window.addEventListener("resize", this.onResize)
  },

  methods: {
    onResize() {
      var width = document.documentElement.clientWidth
      var max = 496
      var sub = 0

      if (width < max) { 
        sub = Math.ceil( (max - width) / 10 )
      }

      this.commandLengthLimit = this.commandMaxLength - sub
    },

    async onSubmit(text) {
      await this.handleInput(text)

      nextTick(() => {
        this.$refs.console.scrollTop = this.$refs.console.scrollHeight
        this.$refs.console_input.value = ""
        this.input_text = ""
      })
    },

    onTextChange() {
      nextTick(() => {
        var input = this.$refs.console_input

        var text = input.value
        if (text != oldText) {
          this.input_text = input.value
        }
        var oldText = text
      })
    },

    async handleInput(input) {
      var commandObject = false
      var result = ""
      var parameters = input.toLowerCase().split(" ")
      var command = parameters[0]
      parameters.splice(0, 1)

      for (const c of this.commands) {
        if (c.cmd == command) {
          commandObject = c
        }
      }
    
      if (!commandObject) { result = "Command not found. Try 'help' for a list of available commands." }
      else if (commandObject.async) { result = await this[commandObject.func](parameters, commandObject.args) }
      else { result = this[commandObject.func](parameters, commandObject.args) }

      this.inputs.push({
        cmd: input,
        result: result
      })
    },

    clearConsole() {
      nextTick(() => {this.inputs = []})
    },

    reloadSite() {
      location.reload()
      return "Reloading page..."
    },

    returnHelp() {
      var cmds = []
      this.commands.forEach( c => { cmds.push(c.cmd) } )

      return cmds.sort().join(" ")
    },

    returnText(parameters) {
      return parameters.length > 0 ? parameters.join(" ") : " "
    },

    returnStaticText(p, text) {
      return text
    },

    async returnWeather(parameters) {
      var city = parameters.join(" ")
      var response = await fetch("https://wttr.in/" + city + "?format=%l:+%c+%t")
      var data = await response.text()

      return data
    },

    openNewTab(p, url) {
      window.open(url, '_blank').focus()
      return "Opening new site..."
    },
    
  },
  watch: {
    'store.isConsoleActive'(state) {
      if (state) {
        this.$refs.console_input.focus()
      }
    }
  }
}

</script>

<template>
  <div class="console" :class="{disabled: !store.isConsoleActive}" @click="this.$refs.console_input.focus()" ref="console">
    <div class="console_body">
      <div class="entry" v-for="(input, index) in inputs">
        <p><span class="red">{{ $userName }}</span>@<span class="blue">{{ $domain }}</span>:<span id="cmd">{{ input.cmd }}</span></p>
        <p id="result">{{ input.result }}</p>
      </div>
      <div class="container">
        <p id="text">
          <span class="red">{{ $userName }}</span>@<span class="blue">{{ $domain }}</span>:
        </p>
        <div class="input_container">
          <p id="console_input_text" :class="{disabled_animation: !input_focus}" ref="console_input_text">{{ this.input_text }}</p>
          <textarea 
            @keydown.prevent.enter="onSubmit($event.target.value)" 
            @input="onTextChange" 
            @focus="input_focus = true"
            @blur="input_focus = false"
            id="console_input" ref="console_input" rows="1" :maxlength="commandLengthLimit"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .console {
    width: 30rem;
    height: 15rem;
    padding: 15px 15px;
    display: inline-block;
    background: #1b1b20;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    border-bottom: solid;
    border-bottom-color: var(--color-accent);
    border-bottom-width: 2px;
    overflow-y: auto;
    z-index: 2;
  }

  .console_body {
    display:flex;
    flex-direction: column;
  }

  .console_body > .container {
    display: flex;
    flex-direction: row;
  }

  .console_body > .container > .input_container > textarea {
    color: transparent;
    background-color: transparent;

    border: none;
    outline: none;
    resize: none;
    font-size: 18px;
    line-height: 18px;
    width: 100%;
    margin-top: -2px;

    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .console_body > .entry > #result {
    padding-top: 5px;
    white-space: pre-line;
  }

  .console_body > div > p > .red, #text > .red {
    color: #ff3344;
  }

  .console_body > div > p > .blue, #text > .blue {
    color: #2ca7eb;
  }

  .console_body > div > p > #cmd {
    padding-left: 2px;
  }

  .console > .title {
    font-weight: bold;
    user-select: none;
  }

  .console::-webkit-scrollbar {
    width: 0.5em;
  }
  
  .console::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  
  .console::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px var(--color-border); 
  }

  .console::-webkit-scrollbar-thumb:hover {
    -webkit-box-shadow: inset 0 0 6px var(--color-border-hover); 
  }

  .disabled {
    pointer-events: none;
    opacity: 0;
    z-index: 0 !important;
  }

  @keyframes blink {
    0%, 50% {
      background: var(--color-text);
    }
    51%, 100% {
      background: transparent;
    }
  }

  @-webkit-keyframes blink {
    0%, 50% {
      background: var(--color-text);
    }
    51%, 100% {
      background: transparent;
    }
  }

  .disabled_animation:after {
    background: transparent !important;
    animation: none !important;
    -webkit-animation: none !important;
  }

  #console_input_text {
    left: -6px;

    line-height: 18px;
    width: 100%;
    vertical-align: middle;
    text-align: left;
    font-size: 18px;
    font-family: Roboto Mono, monospace;
  }

  #console_input_text:after, #console_input_text:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 20px;
    vertical-align: middle;
  }

  #console_input_text:after {
    position: relative;
    bottom: 2px;
    left: 2px;
    background: #FFF;
    animation: blink 1s linear infinite;
    -webkit-animation: blink 1s linear infinite;
  }
</style>