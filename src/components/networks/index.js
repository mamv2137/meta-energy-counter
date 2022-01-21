import { Box, Icon, Image } from "@chakra-ui/react";

import imageDiscord from "../../assets/discord.png";
import imageInstagram from "../../assets/instagram.png";
import imageLogo from "../../assets/LogoMeta.png";
import "./index.scss";

export const Networks = ({ toggleTheme }) => {
  return (
    <Box
      className={toggleTheme ? "cotainer_networks" : "cotainer_networks_white"}
    >
      <img src={imageLogo} />
      <a href="https://discord.gg/d3As6JQfc5" target="_blank">
        <img
          className="discord"
          style={toggleTheme ? null : { backgroundColor: "gray" }}
          src={imageDiscord}
        />
      </a>
      <a
        href="https://www.instagram.com/meta_academyaxs/?hl=es-la"
        target="_blank"
      >
        <img
          className="instagram"
          style={toggleTheme ? null : { backgroundColor: "gray" }}
          src={imageInstagram}
        />
      </a>
    </Box>
  );
};
