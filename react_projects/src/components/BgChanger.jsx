import { Typography, Button, IconButton, Tooltip } from "@mui/material";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("#334255");
  return (
    <main className="container" style={{ backgroundColor: color }}>
      <header>
        <Typography variant="h4" align="center" marginBottom={"20px"}>
          Background Changer
        </Typography>
      </header>
      <div>
        <Button
          sx={{ background: "red", m: "10px" }}
          onClick={() => setColor("red")}
        >
          Red
        </Button>
        <Button
          sx={{ background: "blue", m: "10px" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </Button>
        <Button
          sx={{ background: "grey", m: "10px" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </Button>
        <Button
          sx={{ background: "yellow", m: "10px" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </Button>
        <Button
          sx={{ background: "pink", m: "10px" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </Button>
        <Tooltip title="reset">
          <IconButton aria-label="generate" onClick={() => setColor("#334255")}>
            <RestartAltOutlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    </main>
  );
}
