import { create } from "zustand";

const useSelectorStore = create((set) =>
({
    viewportUnit: "px",
    elementUnit: "px",
    resultUnit: "px",

    setViewportUnit: (viewportUnit) => set({ viewportUnit : viewportUnit }),
    setElementUnit: (elementUnit) => set({ elementUnit : elementUnit }),
    setResultUnit: (resultUnit) => set({ resultUnit : resultUnit }),
}));

export default useSelectorStore;