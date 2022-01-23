import { Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import "./index.scss";

export const SwitchTheme = ({ toggleTheme, setToggleTheme }) => {
  return (
    <>
      {toggleTheme ? (
        <SunIcon className="sunIcon" color="black" />
      ) : (
        <MoonIcon className="moonIcon" color="black" />
      )}
      <Switch
        onChange={() => setToggleTheme(toggleTheme ? false : true)}
        colorScheme="blackAlpha"
        size="lg"
        className={toggleTheme ? "switchTheme" : "switchThemeWhite"}
      />
    </>
  );
};
