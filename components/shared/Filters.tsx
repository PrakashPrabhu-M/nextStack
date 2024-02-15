import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Filter {
  label: string;
  value: string;
}

interface Props {
  className?: string;
  selectTriggerClass?: string;
  values: Filter[];
}

const Filters = ({ className, values, selectTriggerClass }: Props) => {
  return (
    <div className={cn(className)}>
      <Select>
        <SelectTrigger className={`${selectTriggerClass}`}>
          <SelectValue placeholder="Select a Filter" />
        </SelectTrigger>
        <SelectContent>
          {values.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
