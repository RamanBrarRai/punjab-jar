import { cn } from "@/lib/utils";

export function DiscountBadge({ discount, className }: { discount?: number; className?: string }) {
  if (!discount) return null;

  return (
    <span 
      className={cn(
        "rounded-full border-2 border-ink bg-pink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-pop-sm",
        className
      )}
    >
      {discount}% OFF
    </span>
  );
}