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
  { icon: "Github" },
  { icon: "Linkedin" },
];

export default function SocialsList() {
  return (
    <div className="mx-auto flex max-w-md flex-row flex-wrap items-center justify-center gap-1">
      {test.map((_, i) => (
        <button
          key={i}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full hover:scale-105"
        >
          <div className="flex size-full items-center justify-center overflow-hidden text-white">
            <span className="flex shrink-0 items-center justify-center rounded-sm">
              <MediaIcon icon={_.icon} />
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
