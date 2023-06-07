import { useState } from "react";
import NextImage from "next/image";
import { cn } from "@lib/healper";

const Image = ({ src, objectFit = "cover" }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <NextImage
      alt=""
      src={src}
      layout="fill"
      objectFit={objectFit}
      className={cn(
        "duration-700 ease-in-out group-hover:opacity-75",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default Image;
