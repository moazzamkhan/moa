const fs = require("fs")
const configFilename = "moa-config.json"
let filename = null

export default class LocalThingsStoreFile {
  setData(content) {
    fs.writeFileSync(filename, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(fs.readFileSync(filename, "utf8"))
  }

  getConfig() {
    return JSON.parse(fs.readFileSync(configFilename, "utf8"))
  }

  getConfig() {
    try {
      return JSON.parse(fs.readFileSync(configFilename, "utf8")) || {}
    } catch (e) {
      return {}
    }
  }

  setConfig(config) {
    filename = config.location + "/localstorage.json"
    fs.writeFileSync(configFilename, JSON.stringify(config))
    this.createStoreFile()
  }

  createStoreFile() {
    fs.writeFileSync(filename, JSON.stringify({ things: [] }))
  }

  init() {
    //create file if does not exists
    filename = this.getLocation()
    if (filename) {
      fs.open(filename, "r", function(err, fd) {
        if (err) {
          this.createStoreFile()
          console.log(filename, "The file was saved!")
        } else {
          console.log("The file exists!")
        }
      })
    }
  }
}
