"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface CustomDialogProps {
  dialogTitle?: string;
  dialogDescription?: string;
  dialogContentCSS?: string;
  content: ReactNode;
  children: ReactNode;
}

export default function CustomDialog({
  dialogTitle = "Privacy Policy",
  dialogDescription = "Please read the privacy policy.",
  dialogContentCSS = "w-[95dvw] max-w-[850px] max-h-[90dvh] z-200 overflow-y-scroll",
  content,
  children,
}: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={dialogContentCSS}>
        <DialogHeader className="hidden">
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
}
