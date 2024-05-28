import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { ReactNode } from "react";

interface HintProps {
  label: string;
  children: ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "right" | "left";
  align?: "start" | "center" | "end";
}

export const Hint = ({ label, children, asChild, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>
          {children}
        </TooltipTrigger>
        <TooltipContent className="text-black bg-white" side={side} align={align}>
          <p className="font-semibold">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}