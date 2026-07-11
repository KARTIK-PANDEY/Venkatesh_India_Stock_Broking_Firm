"use client";

import { useState } from "react";
import { 
  Play, 
  PlayCircle, 
  Keyboard, 
  Palette, 
  LayoutTemplate, 
  Volume2, 
  MousePointer, 
  Subtitles, 
  Type, 
  Mic, 
  BookOpen, 
  Bell 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = [
  {
    id: "compilation",
    title: "Web Accessibility Perspectives (Full Compilation)",
    description: "A complete compilation of all 10 perspectives demonstrating how Web accessibility is essential for people with disabilities and useful for everyone.",
    youtubeId: "3f31oufqFSM",
    icon: PlayCircle,
    duration: "7:36 min"
  },
  {
    id: "keyboard",
    title: "Keyboard Compatibility",
    description: "People with physical disabilities, blind users, or those with temporary injuries depend on keyboard navigation. Websites should not require a mouse.",
    youtubeId: "93UgG72os8M",
    icon: Keyboard,
    duration: "0:47 min"
  },
  {
    id: "contrast",
    title: "Colors with Good Contrast",
    description: "High contrast makes text readable for users with low vision, color blindness, or anyone viewing screens in bright sunlight.",
    youtubeId: "Hui87z2Vx8o",
    icon: Palette,
    duration: "0:51 min"
  },
  {
    id: "layout",
    title: "Clear Layout and Design",
    description: "Consistent navigation grids, clear headings, and structured styling assist users with cognitive, learning, and visual impairments.",
    youtubeId: "tfkzj5VC9P8",
    icon: LayoutTemplate,
    duration: "0:48 min"
  },
  {
    id: "speech",
    title: "Text to Speech",
    description: "Synthesized speech helps blind users, screen reader dependants, and multi-taskers read digital content out loud.",
    youtubeId: "8Rn5pXCdZWU",
    icon: Volume2,
    duration: "0:44 min"
  },
  {
    id: "controls",
    title: "Large Links & Buttons",
    description: "Enlarged targets and spacing benefit mobile users, seniors, and people with motor impairments who struggle with precision.",
    youtubeId: "CzfKB3PuuIY",
    icon: MousePointer,
    duration: "0:46 min"
  },
  {
    id: "captions",
    title: "Video Captions",
    description: "Text synchronization provides captions for deaf and hard-of-hearing users, or anyone watching videos in noisy settings.",
    youtubeId: "iWO5N3n1DXU",
    icon: Subtitles,
    duration: "0:46 min"
  },
  {
    id: "customizable",
    title: "Customizable Text",
    description: "Enabling text size, font adjustments, and line-spacing scaling helps dyslexic readers and people with low vision customize their view.",
    youtubeId: "rbiI65Jcz5s",
    icon: Type,
    duration: "0:46 min"
  },
  {
    id: "voice",
    title: "Speech Recognition",
    description: "Dictation software enables hands-free computer control for users with motor control limits or temporary physical barriers.",
    youtubeId: "7RHG_XiQ0ck",
    icon: Mic,
    duration: "0:46 min"
  },
  {
    id: "understandable",
    title: "Understandable Content",
    description: "Clear terms, visual icons, structured definitions, and simple phrasing support users with learning and cognitive disabilities.",
    youtubeId: "BYRxF2yInfA",
    icon: BookOpen,
    duration: "0:45 min"
  },
  {
    id: "notifications",
    title: "Notifications & Feedback",
    description: "Timely alerts, transaction confirmations, error warnings, and clean form validation help all users complete online actions successfully.",
    youtubeId: "E1fEv4Vpexg",
    icon: Bell,
    duration: "0:46 min"
  }
];

export default function AccessibilityVideos() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-muted/30 border-y border-border/50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-4 py-1.5 inline-block">
            Universal Design
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Web Accessibility Perspectives
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Web accessibility is essential for people with disabilities and useful for everyone. Learn how modern web design choices and customization options impact daily digital experiences.
          </p>
        </div>

        {/* Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Block: Active Video Player Area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/95 border border-border/50 shadow-2xl group">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* YouTube Video Thumbnail */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={`https://img.youtube.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`}
                      alt={activeVideo.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Decorative Radial Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Pulsing Play Button */}
                    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="player"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Video Meta Info */}
            <div className="p-6 bg-background border border-border/50 rounded-2xl space-y-3">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-foreground font-display">
                  {activeVideo.title}
                </h3>
                <span className="text-xs font-semibold text-muted-foreground bg-muted py-1 px-3 rounded-full shrink-0">
                  {activeVideo.duration}
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Right Block: Scrollable Sidebar List */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Select Accessibility Topic
            </h4>
            
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {VIDEOS.map((video) => {
                const IconComponent = video.icon;
                const isActive = activeVideo.id === video.id;
                
                return (
                  <button
                    key={video.id}
                    onClick={() => {
                      setActiveVideo(video);
                      setIsPlaying(false);
                    }}
                    className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left border transition-all cursor-pointer outline-hidden ${
                      isActive 
                        ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10" 
                        : "bg-background border-border/40 hover:border-border text-foreground hover:bg-muted/40"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-muted text-primary"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold leading-tight font-display">
                        {video.title}
                      </h5>
                      <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                        isActive ? "text-white/80" : "text-muted-foreground"
                      }`}>
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
