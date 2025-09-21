"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Activity, Database, Zap, AlertTriangle, CheckCircle, Clock, MoreHorizontal } from "lucide-react"

// Mock real-time data
const streamingData = [
  { time: "00:00", requests: 2400, latency: 45, errors: 2 },
  { time: "00:05", requests: 2100, latency: 52, errors: 1 },
  { time: "00:10", requests: 2800, latency: 38, errors: 3 },
  { time: "00:15", requests: 2600, latency: 41, errors: 1 },
  { time: "00:20", requests: 3200, latency: 35, errors: 0 },
  { time: "00:25", requests: 2900, latency: 43, errors: 2 },
  { time: "00:30", requests: 3100, latency: 39, errors: 1 },
]

const throughputData = [
  { time: "12h ago", incoming: 850, outgoing: 820 },
  { time: "10h ago", incoming: 920, outgoing: 890 },
  { time: "8h ago", incoming: 1100, outgoing: 1050 },
  { time: "6h ago", incoming: 980, outgoing: 940 },
  { time: "4h ago", incoming: 1200, outgoing: 1180 },
  { time: "2h ago", incoming: 1050, outgoing: 1020 },
  { time: "Now", incoming: 1150, outgoing: 1120 },
]

const processingMetrics = [
  { pipeline: "User Events", processed: 45600, rate: 1200, status: "healthy" },
  { pipeline: "Transaction Logs", processed: 23400, rate: 890, status: "healthy" },
  { pipeline: "Sensor Data", processed: 78900, rate: 2100, status: "warning" },
  { pipeline: "API Analytics", processed: 34500, rate: 950, status: "healthy" },
]

export function RealTimeAnalytics() {
  return (
    <div className="p-6 space-y-6 h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Real-time Analytics</h1>
          <p className="text-muted-foreground mt-1">Live streaming data processing and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-chart-3 border-chart-3">
            <Activity className="h-3 w-3 mr-1" />
            Live
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
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <TrendingUp className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">289K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+12.5%</span> from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
            <Clock className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42ms</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">-8.2%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.03%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">-0.01%</span> from baseline
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processed</CardTitle>
            <Database className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2TB</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+24.1%</span> vs yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Request Volume & Latency</CardTitle>
            <CardDescription>Real-time streaming metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={streamingData}>
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
                <Line type="monotone" dataKey="requests" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="latency" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Throughput</CardTitle>
            <CardDescription>Incoming vs outgoing data flow</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={throughputData}>
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
                <Area
                  type="monotone"
                  dataKey="incoming"
                  stackId="1"
                  stroke="hsl(var(--chart-3))"
                  fill="hsl(var(--chart-3))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="outgoing"
                  stackId="2"
                  stroke="hsl(var(--chart-4))"
                  fill="hsl(var(--chart-4))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Status */}
      <Card>
        <CardHeader>
          <CardTitle>Active Processing Pipelines</CardTitle>
          <CardDescription>Real-time pipeline performance and health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processingMetrics.map((pipeline, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {pipeline.status === "healthy" ? (
                      <CheckCircle className="h-4 w-4 text-chart-3" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-chart-4" />
                    )}
                    <span className="font-medium">{pipeline.pipeline}</span>
                  </div>
                  <Badge variant={pipeline.status === "healthy" ? "default" : "destructive"} className="text-xs">
                    {pipeline.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-muted-foreground">Processed</div>
                    <div className="font-mono">{pipeline.processed.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Rate/min</div>
                    <div className="font-mono text-chart-1">{pipeline.rate}</div>
                  </div>
                  <Zap className="h-4 w-4 text-chart-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
