import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

type Platform = {
  name: string;
  baseUrl: string;
};

const platforms: Platform[] = [
  {
    name: "X (Twitter)",
    baseUrl: "https://x.com/",
  },
  {
    name: "Instagram",
    baseUrl: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    baseUrl: "https://linkedin.com/in/",
  },
  {
    name: "GitHub",
    baseUrl: "https://github.com/",
  },
  {
    name: "YouTube",
    baseUrl: "https://youtube.com/@",
  },
  {
    name: "TikTok",
    baseUrl: "https://tiktok.com/@",
  },
  {
    name: "Facebook",
    baseUrl: "https://facebook.com/",
  },
  {
    name: "Discord",
    baseUrl: "https://discord.gg/",
  },
  {
    name: "Twitch",
    baseUrl: "https://twitch.tv/",
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
