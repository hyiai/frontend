"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Check, Copy } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://hyi.ai${pathname}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className="w-fit min-w-max flex items-center text-sm font-semibold text-dark_mode-300 glass-gradient rounded-full cursor-pointer px-5 py-2.5 gap-1"
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? (
        <>
          <Check
            width={20}
            height={20}
            strokeWidth={2.0}
            className="text-success-600"
          />
          Copied
        </>
      ) : (
        <>
          <Copy width={20} height={20} />
          Copy link
        </>
      )}
    </button>
  );
}
