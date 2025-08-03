"use client";

import React from "react";
import Telegram from "public/icons/telegram.svg";
import Twitch from "public/icons/twitch.svg";
import Threads from "public/icons/threads.svg";
import Instagram from "public/icons/instagram.svg";
import Facebook from "public/icons/facebook.svg";
import Youtube from "public/icons/youtube.svg";
import X from "public/icons/x.svg";
import Tiktok from "public/icons/tiktok.svg";
import Whatsapp from "public/icons/whatsapp.svg";
import Clubhouse from "public/icons/clubhouse.svg";
import Discord from "public/icons/discord.svg";
import Github from "public/icons/github.svg";
import Linkedin from "public/icons/linkedin.svg";

export const mediaIcons = {
  Telegram,
  Twitch,
  Threads,
  Instagram,
  Facebook,
  Youtube,
  X,
  Tiktok,
  Whatsapp,
  Clubhouse,
  Discord,
  Github,
  Linkedin,
};

export type MediaIconType = keyof typeof mediaIcons;

export interface MediaIconProps extends React.ComponentProps<"svg"> {
  icon: MediaIconType;
}

export default function MediaIcon({ icon, ...props }: MediaIconProps) {
  const Component = mediaIcons[icon];

  if (!icon) return null;

  return <Component {...props} />;
}
