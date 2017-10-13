const fs = require("fs")
const configFilename = "moa-config.json"
let filename = "store.json"

export default class LocalThingsStoreFile {
  setData(content) {
    fs.writeFileSync(filename, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(fs.readFileSync(filename, "utf8"))
  }
}
