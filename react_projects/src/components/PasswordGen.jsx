import * as React from "react";
import "./PasswordGen.css";
import { IconButton, TextField, Slider, Checkbox } from "@mui/material";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";

export default function PasswordGen() {
  return (
    <main className="container">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div>
        <TextField id="out" labellined-basic="Outlined" variant="outlined" />
        <IconButton aria-label="generate">
          <KeyOutlinedIcon />
        </IconButton>

        <div id="features-control">
          <Slider
            size="small"
            defaultValue={10}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Checkbox name="Numerals" />
          <Checkbox label="Specail Char" />
        </div>
      </div>
    </main>
  );
}
