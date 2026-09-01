"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import type { Challenge } from "@/content/solutions/types";
import { AlertTriangle, Database, CreditCard, TrendingUp, Eye, Clock, Search, BarChart2, Smartphone, Split, WifiOff, Unlink, TrendingDown, RefreshCw, Filter, ShieldOff, AlertOctagon, PhoneOff, FileText, MessageSquareOff, Puzzle, EyeOff } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  puzzle: <Puzzle className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  "credit-card": <CreditCard className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
  "trending-down": <TrendingDown className="w-6 h-6" />,
  "eye-off": <EyeOff className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  "bar-chart-2": <BarChart2 className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  "smartphone-off": <Smartphone className="w-6 h-6" />,
  users: <AlertTriangle className="w-6 h-6" />,
  split: <Split className="w-6 h-6" />,
  "wifi-off": <WifiOff className="w-6 h-6" />,
  unlink: <Unlink className="w-6 h-6" />,
  "refresh-cw": <RefreshCw className="w-6 h-6" />,
  filter: <Filter className="w-6 h-6" />,
  "filter-x": <Filter className="w-6 h-6" />,
  "shield-off": <ShieldOff className="w-6 h-6" />,
  "alert-octagon": <AlertOctagon className="w-6 h-6" />,
  "phone-off": <PhoneOff className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
  "message-square-off": <MessageSquareOff className="w-6 h-6" />,
  "alert-triangle": <AlertTriangle className="w-6 h-6" />,
  "search-x": <Search className="w-6 h-6" />,
  instagram: <AlertTriangle className="w-6 h-6" />,
};

interface BusinessChallengesProps {
  challenges: Challenge[];
}

export function BusinessChallenges({ challenges }: BusinessChallengesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Business Challenges</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            The Problems You're Facing
          </h2>
          <p className="text-lg text-gray-600">
            These are the challenges that hold businesses back — and that we solve every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-teal-200 hover:bg-teal-50/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 group-hover:bg-gradient-to-r group-hover:from-[#21BDBC] group-hover:to-[#38BDF8] group-hover:text-white transition-all duration-300">
                {iconMap[challenge.icon] || <AlertTriangle className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
