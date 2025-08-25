// Hero section code her"use client";

import { Button } from "@/components/ui/button"; 
import { Download, MessageCircle, Eye } from "lucide-react";

export default function HeroSection() {
  const metrics = [
    { metric: "13.7%", description: "monthly revenue from new export channel" },
    { metric: "18%", description: "MoM revenue growth (pilot channel)" },
    { metric: "97%", description: "capacity utilization (operations optimization)" },
    { metric: "8.33 CGPA", description: "B.Tech, MANIT Bhopal" }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-500">Rahul Singh Dhakar</span>
      </h1>
      <p className="text-xl text-gray-300 mb-6">
        Data Analytics & Operations Specialist
      </p>

      <div className="flex gap-4 mb-12">
        <Button>
          <Eye className="h-5 w-5 mr-2" /> View Case Studies
        </Button>
        <Button variant="outline">
          <MessageCircle className="h-5 w-5 mr-2" /> Let's Talk
        </Button>
        <Button variant="ghost">
          <Download className="h-5 w-5 mr-2" /> Download Resume
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {metrics.map((item, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-xl">
            <div className="text-2xl font-bold text-blue-400">{item.metric}</div>
            <div className="text-sm text-gray-400">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
e (as provided earlier)
