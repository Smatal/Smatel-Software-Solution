"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import type { Feature } from "@/content/solutions/types";
import {
  LayoutDashboard, Plug, Zap, Shield, BarChart, Cloud,
  Monitor, Search, Edit, Globe, CreditCard, FilePen,
  Layers, Bell, WifiOff, Activity, Repeat, Package,
  Landmark, Users, Briefcase, MapPin, UserPlus,
  CalendarCheck, IndianRupee, ClipboardList, Smartphone,
  Layout, Filter, GitMerge, Send, UserCheck, HardDrive,
  PenTool, FileText, Target, Share2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "layout-dashboard": <LayoutDashboard className="w-6 h-6" />,
  plug: <Plug className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  "bar-chart": <BarChart className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  edit: <Edit className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  "credit-card": <CreditCard className="w-6 h-6" />,
  "file-pen": <FilePen className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  bell: <Bell className="w-6 h-6" />,
  "wifi-off": <WifiOff className="w-6 h-6" />,
  activity: <Activity className="w-6 h-6" />,
  repeat: <Repeat className="w-6 h-6" />,
  package: <Package className="w-6 h-6" />,
  landmark: <Landmark className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  "map-pin": <MapPin className="w-6 h-6" />,
  "user-plus": <UserPlus className="w-6 h-6" />,
  "calendar-check": <CalendarCheck className="w-6 h-6" />,
  "indian-rupee": <IndianRupee className="w-6 h-6" />,
  "clipboard-list": <ClipboardList className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  filter: <Filter className="w-6 h-6" />,
  "git-merge": <GitMerge className="w-6 h-6" />,
  send: <Send className="w-6 h-6" />,
  "user-check": <UserCheck className="w-6 h-6" />,
  "hard-drive": <HardDrive className="w-6 h-6" />,
  tool: <PenTool className="w-6 h-6" />,
  "file-text": <FileText className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  "share-2": <Share2 className="w-6 h-6" />,
  google: <Search className="w-6 h-6" />,
};

interface SolutionFeaturesProps {
  features: Feature[];
}

export function SolutionFeatures({ features }: SolutionFeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-gray-600">
            Purpose-built features that solve real problems and deliver measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(79,70,229,0.1)" }}
              className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {iconMap[feature.icon] || <Zap className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
