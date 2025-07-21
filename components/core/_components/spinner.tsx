import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LoaderIcon } from "lucide-react";
import React from "react";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
      xxl: "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type SpinnerProps = VariantProps<typeof spinnerVariants>;

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <Button size={"icon"} variant={"ghost"}>
      <LoaderIcon className={cn(spinnerVariants({ size }))} />
    </Button>
  );
};

export default Spinner;
