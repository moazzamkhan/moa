import React from "react"
import TextField from "material-ui/TextField"

const TextRenderer = ({ thing }) => {
  return (
    <div>
      <TextField
        disabled        
        multiline
        defaultValue={thing.name}
        fullWidth
        margin="normal"
        onClick={e => (e.target.disabled = false)}
        helperText={"Name"}
      />
      <TextField
        disabled        
        multiline
        defaultValue={thing.value}
        fullWidth
        margin="normal"
        onClick={e => (e.target.disabled = false)}
        helperText={"Value"}
      />
    </div>
  )
}

export default TextRenderer
