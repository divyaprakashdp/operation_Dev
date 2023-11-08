import * as React from "react";
import { useState } from "react";
import "./PasswordGen.css";
import {
  IconButton,
  TextField,
  Slider,
  Checkbox,
  Typography,
} from "@mui/material";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function PasswordGen() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [isNumAllowed, setNumAllowed] = useState(false);
  const [isSpecialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    // passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) str += "1234567890";
    if (isSpecialCharAllowed) str += "~!@#$%^&*_+-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isSpecialCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumAllowed, isSpecialCharAllowed, passwordGenerator]);

  return (
    <main className="container">
      <header>
        <Typography variant="h4" align="center" marginBottom={"20px"}>
          Password Generator
        </Typography>
      </header>
      <div>
        <TextField
          sx={{ width: "80%", background: "white" }}
          id="out"
          labellined-basic="Outlined"
          variant="outlined"
          value={password}
        />
        <IconButton aria-label="generate" onClick={passwordGenerator}>
          <KeyOutlinedIcon fontSize="large" />
        </IconButton>

        <IconButton aria-label="generate" onClick={copyToClipboard}>
          <ContentCopyOutlinedIcon fontSize="large" />
        </IconButton>

        <div id="features-control">
          <Slider
            sx={{ width: "50%" }}
            defaultValue={length}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event) => {
              setLength(event.target.value);
            }}
          />
          <Checkbox
            defaultChecked={isNumAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <Typography variant="h6">Numerals</Typography>
          <Checkbox
            defaultChecked={isSpecialCharAllowed}
            onChange={() => setSpecialCharAllowed((prev) => !prev)}
          />
          <Typography variant="h6">SpecialChar</Typography>
        </div>
      </div>
    </main>
  );
}
