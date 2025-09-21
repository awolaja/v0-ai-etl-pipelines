"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import {
  Activity,
  Database,
  Cpu,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  HardDrive,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react"

// Mock overview data
const systemPerformance = [
  { time: "00:00", analytics: 85, dataLake: 92, iot: 78, overall: 85 },
  { time: "04:00", analytics: 88, dataLake: 89, iot: 82, overall: 86 },
  { time: "08:00", analytics: 92, dataLake: 94, iot: 85, overall: 90 },
  { time: "12:00", analytics: 89, dataLake: 91, iot: 88, overall: 89 },
  { time: "16:00", analytics: 94, dataLake: 96, iot: 91, overall: 94 },
  { time: "20:00", analytics: 91, dataLake: 93, iot: 87, overall: 90 },
  { time: "24:00", analytics: 87, dataLake: 90, iot: 84, overall: 87 },
]

const dataFlow = [
  { hour: "00", ingestion: 1200, processing: 1150, output: 1100 },
  { hour: "04", ingestion: 980, processing: 950, output: 920 },
  { hour: "08", ingestion: 1800, processing: 1750, output: 1700 },
  { hour: "12", ingestion: 2200, processing: 2150, output: 2100 },
  { hour: "16", ingestion: 1900, processing: 1850, output: 1800 },
  { hour: "20", ingestion: 1600, processing: 1550, output: 1500 },
]

const systemComponents = [
  {
    name: "Real-time Analytics",
    icon: Activity,
    status: "healthy",
    uptime: "99.8%",
    throughput: "45.2K/min",
    latency: "42ms",
    errors: "0.03%",
    description: "Processing streaming data with AI insights",
  },
  {
    name: "Data Lake Management",
    icon: Database,
    status: "healthy",
    uptime: "99.9%",
    throughput: "12.4TB",
    latency: "N/A",
    errors: "0.01%",
    description: "Intelligent cataloging of enterprise data",
  },
  {
    name: "IoT Processing",
    icon: Cpu,
    status: "warning",
    uptime: "98.2%",
    throughput: "2.8K devices",
    latency: "67ms",
    errors: "0.08%",
    description: "Sensor data analytics and anomaly detection",
  },
]

const recentAlerts = [
  {
    type: "warning",
    component: "IoT Processing",
    message: "High latency detected in sensor data pipeline",
    time: "2 minutes ago",
  },
  {
    type: "info",
    component: "Data Lake",
    message: "Scheduled maintenance completed successfully",
    time: "1 hour ago",
  },
  {
    type: "error",
    component: "Analytics",
    message: "Temporary spike in error rate resolved",
    time: "3 hours ago",
  },
]

const quickActions = [
  { title: "View Analytics Dashboard", description: "Real-time streaming insights", icon: Activity },
  { title: "Manage Data Lake", description: "Browse and organize datasets", icon: Database },
  { title: "Monitor IoT Devices", description: "Sensor status and performance", icon: Cpu },
  { title: "System Configuration", description: "Pipeline settings and alerts", icon: MoreHorizontal },
]

export function PipelineOverview() {
  return (
    <div className="p-6 space-y-6 h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pipeline Overview</h1>
          <p className="text-muted-foreground mt-1">Comprehensive monitoring of AI ETL pipeline systems</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-chart-3 border-chart-3">
            <CheckCircle className="h-3 w-3 mr-1" />
            All Systems Operational
          </Badge>
          <Button variant="outline" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Health</CardTitle>
            <TrendingUp className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+2.1%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processed</CardTitle>
            <HardDrive className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847TB</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+12.4%</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Pipelines</CardTitle>
            <Zap className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">3</span> added recently
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52ms</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">-8ms</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Performance metrics across all pipeline components</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="analytics" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="dataLake" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="iot" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="overall" stroke="hsl(var(--chart-4))" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Flow</CardTitle>
            <CardDescription>Data ingestion, processing, and output rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataFlow}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="ingestion" fill="hsl(var(--chart-1))" />
                <Bar dataKey="processing" fill="hsl(var(--chart-2))" />
                <Bar dataKey="output" fill="hsl(var(--chart-3))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* System Components */}
      <Card>
        <CardHeader>
          <CardTitle>System Components</CardTitle>
          <CardDescription>Status and performance of pipeline components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemComponents.map((component, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {component.status === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-chart-3" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-chart-4" />
                    )}
                    <component.icon className="h-5 w-5 text-chart-1" />
                    <div>
                      <div className="font-medium">{component.name}</div>
                      <div className="text-xs text-muted-foreground">{component.description}</div>
                    </div>
                  </div>
                  <Badge variant={component.status === "healthy" ? "default" : "secondary"} className="text-xs">
                    {component.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-muted-foreground">Uptime</div>
                    <div className="font-mono text-chart-3">{component.uptime}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Throughput</div>
                    <div className="font-mono">{component.throughput}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Latency</div>
                    <div className="font-mono">{component.latency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Error Rate</div>
                    <div className="font-mono">{component.errors}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>System notifications and status updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                  {alert.type === "error" ? (
                    <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                  ) : alert.type === "warning" ? (
                    <AlertTriangle className="h-4 w-4 text-chart-4 mt-0.5" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-chart-3 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{alert.component}</span>
                      <Badge
                        variant={
                          alert.type === "error" ? "destructive" : alert.type === "warning" ? "secondary" : "default"
                        }
                        className="text-xs"
                      >
                        {alert.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Navigate to specific pipeline components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {quickActions.map((action, index) => (
                <Button key={index} variant="ghost" className="h-auto p-4 justify-start text-left">
                  <div className="flex items-center gap-3 w-full">
                    <action.icon className="h-5 w-5 text-chart-1" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
