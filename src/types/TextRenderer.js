import React from "react"
import TextField from "material-ui/TextField"

const TextRenderer = ({ thing }) => {
  return (
    <TextField
      disabled
      key={thing.id}
      label={thing.name}
      placeholder={thing.name}
      multiline
      defaultValue={thing.value}
      fullWidth
      margin="normal"
    />
  )
}

export default TextRenderer
