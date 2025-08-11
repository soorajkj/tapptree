import { type MediaIconType } from "@/components/MediaIcon";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

type Platform = {
  name: string;
  baseUrl: string;
  icon: MediaIconType;
};

const platforms: Platform[] = [
  {
    name: "X (Twitter)",
    baseUrl: "https://x.com/",
    icon: "X",
  },
  {
    name: "Instagram",
    baseUrl: "https://instagram.com/",
    icon: "Instagram",
  },
  {
    name: "LinkedIn",
    baseUrl: "https://linkedin.com/in/",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    baseUrl: "https://github.com/",
    icon: "Github",
  },
  {
    name: "YouTube",
    baseUrl: "https://youtube.com/@",
    icon: "Youtube",
  },
  {
    name: "TikTok",
    baseUrl: "https://tiktok.com/@",
    icon: "Tiktok",
  },
  {
    name: "Facebook",
    baseUrl: "https://facebook.com/",
    icon: "Facebook",
  },
  {
    name: "Discord",
    baseUrl: "https://discord.gg/",
    icon: "Discord",
  },
  {
    name: "Twitch",
    baseUrl: "https://twitch.tv/",
    icon: "Twitch",
  },
];

async function main() {
  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { name: platform.name },
      update: {},
      create: platform,
    });
  }

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
