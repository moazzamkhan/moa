import shortid from "shortid"

class ThingFactory {
  create(type, o) {
    return this["create" + type](o)
  }
  createNote(o) {
    return this.createThing(Object.assign({ type: "Note" }, o))
  }

  createText(o) {
    return this.createThing(Object.assign({ type: "Text" }, o))
  }

  createType(o) {
    return this.createThing(Object.assign({ type: "Type" }, o))
  }

  createContact(o) {
    return this.createThing(Object.assign({ type: "Contact" }, o))
  }

  createThing(o) {
    const d = new Date().toJSON()
    return Object.assign({ id: shortid.generate(), created: d, lastModified: d }, o)
  }
}

export default new ThingFactory()
