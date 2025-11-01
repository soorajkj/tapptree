import { create, type ExtractState } from "zustand";
import { combine, persist } from "zustand/middleware";

export type SidebarState = ExtractState<typeof useSidebarStore>;

export const useSidebarStore = create(
  persist(
    combine({ isOpen: true }, (set) => ({
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    })),
    {
      name: "sidebar",
    }
  )
);
