import { NavbarGroup } from "vuepress-theme-hope";

export const osNav: NavbarGroup = {
  text: "Operating Systems",
  icon: "linux",
  link: "/os/",
  children: [
    { text: "Overview", icon: "book", link: "/os/" },
    { text: "Processes & Threads", icon: "workflow", link: "/os/process-thread" },
    { text: "Scheduling", icon: "schedule", link: "/os/scheduling" },
    { text: "Memory Management", icon: "memory", link: "/os/memory" },
    { text: "IPC & Synchronization", icon: "share", link: "/os/ipc" },
    { text: "I/O", icon: "drive", link: "/os/io-filesystem" },
    { text: "File Systems", icon: "file", link: "/os/filesystem" },
    { text: "Security", icon: "shield", link: "/os/security" },
    { text: "Kernel & System Call", icon: "terminal", link: "/os/kernel-security" },
    { text: "Virtualization & Distributed Systems", icon: "cluster", link: "/os/virtualization-distributed" },
  ],
};