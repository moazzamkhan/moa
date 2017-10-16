const multiple = true
const labeled = true
export const Contact = {
  name: "Contact",
  properties: [
    {
      name: "Name",
      type: "PersonName"
    },
    {
      name: "DateOfBirth",
      type: "Date"
    },
    {
      name: "Mobile",
      type: "Text",
      multiple,
      labeled
    },
    {
      name: "Phone",
      type: "Text",
      multiple,
      labeled
    },
    {
      name: "Email",
      type: "Text",
      multiple,
      labeled
    },
    {
      name: "Address",
      type: "Address",
      multiple,
      labeled
    },
    {
      name: "Notes",
      type: "Text"
    }
  ]
}
