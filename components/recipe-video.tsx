"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Card } from "@/components/ui/card";
import { Play, Pause, Maximize2 } from "lucide-react";

interface RecipeVideoProps {
  url: string;
  title: string;
}

export function RecipeVideo({ url, title }: RecipeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={isPlaying}
          controls={true}
          light={true}
          playIcon={
            <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <Play className="h-8 w-8 text-gray-900" />
            </button>
          }
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">Watch step-by-step instructions</p>
      </div>
    </Card>
  );
}