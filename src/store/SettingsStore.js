const fs = require("fs")
const configPath = "data/config.json"

export default class SettingsStore {
  setData(content) {
    fs.writeFileSync(configPath, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(fs.readFileSync(configPath, "utf8"))
  }  
}
