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
    window.localStorage.setItem(filename, JSON.stringify(state))
  }
}

const state = {
  things: [
    {
      id: "ByYg5lOsW",
      type: "text",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "Name",
      value: "Moazzam Khan"
    },
    {
      id: "SkYUql_ob",
      type: "text",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "Age",
      value: "33"
    },
    {
      id: "rkf5qeOib",
      type: "text",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "Gender",
      value: "Male"
    },
    {
      id: "Hkm9qgOjZ",
      type: "text",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "Date of Birth",
      value: "26th October 1983"
    },
    {
      id: "kjh98766",
      type: "type",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "text"
    },
    {
      id: "hj7j766",
      type: "type",
      created: "2017-09-26T13:35:25.620Z",
      lastModified: "2017-09-26T13:35:17.971Z",
      name: "boolean"
    }
  ]
}
