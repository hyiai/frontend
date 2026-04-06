"use client";
import dynamic from "next/dynamic";

const CustomLazyLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default CustomLazyLottie;
