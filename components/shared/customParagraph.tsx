import React from "react";

interface CustomParagraphProps {
  paragraph: string;
  textColor?: string;
  gapBetween?: string;
}

export default function CustomParagraph({
  paragraph,
  textColor = "",
  gapBetween = "gap-5",
}: CustomParagraphProps) {
  return (
    <div className={`flex flex-col ${gapBetween}`}>
      {paragraph.split("\n").map((text, index) => (
        <p key={index} className={`hyi-p ${textColor}`}>
          {text}
        </p>
      ))}
    </div>
  );
}
