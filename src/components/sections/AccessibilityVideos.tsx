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
  Bell,
  Download,
  Search,
  FileText,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TranscriptItem {
  audio: string;
  visual: string;
}

interface VideoData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  icon: React.ElementType;
  duration: string;
  summary: string;
  transcript: TranscriptItem[];
}

const VIDEOS: VideoData[] = [
  {
    id: "compilation",
    title: "Web Accessibility Perspectives (Full Compilation)",
    description: "A complete compilation of all 10 perspectives demonstrating how Web accessibility is essential for people with disabilities and useful for everyone.",
    youtubeId: "3f31oufqFSM",
    icon: PlayCircle,
    duration: "7:36 min",
    summary: "Demonstrates how design choices like keyboard compatibility, high contrast, clean layouts, captions, and text customization impact daily digital interactions across physical, visual, auditory, and cognitive user needs.",
    transcript: [
      { audio: "Web Accessibility Perspectives: Essential for some, useful for all.", visual: "Introductory title card showcasing W3C Web Accessibility Initiative logo." },
      { audio: "Keyboard Compatibility: Many people use only the keyboard to navigate websites — whether due to physical disability or a broken mouse.", visual: "A user navigating a form using only the Tab key, highlighting focus indicators." },
      { audio: "Colors with Good Contrast: High contrast makes text readable for users with low vision or anyone outside in bright sunlight.", visual: "Demonstration of low contrast text becoming crisp and readable when high contrast mode is toggled." },
      { audio: "Clear Layout and Design: Consistent navigation grids and clear headings help users with cognitive or visual impairments.", visual: "Side-by-side visual of a cluttered site versus a cleanly structured layout." },
      { audio: "Text to Speech: Synthesized speech allows blind users and screen reader dependants to hear web content out loud.", visual: "Screen reader cursor moving through text paragraphs, highlighting each spoken line." },
      { audio: "Large Links & Buttons: Large touch targets assist seniors and users with motor tremors.", visual: "Cursor clicking enlarged button targets without slipping off the control." },
      { audio: "Video Captions: Synchronized captions benefit deaf individuals and viewers in quiet surroundings.", visual: "Captions displaying at the bottom of the video frame in sync with spoken dialogue." },
      { audio: "Customizable Text: Text scaling and font adjustments support readers with dyslexia or low vision.", visual: "User adjusting font size slider to enlarge paragraph text smoothly." },
      { audio: "Speech Recognition: Dictation software allows hands-free voice control of forms and buttons.", visual: "A user speaking command phrases while form fields populate automatically." },
      { audio: "Understandable Content: Plain language and structured definitions help all readers comprehend complex topics.", visual: "Illustration of clear glossary popups and bullet points." },
      { audio: "Notifications & Feedback: Clear error alerts and confirmation banners ensure successful form completion.", visual: "A green confirmation checkmark popping up after valid form submission." }
    ]
  },
  {
    id: "keyboard",
    title: "Keyboard Compatibility",
    description: "People with physical disabilities, blind users, or those with temporary injuries depend on keyboard navigation. Websites should not require a mouse.",
    youtubeId: "93UgG72os8M",
    icon: Keyboard,
    duration: "0:47 min",
    summary: "Explains why all interactive elements must be usable via keyboard navigation without requiring mouse interaction.",
    transcript: [
      { audio: "Not being able to use your computer because your mouse doesn't work is frustrating.", visual: "A man drops his computer mouse off the desk. The mouse breaks." },
      { audio: "Many people use only the keyboard to navigate websites — either through preference or circumstance.", visual: "Close-up of keyboard typing." },
      { audio: "Whether it's temporarily limited mobility, a permanent physical disability, or simply a broken mouse, the result is the same.", visual: "A woman with her arm in a sling typing on a keyboard, attempting to select a date calendar." },
      { audio: "Websites and apps need to be operable by keyboard.", visual: "The user switches to an accessible form where dates can be typed directly." },
      { audio: "Web accessibility: Essential for some, useful for all.", visual: "W3C Web Accessibility Initiative concluding logo." }
    ]
  },
  {
    id: "contrast",
    title: "Colors with Good Contrast",
    description: "High contrast makes text readable for users with low vision, color blindness, or anyone viewing screens in bright sunlight.",
    youtubeId: "Hui87z2Vx8o",
    icon: Palette,
    duration: "0:51 min",
    summary: "Shows the necessity of sufficient contrast between text and background colors for effortless reading.",
    transcript: [
      { audio: "Trying to read text with low contrast can be painful and frustrating.", visual: "A person squinting at a smartphone screen in direct sunlight." },
      { audio: "Sufficient contrast between foreground text and background color makes reading effortless for everyone.", visual: "Text color darkens from light grey to sharp black, improving readability immediately." },
      { audio: "Web accessibility: Essential for some, useful for all.", visual: "W3C perspective video conclusion banner." }
    ]
  },
  {
    id: "layout",
    title: "Clear Layout and Design",
    description: "Consistent navigation grids, clear headings, and structured styling assist users with cognitive, learning, and visual impairments.",
    youtubeId: "tfkzj5VC9P8",
    icon: LayoutTemplate,
    duration: "0:48 min",
    summary: "Illustrates how structured headings and predictable layouts assist cognitive and visual navigation.",
    transcript: [
      { audio: "A cluttered website with scattered links makes finding information confusing.", visual: "User searching through disorganized blocks of text." },
      { audio: "Clear headings, organized sections, and consistent menus allow users to orient themselves quickly.", visual: "Page reorganizes into structured headings H1, H2, and clean card grids." },
      { audio: "Web accessibility: Essential for some, useful for all.", visual: "W3C logo transition." }
    ]
  },
  {
    id: "speech",
    title: "Text to Speech",
    description: "Synthesized speech helps blind users, screen reader dependants, and multi-taskers read digital content out loud.",
    youtubeId: "8Rn5pXCdZWU",
    icon: Volume2,
    duration: "0:44 min",
    summary: "Demonstrates how screen readers translate digital text into spoken words for blind and visually impaired users.",
    transcript: [
      { audio: "Text to speech software reads aloud the text displayed on digital screens.", visual: "A blind person listening to headphones while navigating a website with keyboard shortcuts." },
      { audio: "Proper code structure enables screen readers to accurately pronounce headings, links, and image descriptions.", visual: "Screen reader focus box moving from heading to paragraph." }
    ]
  },
  {
    id: "controls",
    title: "Large Links & Buttons",
    description: "Enlarged targets and spacing benefit mobile users, seniors, and people with motor impairments who struggle with precision.",
    youtubeId: "CzfKB3PuuIY",
    icon: MousePointer,
    duration: "0:46 min",
    summary: "Highlights the benefit of adequately sized clickable areas for touch screens and users with motor difficulties.",
    transcript: [
      { audio: "Tiny links placed too close together lead to accidental clicks.", visual: "A user on a bus trying to tap a tiny link on a smartphone screen." },
      { audio: "Larger touch targets and clear spacing make interaction reliable for everyone.", visual: "Buttons enlarge with generous padding, making tapping accurate." }
    ]
  },
  {
    id: "captions",
    title: "Video Captions",
    description: "Text synchronization provides captions for deaf and hard-of-hearing users, or anyone watching videos in noisy settings.",
    youtubeId: "iWO5N3n1DXU",
    icon: Subtitles,
    duration: "0:46 min",
    summary: "Explains how video captions enable deaf users and viewers in noisy or quiet environments to consume video content.",
    transcript: [
      { audio: "Captions display spoken dialogue and sound effects as synchronized on-screen text.", visual: "Video displaying spoken words at the bottom in high-contrast text overlay." },
      { audio: "Captions are essential for people who are deaf or hard of hearing, and convenient in noisy public spaces.", visual: "User watching video on a train with captions turned on." }
    ]
  },
  {
    id: "customizable",
    title: "Customizable Text",
    description: "Enabling text size, font adjustments, and line-spacing scaling helps dyslexic readers and people with low vision customize their view.",
    youtubeId: "rbiI65Jcz5s",
    icon: Type,
    duration: "0:46 min",
    summary: "Shows how flexible font sizing, spacing, and typography controls allow readers to tailor content presentation.",
    transcript: [
      { audio: "Being able to change font size, spacing, and colors helps people read comfortably.", visual: "Text enlarging and letter spacing widening dynamically on screen." },
      { audio: "Flexible design supports individual reading preferences across devices.", visual: "Reader adjusting line height setting for improved clarity." }
    ]
  },
  {
    id: "voice",
    title: "Speech Recognition",
    description: "Dictation software enables hands-free computer control for users with motor control limits or temporary physical barriers.",
    youtubeId: "7RHG_XiQ0ck",
    icon: Mic,
    duration: "0:46 min",
    summary: "Demonstrates hands-free voice control for operating web forms and clicking interactive elements.",
    transcript: [
      { audio: "Speech recognition software allows users to control their computer using spoken commands.", visual: "A programmer with repetitive strain injury speaking commands into a microphone." },
      { audio: "Properly labeled buttons and fields ensure voice commands execute accurately.", visual: "Focus box jumping to 'Submit Application' when spoken." }
    ]
  },
  {
    id: "understandable",
    title: "Understandable Content",
    description: "Clear terms, visual icons, structured definitions, and simple phrasing support users with learning and cognitive disabilities.",
    youtubeId: "BYRxF2yInfA",
    icon: BookOpen,
    duration: "0:45 min",
    summary: "Focuses on plain language, intuitive icons, and clear glossaries to enhance comprehension.",
    transcript: [
      { audio: "Complex jargon and unexplained acronyms create barriers for readers.", visual: "A user looking puzzled at a dense legal paragraph." },
      { audio: "Using clear terminology, visual icons, and concise sentences makes content accessible to all.", visual: "Paragraph simplified with bullet points and supporting icons." }
    ]
  },
  {
    id: "notifications",
    title: "Notifications & Feedback",
    description: "Timely alerts, transaction confirmations, error warnings, and clean form validation help all users complete online actions successfully.",
    youtubeId: "E1fEv4Vpexg",
    icon: Bell,
    duration: "0:46 min",
    summary: "Highlights the importance of clear status messages, error alerts, and submission feedback.",
    transcript: [
      { audio: "Without clear feedback, users cannot tell if a form was submitted or if errors occurred.", visual: "User clicking a button without receiving any visual update." },
      { audio: "Proactive status announcements and descriptive error messages guide users to success.", visual: "A clear red error message highlighting an incomplete field, followed by a green success banner." }
    ]
  }
];

