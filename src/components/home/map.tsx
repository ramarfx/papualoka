"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
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

  const handleProvinceClick = (id: string) => {
    const nextId = selectedId === id ? null : id;
    setSelectedId(nextId);
    if (onClickProvince) {
      onClickProvince(nextId);
    }
  };

  // Determine active zoom transform parameters
  const activeCenter = selectedId ? provinceCenters[selectedId] : null;
  const zoomScale = selectedId ? 1.75 : 1;
  const zoomX = activeCenter ? 400 - activeCenter.x : 0;
  const zoomY = activeCenter ? 250 - activeCenter.y : 0;
  const transformOrigin = activeCenter ? `${activeCenter.x}px ${activeCenter.y}px` : "center center";

  return (
    <div className="relative w-full aspect-[800/500] max-w-[800px] mx-auto select-none overflow-hidden">
      {/* Outer wrapper to handle smooth animations and transitions */}
      <motion.div
        className="w-full h-full"
        animate={{
          scale: zoomScale,
          x: zoomX,
          y: zoomY,
        }}
        style={{
          transformOrigin,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 22,
        }}
      >
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {MAP_LAYOUT.map((p) => {
            const pathData = MAP_PATHS[p.id];
            if (!pathData) return null;

            const isHovered = hoveredId === p.id;
            const isSelected = selectedId === p.id;
            
            // Calculate proportional height for viewBox matching
            const aspect = pathData.height / pathData.width;
            const h = p.w * aspect;

            return (
              <motion.g
                key={p.id}
                id={p.id}
                className="cursor-pointer"
                onClick={() => handleProvinceClick(p.id)}
                onHoverStart={() => {
                  setHoveredId(p.id);
                  if (onHoverProvince) onHoverProvince(p.id);
                }}
                onHoverEnd={() => {
                  setHoveredId(null);
                  if (onHoverProvince) onHoverProvince(null);
                }}
                whileHover={{
                  scale: isSelected ? 1 : 1.02,
                  zIndex: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                {/* Embedded inner SVG representing the province */}
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
                      animate={{
                        fill: isSelected
                          ? "rgba(211, 183, 69, 0.35)" // Brand Gold when selected
                          : isHovered
                          ? "rgba(16, 185, 129, 0.35)" // Brand Emerald when hovered
                          : "rgba(16, 185, 129, 0.08)", // Premium dark glass fill
                        stroke: isSelected
                          ? "#D3B745" // Vibrant Gold border
                          : isHovered
                          ? "#34D399" // Vibrant Emerald border
                          : "rgba(16, 185, 129, 0.25)", // Subtle dark green border
                        strokeWidth: isHovered || isSelected ? 1.5 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        filter: isSelected
                          ? "drop-shadow(0 0 8px rgba(211, 183, 69, 0.5))"
                          : isHovered
                          ? "drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))"
                          : "none",
                      }}
                      strokeLinecap={pData.strokeLinecap as any}
                      strokeLinejoin={pData.strokeLinejoin as any}
                    />
                  ))}
                </svg>
              </motion.g>
            );
          })}
        </svg>
      </motion.div>

      {/* Floating UI overlay for displaying hovered/selected province name */}
      <div className="absolute bottom-4 left-6 pointer-events-none font-sans z-30">
        <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase block mb-1">
          {selectedId ? "Provinsi Terpilih" : "Berikut Wilayah"}
        </span>
        <h4 className="text-[#D3B745] font-bold text-lg tracking-wide uppercase transition-all duration-300">
          {selectedId
            ? MAP_LAYOUT.find((p) => p.id === selectedId)?.name
            : hoveredId
            ? MAP_LAYOUT.find((p) => p.id === hoveredId)?.name
            : "Tanah Papua"}
        </h4>
      </div>

      {/* Zoom reset button when zoomed in */}
      {selectedId && (
        <button
          onClick={() => {
            setSelectedId(null);
            if (onClickProvince) onClickProvince(null);
          }}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white font-sans text-xs uppercase px-3 py-1.5 rounded-full border border-white/10 cursor-pointer z-30 shadow-lg"
        >
          Reset Zoom
        </button>
      )}
    </div>
  );
}
