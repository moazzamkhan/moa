const configFilename = "moa-config"
let filename = "local-config"

export default class LocalThingsStoreWeb {
  setData(content) {
    window.localStorage.setItem(filename, JSON.stringify(content))
  }

  getData() {
    return JSON.parse(window.localStorage.getItem(filename))
  }

  getConfig() {
    return JSON.parse(window.localStorage.getItem(configFilename))
  }

  getConfig() {
    return { location: filename }
  }

  setConfig(config) {
    window.localStorage.setItem(configFilename, JSON.stringify(config))
  }

  init() {
    window.localStorage.setItem(filename, JSON.stringify({ things: [] }))
  }
}
