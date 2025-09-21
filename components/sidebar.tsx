"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart3, Database, Cpu, Activity, Settings, ChevronRight } from "lucide-react"

interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

const navigationItems = [
  {
    title: "Pipeline Overview",
    icon: BarChart3,
    description: "System monitoring",
  },
  {
    title: "Real-time Analytics",
    icon: Activity,
    description: "Live data processing insights",
  },
  {
    title: "Data Lake Management",
    icon: Database,
    description: "Intelligent data cataloging",
  },
  {
    title: "IoT Processing",
    icon: Cpu,
    description: "Sensor data analytics",
  },
]

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-sidebar-foreground mb-2">AI ETL Pipelines</h1>
        <p className="text-sm text-muted-foreground">Enterprise data processing platform</p>
      </div>

      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.title}
            variant={activeView === item.title ? "default" : "ghost"}
            className="w-full justify-start h-auto p-4 text-left"
            onClick={() => onViewChange(item.title)}
          >
            <div className="flex items-center gap-3 w-full">
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
              </div>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </div>
          </Button>
        ))}
      </nav>

      <Card className="mt-8 p-4">
        <div className="flex items-center gap-3 mb-3">
          <Settings className="h-5 w-5 text-primary" />
          <span className="font-medium text-sm">System Status</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pipelines Active</span>
            <span className="text-chart-3">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Data Processed</span>
            <span className="text-foreground">2.4TB</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Uptime</span>
            <span className="text-chart-3">99.9%</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
