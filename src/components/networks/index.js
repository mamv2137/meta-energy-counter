import { Box } from "@chakra-ui/react";

import imageDiscord from "../../assets/discord.png";
import imageInstagram from "../../assets/instagram.png";
import imageTwitch from "../../assets/twitch.png";

import imageDiscordBlack from "../../assets/discordNegro.png";
import imageInstagramBlack from "../../assets/instagramNegro.png";
import imageTwitchNegro from "../../assets/twitchNegro.png";

import imageLogo from "../../assets/LogoMeta.png";
import imageLogoBlack from "../../assets/LogoMetaNegro.png";

import "./index.scss";

export const Networks = ({ toggleTheme }) => {
  return (
    <Box
      className={toggleTheme ? "cotainer_networks" : "cotainer_networks_white"}
    >
      <img
        src={toggleTheme ? imageLogo : imageLogoBlack}
        className="logoMeta"
      />
      <a href="https://discord.gg/d3As6JQfc5" target="_blank">
        <img
          className="discord"
          src={toggleTheme ? imageDiscord : imageDiscordBlack}
        />
      </a>
      <a
        href="https://www.instagram.com/meta_academyaxs/?hl=es-la"
        target="_blank"
      >
        <img
          className="instagram"
          src={toggleTheme ? imageInstagram : imageInstagramBlack}
        />
      </a>
      <a href="https://www.twitch.tv/metacademy_" target="_blank">
        <img
          className="twitch"
          src={toggleTheme ? imageTwitch : imageTwitchNegro}
        />
      </a>
    </Box>
  );
};
