const fs = require("fs")
const configFilename = "moa-config.json"
let filename = null

class LocalThingsStore {
  setData(content) {
    fs.writeFileSync(filename, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(fs.readFileSync(filename, "utf8"))
  }

  getConfig() {
    return JSON.parse(fs.readFileSync(configFilename, "utf8"))
  }

  getLocation() {
    try {
      const config = JSON.parse(fs.readFileSync(configFilename, "utf8"))
      return config.location
    } catch (e) {
      return null
    }
  }

  setLocation(location) {
    filename = location + "/localstorage.json"
    fs.writeFileSync(configFilename, JSON.stringify({ location: filename }))
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

  doesLocalStoreExists() {
    return !!filename
  }
}

const ls = new LocalThingsStore()
ls.init()
export default ls
