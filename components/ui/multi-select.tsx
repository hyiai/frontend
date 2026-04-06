"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiSelectOption {
  id?: string;
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  maxDisplayCount?: number;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function MultiSelect({
  options,
  selected,
  onSelectionChange,
  placeholder = "Select items...",
  searchPlaceholder = "Search...",
  emptyMessage = "No items found.",
  maxDisplayCount = 3,
  className,
  disabled = false,
  loading = false,
  searchQuery,
  onSearchChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internalSearchQuery, setInternalSearchQuery] = React.useState("");

  // Use external search query if provided, otherwise use internal
  const currentSearchQuery =
    searchQuery !== undefined ? searchQuery : internalSearchQuery;
  const handleSearchChange = onSearchChange || setInternalSearchQuery;

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(currentSearchQuery.toLowerCase())
  );

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelectionChange(newSelected);
  };

  const getDisplayText = () => {
    if (selected.length === 0) return placeholder;
    if (selected.length <= maxDisplayCount) {
      return selected
        .map(
          (value) => options.find((opt) => opt.value === value)?.label || value
        )
        .join(", ");
    }
    return `${selected.length} items selected`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between text-left font-normal",
            disabled && "cursor-not-allowed opacity-60",
            className
          )}
          disabled={disabled || loading}
        >
          <div className="flex-1 truncate">
            {loading ? "Loading..." : getDisplayText()}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 popover-content">
        <Command>
          <CommandInput
            placeholder={searchPlaceholder}
            value={currentSearchQuery}
            onValueChange={handleSearchChange}
          />
          <CommandEmpty>
            {currentSearchQuery.length === 0 ? "" : emptyMessage}
          </CommandEmpty>
          <CommandList>
            <CommandGroup className="max-h-64 overflow-y-auto">
              {filteredOptions.map((option) => (
                <CommandItem
                  key={`${option.value} ${option.label}`}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// Optional: Multi-select with badges display
export function MultiSelectWithBadges({
  options,
  selected,
  onSelectionChange,
  placeholder = "Select items...",
  searchPlaceholder = "Search...",
  emptyMessage = "No items found.",
  className,
  disabled = false,
  loading = false,
  searchQuery,
  onSearchChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internalSearchQuery, setInternalSearchQuery] = React.useState("");

  const currentSearchQuery =
    searchQuery !== undefined ? searchQuery : internalSearchQuery;
  const handleSearchChange = onSearchChange || setInternalSearchQuery;

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(currentSearchQuery.toLowerCase())
  );

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelectionChange(newSelected);
    handleSearchChange("");
  };

  const handleRemove = (value: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const newSelected = selected.filter((item) => item !== value);
    onSelectionChange(newSelected);
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between rounded-full text-white placeholder:text-gray-400 bg-transparent hover:bg-transparent hover:text-dark_mode-300 border border-white/40",
              disabled && "cursor-not-allowed opacity-60",
              className
            )}
            disabled={disabled || loading}
          >
            <span className="truncate">
              {loading
                ? "Loading..."
                : selected.length > 0
                ? `${selected.length} selected`
                : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "w-full p-0 bg-transparent backdrop-blur-md border-gray-600 popover-content",
            "max-h-[60vh] overflow-y-auto sm:max-h-64"
          )}
          align="start"
          sideOffset={4}
        >
          <Command className="bg-transparent backdrop-blur-md">
            <CommandInput
              placeholder={searchPlaceholder}
              value={currentSearchQuery}
              onValueChange={handleSearchChange}
              className="text-white placeholder:text-gray-400"
            />
            <CommandEmpty className="text-gray-400 p-4">
              {currentSearchQuery.length === 0 ? "" : emptyMessage}
            </CommandEmpty>
            <CommandList>
              <CommandGroup className="max-h-64 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={`${option.id} ${option.value}`}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    className="text-white hover:bg-gray-700"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected.includes(option.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Display selected items as badges */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {selected.map((value) => {
            const option = options.find((opt) => opt.value === value);
            return (
              <Badge
                key={value}
                variant="secondary"
                className="text-xs flex items-center gap-1 text-white-400 px-3 py-1.5 bg-transparent border border-white/50 rounded-full"
              >
                <span>{option?.label || value}</span>
                <button
                  type="button"
                  onClick={(e) => handleRemove(value, e)}
                  className="ml-1 h-3 w-3 cursor-pointer hover:text-red-500 flex items-center justify-center"
                  aria-label={`Remove ${option?.label || value}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
