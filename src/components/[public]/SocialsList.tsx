import type { MediaIconType } from "../MediaIcon";
import MediaIcon from "../MediaIcon";

const test: { icon: MediaIconType }[] = [
  { icon: "Telegram" },
  { icon: "Threads" },
  { icon: "Twitch" },
  { icon: "Facebook" },
  { icon: "Instagram" },
  { icon: "Youtube" },
  { icon: "X" },
  { icon: "Tiktok" },
  { icon: "Whatsapp" },
  { icon: "Clubhouse" },
  { icon: "Discord" },
  { icon: "Linkedin" },
];

export default function SocialsList() {
  return (
    <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-2">
      {test.map((_, i) => (
        <button
          key={i}
          className="hover:bg-carbon-800/30 flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg"
        >
          <div className="flex size-7 items-center justify-center">
            <MediaIcon icon={_.icon} className="size-full" />
          </div>
        </button>
      ))}
    </div>
  );
}
