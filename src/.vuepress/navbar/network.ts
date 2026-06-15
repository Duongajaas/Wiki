import { NavbarGroup } from "vuepress-theme-hope";

export const networkNav: NavbarGroup = {
  text: "Networking",
  icon: "network",
  link: "/network/",
  children: [
    {
      text: "Basics of Computer Networking",
      link: "/network/basics",
    },
    {
      text: "Network Topologies",
      link: "/network/topologies",
    },
    {
      text: "OSI Model & Protocols",
      link: "/network/osi-protocols",
    },
    {
      text: "IP Addressing",
      link: "/network/ip-addressing",
    },
    {
      text: "Subnetting",
      link: "/network/subnetting",
    },
    {
      text: "Router & Switch",
      link: "/network/router-switch",
    },
    {
      text: "Router Components",
      link: "/network/router-components",
    },
    {
      text: "Static Routing",
      link: "/network/static-routing",
    },
    {
      text: "Dynamic Routing",
      link: "/network/dynamic-routing",
    },
    {
      text: "VLANs",
      link: "/network/vlans",
    },
    {
      text: "Broadcast Domain",
      link: "/network/broadcast-domain",
    },
    {
      text: "Access Control Lists (ACL)",
      link: "/network/acl",
    },
    {
      text: "NAT",
      link: "/network/nat",
    },
    {
      text: "Network Security Devices",
      link: "/network/security-devices",
    },
    {
      text: "Software Defined Networking (SDN)",
      link: "/network/sdn",
    },
    {
      text: "VPN & IPSec",
      link: "/network/vpn-ipsec",
    },
  ],
};
