import { create } from "zustand";

const useToggleStore = create((set) =>
({
    format: "CSS",
    slide: "How It Works",

    setFormat: (format) => set({ format : format }),
    setSlide: (slide) => set({ slide: slide })
}));

export default useToggleStore;