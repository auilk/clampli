import { create } from "zustand";

const useToggleStore = create((set) =>
({
    format: "css",
    slide: false,

    setFormat: () => 
        set((state) => 
        ({ 
            format: state.format === "css" ? "tailwind" : "css" 
        })),
    setSlide: () => 
        set((state) => 
        ({
            silde: !state.slide
        }))
}));