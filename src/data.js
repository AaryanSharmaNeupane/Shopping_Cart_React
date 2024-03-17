import headset from "./assets/images/headset.avif";
import keyboard from "./assets/images/keyboard.avif";
import laptop from "./assets/images/laptop.avif";
import microphone from "./assets/images/microphone.avif";
import mouse from "./assets/images/mouse.avif";
import speaker from "./assets/images/speaker.avif";
import tablet from "./assets/images/tablet.avif";

const items = [
  {
    id: Math.floor(Math.random() * 10000),
    title: "Immersive Gaming Headset",
    description:
      "Experience sound like never before with our cutting-edge gaming headset. Dive into your favorite games and feel every explosion, every footstep, and every whisper with crystal-clear audio.",
    image: headset,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Mechanical Typing Bliss",
    description:
      "Elevate your typing experience with our mechanical keyboard. Enjoy tactile switches and customizable RGB lighting, making typing not just a task, but a joy.",
    image: keyboard,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Ultimate Productivity Laptop",
    description:
      "Supercharge your productivity with our powerhouse laptop. Whether crunching numbers or editing videos, this laptop delivers speed and efficiency.",
    image: laptop,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Professional-Grade Microphone",
    description:
      "Capture every sound with precision using our professional-grade microphone. Enjoy studio-quality sound reproduction and bid farewell to background noise.",
    image: microphone,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Wireless Gaming Mouse",
    description:
      "Dominate the battlefield with our wireless gaming mouse. Experience lightning-fast response times and precision tracking for ultimate gaming performance.",
    image: mouse,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Immersive Surround Sound Speaker System",
    description:
      "Turn your room into a theater with our surround sound speaker system. Enjoy cinematic audio quality from movies to gaming and music.",
    image: speaker,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "Versatile Tablet with Stylus",
    description:
      "Unleash your creativity anywhere, anytime with our versatile tablet and stylus. From sketching ideas to taking notes, this tablet is your ultimate companion.",
    image: tablet,
  },
];
export default items;
