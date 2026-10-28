import Image from "next/image";

type Props = {
  src: string | null;
  name: string;
  size: number;
  className?: string;
  priority?: boolean;
};

/** iOS風の角丸アイコン。取得できなかった場合は頭文字のタイルを表示 */
export function AppIcon({ src, name, size, className = "", priority }: Props) {
  const radius = { borderRadius: size * 0.225 };
  if (!src) {
    return (
      <span
        style={{ width: size, height: size, ...radius }}
        className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-aqua to-aqua-deep font-bold text-white ${className}`}
        aria-hidden="true"
      >
        {name.slice(0, 1)}
      </span>
    );
  }
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      priority={priority}
      style={radius}
      className={`shrink-0 shadow-[0_1px_2px_rgba(11,29,46,0.12)] ring-1 ring-black/5 ${className}`}
    />
  );
}
