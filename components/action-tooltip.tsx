"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Side } from "@floating-ui/utils";

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: Side;
  align?: "start" | "center" | "end";
}

const ActionTooltip = ({
  label,
  children,
  side,
  align,
}: ActionTooltipProps) => {
  //group flex items-center
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger> {children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">
            {label.toLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default ActionTooltip;
