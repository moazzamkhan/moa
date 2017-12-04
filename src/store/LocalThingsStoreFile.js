const fs = require("fs")
let storePath = "data/store.json"

export default class LocalThingsStoreFile {
  setData(content) {
    fs.writeFileSync(storePath, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(fs.readFileSync(storePath, "utf8"))
  }  
}

