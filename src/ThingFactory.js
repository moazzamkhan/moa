import shortid from "shortid"

class ThingFactory {
  createNote(o) {
    return this.createThing(Object.assign({ type: "Note" }, o))
  }

  createText(o) {
    return this.createThing(Object.assign({ type: "Text" }, o))
  }

  createType(o) {
    return this.createThing(Object.assign({ type: "Type" }, o))
  }

  createThing(o) {
    const d = new Date().toJSON()
    return Object.assign({ id: shortid.generate(), created: d, lastModified: d }, o)
  }
}

export default new ThingFactory()
