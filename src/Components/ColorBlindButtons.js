import React, { useContext, useState, useMemo } from "react";
import Button from "@material-ui/core/Button";
import PanoramaFishEye from "@material-ui/icons/PanoramaFishEye";
import ThemeContext, { themes } from "../theme-context";

export default function ColorBlindButtons() {
  const themes = useContext(ThemeContext);
  const [theme, setTheme] = useState(themes.normal);

  const change2Dueteranope = () =>
    theme === themes.dueteranope
      ? setTheme(themes.normal)
      : setTheme(themes.dueteranope);

  const change2Protanope = () =>
    theme === themes.protanope
      ? setTheme(themes.normal)
      : setTheme(themes.protanope);

  const change2Tritanerope = () =>
    theme === themes.tritanerope
      ? setTheme(themes.normal)
      : setTheme(themes.tritanerope);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PanoramaFishEye />}
        onClick={change2Dueteranope}
      >
        dueteranope
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PanoramaFishEye />}
        onclick={change2Protanope}
      >
        protanope
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PanoramaFishEye />}
        onclick={change2Tritanerope}
      >
        tritanerope
      </Button>
    </div>
  );
}
