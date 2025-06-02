import { create } from "zustand";

const useResultStore = create((set) =>
({
    minViewport: 320,
    maxViewport: 1280,
    minElement: 50,
    maxElement: 100,
    clampResult: "clamp(50px, 33.333px + 5.208vw, 100px)",

    setMinViewport: (minViewport) => set({ minViewport : minViewport }),
    setMaxViewport: (maxViewport) => set({ maxViewport : maxViewport }),
    setMinElement: (minElement) => set({ minElement : minElement }),
    setMaxElement: (maxElement) => set({ maxElement : maxElement }),
    setClampResult: (clampResult) => set({ clampResult: clampResult })
}));

export default useResultStore;