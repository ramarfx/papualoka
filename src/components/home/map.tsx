"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MAP_PATHS } from "./map-paths";

// Coordinates scaled up by 1.45x and centered inside the 800x500 container
const MAP_LAYOUT = [
  { id: "papuabaratdaya", name: "Papua Barat Daya", x: 68, y: 12, w: 188.5 },
  { id: "papuabarat", name: "Papua Barat", x: 204.3, y: 58.4, w: 174 },
  { id: "papuatengah", name: "Papua Tengah", x: 347.85, y: 157, w: 213.15 },
  { id: "papuapegunungan", name: "Papua Pegunungan", x: 526.2, y: 167.15, w: 203 },
  { id: "papuaselatan", name: "Papua Selatan", x: 518.95, y: 251.25, w: 213.15 },
  { id: "papua", name: "Papua", x: 360.9, y: 55.5, w: 365.4 },
];

interface InteractiveMapProps {
  onHoverProvince?: (id: string | null) => void;
  onClickProvince?: (id: string | null) => void;
  selectedId?: string | null;
  setSelectedId?: (id: string | null) => void;
}

export default function InteractiveMap({
  onHoverProvince,
  onClickProvince,
  selectedId: propSelectedId,
  setSelectedId: propSetSelectedId,
}: InteractiveMapProps) {
  const [localSelectedId, setLocalSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedId = propSelectedId !== undefined ? propSelectedId : localSelectedId;
  const setSelectedId = propSetSelectedId !== undefined ? propSetSelectedId : setLocalSelectedId;

  // Calculate center coordinates of each province for the zoom function
  const provinceCenters = useMemo(() => {
    const centers: Record<string, { x: number; y: number }> = {};
    MAP_LAYOUT.forEach((p) => {
      const pathData = MAP_PATHS[p.id];
      if (!pathData) return;
      
      const aspect = pathData.height / pathData.width;
      const h = p.w * aspect;
      
      centers[p.id] = {
        x: p.x + p.w / 2,
        y: p.y + h / 2,
      };
    });
    return centers;
  }, []);

  // Use callbacks for handlers to prevent inline function recreation on every render (Performance Best Practice)
  const handleProvinceClick = useCallback((id: string) => {
    const nextId = selectedId === id ? null : id;
    setSelectedId(nextId);
    if (onClickProvince) {
      onClickProvince(nextId);
    }
  }, [selectedId, setSelectedId, onClickProvince]);

  const handleHoverStart = useCallback((id: string) => {
    setHoveredId(id);
    if (onHoverProvince) onHoverProvince(id);
  }, [onHoverProvince]);

  const handleHoverEnd = useCallback(() => {
    setHoveredId(null);
    if (onHoverProvince) onHoverProvince(null);
  }, [onHoverProvince]);

  const handleResetZoom = useCallback(() => {
    setSelectedId(null);
    if (onClickProvince) onClickProvince(null);
  }, [setSelectedId, onClickProvince]);

  // Determine active zoom transform parameters
  const activeCenter = selectedId ? provinceCenters[selectedId] : null;
  const zoomScale = selectedId ? 1.75 : 1;
  const zoomX = activeCenter ? 400 - activeCenter.x : 0;
  const zoomY = activeCenter ? 250 - activeCenter.y : 0;
  const transformOrigin = activeCenter ? `${activeCenter.x}px ${activeCenter.y}px` : "center center";

  return (
    <div className="relative w-full aspect-[800/500] max-w-[800px] mx-auto select-none overflow-hidden">
      {/* Outer wrapper */}
      <div className="w-full h-full">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner motion.g handles zoom in viewBox units, perfectly responsive! */}
          <motion.g
            animate={{
              scale: zoomScale,
              x: zoomX,
              y: zoomY,
            }}
            style={{ transformOrigin }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {MAP_LAYOUT.map((p) => {
              const pathData = MAP_PATHS[p.id];
              if (!pathData) return null;

              const isHovered = hoveredId === p.id;
              const isSelected = selectedId === p.id;
              const aspect = pathData.height / pathData.width;
              const h = p.w * aspect;

              return (
                <motion.g
                  key={p.id}
                  id={p.id}
                  className="cursor-pointer"
                  onClick={() => handleProvinceClick(p.id)}
                  onHoverStart={() => handleHoverStart(p.id)}
                  onHoverEnd={handleHoverEnd}
                  // Avoid using scale on SVG g elements to prevent clipping/layout artifacts.
                  // We rely purely on crisp color and stroke transitions for a "clean" feel.
                  animate={{ zIndex: isSelected || isHovered ? 30 : 10 }}
                >
                  <svg
                    x={p.x}
                    y={p.y}
                    width={p.w}
                    height={h}
                    viewBox={pathData.viewBox}
                  >
                    {pathData.paths.map((pData, idx) => (
                      <motion.path
                        key={idx}
                        d={pData.d}
                        initial={false}
                        animate={{
                          fill: isSelected
                            ? "rgba(211, 183, 69, 0.4)" // Brand Gold fill when selected
                            : isHovered
                            ? "rgba(211, 183, 69, 0.15)" // Subtle Gold fill when hovered
                            : "rgba(16, 185, 129, 0.08)", // Original emerald green unselected state
                          stroke: isSelected || isHovered
                            ? "#D3B745" // Vibrant Gold border
                            : "rgba(16, 185, 129, 0.25)", // Original subtle green border
                          strokeWidth: isSelected ? 2 : isHovered ? 1.5 : 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          filter: isSelected
                            ? "drop-shadow(0 0 12px rgba(211, 183, 69, 0.6))"
                            : isHovered
                            ? "drop-shadow(0 0 8px rgba(211, 183, 69, 0.3))"
                            : "none",
                        }}
                        vectorEffect="non-scaling-stroke" // CRITICAL: keeps strokes 1px thin even when map zooms in
                        strokeLinecap={pData.strokeLinecap as any}
                        strokeLinejoin={pData.strokeLinejoin as any}
                      />
                    ))}
                  </svg>
                </motion.g>
              );
            })}
          </motion.g>
        </svg>
      </div>

      {/* Floating UI overlay for displaying hovered/selected province name */}
      <AnimatePresence>
        {(selectedId || hoveredId) && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 left-6 font-sans z-30 bg-[#1F1F1F]/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl pointer-events-none"
          >
            <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase block mb-1 font-semibold">
              {selectedId ? "Provinsi Terpilih" : "Wilayah"}
            </span>
            <h4 className="text-[#D3B745] font-bold text-lg tracking-wider uppercase">
              {selectedId
                ? MAP_LAYOUT.find((p) => p.id === selectedId)?.name
                : MAP_LAYOUT.find((p) => p.id === hoveredId)?.name}
            </h4>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom reset button when zoomed in */}
      <AnimatePresence>
        {selectedId && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={handleResetZoom}
            className="absolute top-6 right-6 bg-[#1F1F1F]/80 backdrop-blur-md hover:bg-[#2A2A2A] active:scale-95 transition-all text-white font-sans text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full border border-white/10 cursor-pointer z-30 shadow-xl"
          >
            Reset Zoom
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
