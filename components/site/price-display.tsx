import { formatPrice } from "@/lib/pickles";
import { cn } from "@/lib/utils";

type PriceDisplayProps = {
  price: number;
  originalPrice?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "row" | "col";
};

export function PriceDisplay({ 
  price, 
  originalPrice, 
  className, 
  size = "md",
  layout = "row"
}: PriceDisplayProps) {
  
  const sizeClasses = {
    sm: "text-sm font-bold",
    md: "text-xl font-extrabold",
    lg: "text-2xl font-extrabold",
    xl: "text-4xl font-extrabold",
  };

  return (
    <div className={cn(
      "flex gap-1.5",
      layout === "col" ? "flex-col items-start" : "items-baseline",
      className
    )}>
      <span className={cn("leading-none", sizeClasses[size])}>
        {formatPrice(price)}
      </span>
      
      {originalPrice && originalPrice > price && (
        <span className={cn(
          "opacity-50 line-through font-semibold",
          size === "xl" ? "text-lg" : size === "lg" ? "text-sm" : "text-xs"
        )}>
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}