import { Box, Icon, Image } from "@chakra-ui/react";

import imageDiscord from "./discord.png";
import imageInstagram from "./instagram.png";
import imageLogo from "./LogoMeta.png";
import "./index.scss";

export const Networks = () => {
  return (
    <Box className="cotainer_networks">
      <img src={imageLogo} />
      <a href="https://discord.gg/d3As6JQfc5" target="_blank">
        <img className="discord" src={imageDiscord} />
      </a>
      <a
        href="https://www.instagram.com/meta_academyaxs/?hl=es-la"
        target="_blank"
      >
        <img className="instagram" src={imageInstagram} />
      </a>
    </Box>
  );
};
