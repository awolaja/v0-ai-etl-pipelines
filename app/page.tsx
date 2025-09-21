"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { RealTimeAnalytics } from "@/components/real-time-analytics"
import { DataLakeManagement } from "@/components/data-lake-management"
import { IoTProcessing } from "@/components/iot-processing"
import { PipelineOverview } from "@/components/pipeline-overview"

export default function HomePage() {
  const [activeView, setActiveView] = useState("Pipeline Overview")

  const renderActiveView = () => {
    switch (activeView) {
      case "Real-time Analytics":
        return <RealTimeAnalytics />
      case "Data Lake Management":
        return <DataLakeManagement />
      case "IoT Processing":
        return <IoTProcessing />
      case "Pipeline Overview":
      default:
        return <PipelineOverview />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 overflow-hidden">{renderActiveView()}</main>
    </div>
  )
}
