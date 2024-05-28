import { create } from "zustand";

interface SidebarStore {
 collapsed: boolean;
 onExpand: () => void;
 onCollapse: () => void;
}

export const userSidebar = create<SidebarStore>((set) => ({
 collapsed: false,
 onExpand: () => set(() => ({ collapsed: false })),
 onCollapse: () => set(() => ({ collapsed: true })),
}));