export default function AccessibilityVideos() {
  const [activeVideo, setActiveVideo] = useState<VideoData>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcriptSearch, setTranscriptSearch] = useState("");

  const handleDownloadTranscript = () => {
    const lines = activeVideo.transcript
      .map((item, idx) => `[${idx + 1}] AUDIO: ${item.audio}\n    VISUAL: ${item.visual}`)
      .join("\n\n");

    const content = `==================================================\nTITLE: ${activeVideo.title}\nDURATION: ${activeVideo.duration}\nYOUTUBE LINK: https://www.youtube.com/watch?v=${activeVideo.youtubeId}\n==================================================\n\nSUMMARY:\n${activeVideo.summary}\n\n==================================================\nTRANSCRIPT WITH VISUAL DESCRIPTIONS:\n==================================================\n\n${lines}\n`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeVideo.id}-transcript.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredTranscript = activeVideo.transcript.filter(
    (item) =>
      item.audio.toLowerCase().includes(transcriptSearch.toLowerCase()) ||
      item.visual.toLowerCase().includes(transcriptSearch.toLowerCase())
  );

  return (
    <section className="bg-muted/30 border-y border-border/50 py-20 md:py-28 overflow-hidden" aria-label="Web Accessibility Videos">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Screen Reader Live Region for Announcements */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Currently selected video: {activeVideo.title}. Duration: {activeVideo.duration}.
        </div>

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
                      alt={`Play ${activeVideo.title}`}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Decorative Radial Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Pulsing Play Button */}
                    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only">Play Video</span>
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
            <div className="p-6 bg-background border border-border/50 rounded-2xl space-y-4 shadow-sm">
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

              {/* Summary Box */}
              <div className="p-4 bg-muted/40 rounded-xl border border-border/40 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Visual & Content Summary
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {activeVideo.summary}
                </p>
              </div>

              {/* Transcript Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="flex items-center gap-2 text-xs font-bold text-primary hover:underline cursor-pointer"
                  aria-expanded={showTranscript}
                  aria-controls="video-transcript-panel"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  {showTranscript ? "Hide Text Transcript" : "View Full Text Transcript"}
                  {showTranscript ? (
                    <ChevronUp className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>

                <button
                  onClick={handleDownloadTranscript}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors cursor-pointer"
                  title="Download Transcript as TXT"
                >
                  <Download className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  Download Transcript (TXT)
                </button>
              </div>
            </div>

            {/* Expandable Searchable HTML Transcript Panel (WCAG 1.2.1) */}
            {showTranscript && (
              <div 
                id="video-transcript-panel" 
                className="p-6 bg-background border border-border/50 rounded-2xl space-y-4 shadow-sm animate-in fade-in duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      Text Transcript with Visual Descriptions
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Searchable transcript for audio and on-screen visuals
                    </p>
                  </div>

                  {/* Search Input for Transcript */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                    <input
                      type="text"
                      placeholder="Search transcript..."
                      value={transcriptSearch}
                      onChange={(e) => setTranscriptSearch(e.target.value)}
                      aria-label="Search within video transcript"
                      className="w-full bg-muted/40 border border-border/50 rounded-lg h-9 pl-9 pr-3 text-xs font-medium focus:ring-2 focus:ring-primary outline-hidden"
                    />
                  </div>
                </div>

                {/* Transcript List */}
                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredTranscript.map((item, idx) => (
                    <div key={idx} className="p-3 bg-muted/30 border border-border/30 rounded-xl space-y-1 text-xs">
                      <p className="font-semibold text-foreground">
                        <strong className="text-primary font-bold">Audio:</strong> {item.audio}
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground/70 font-semibold">Visual:</strong> {item.visual}
                      </p>
                    </div>
                  ))}

                  {filteredTranscript.length === 0 && (
                    <p className="text-xs text-muted-foreground italic py-4 text-center">
                      No matching lines found in transcript.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Block: Scrollable Sidebar List */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Select Accessibility Topic
            </h4>
            
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar" role="list">
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
                    role="listitem"
                    aria-current={isActive ? "true" : undefined}
                    className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isActive 
                        ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10" 
                        : "bg-background border-border/40 hover:border-border text-foreground hover:bg-muted/40"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isActive ? "bg-white/20 text-white" : "bg-muted text-primary"
                    }`}>
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
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
