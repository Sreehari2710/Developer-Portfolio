import type { AboutStat } from "@/lib/data";

export function AboutRow({ stat }: { stat: AboutStat }) {
  return (
    <div
      className="flex flex-col justify-center h-full"
      style={{ paddingLeft: "35%", paddingRight: "3%" }}
    >
      <p
        className="font-blocky text-[9px] md:text-xs tracking-wide leading-none"
        style={{ color: stat.color }}
      >
        {stat.label}
      </p>
      <p className="font-blocky text-foreground text-[9px] md:text-xs leading-snug mt-1.5">
        {stat.value}
      </p>
    </div>
  );
}
