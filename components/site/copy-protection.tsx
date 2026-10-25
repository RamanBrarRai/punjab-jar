"use client";

import { useEffect } from "react";

export function CopyProtection() {
  useEffect(() => {
    // 1. Disable Right-Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // 3. Disable Keyboard Shortcuts (Ctrl+C, Cmd+C, Ctrl+U, F12)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow copy/paste inside input and textarea fields (like your newsletter form)
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === "c" || e.key === "u" || e.key === "s") // Copy, View Source, Save
      ) {
        e.preventDefault();
      }
      
      // Disable F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
}