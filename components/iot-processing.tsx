"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts"
import {
  Cpu,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  MapPin,
  Battery,
  Signal,
  MoreHorizontal,
  Play,
  Pause,
  Settings,
} from "lucide-react"

// Mock IoT sensor data
const temperatureData = [
  { time: "00:00", sensor1: 22.5, sensor2: 23.1, sensor3: 21.8, sensor4: 22.9 },
  { time: "00:15", sensor1: 23.2, sensor2: 23.8, sensor3: 22.1, sensor4: 23.5 },
  { time: "00:30", sensor1: 24.1, sensor2: 24.2, sensor3: 22.7, sensor4: 24.0 },
  { time: "00:45", sensor1: 23.8, sensor2: 23.9, sensor3: 22.4, sensor4: 23.7 },
  { time: "01:00", sensor1: 23.1, sensor2: 23.3, sensor3: 21.9, sensor4: 23.2 },
  { time: "01:15", sensor1: 22.7, sensor2: 22.8, sensor3: 21.5, sensor4: 22.9 },
]

const deviceMetrics = [
  { time: "12h", cpu: 45, memory: 62, network: 78 },
  { time: "10h", cpu: 52, memory: 58, network: 82 },
  { time: "8h", cpu: 38, memory: 65, network: 75 },
  { time: "6h", cpu: 61, memory: 71, network: 88 },
  { time: "4h", cpu: 43, memory: 59, network: 79 },
  { time: "2h", cpu: 55, memory: 67, network: 85 },
  { time: "Now", cpu: 48, memory: 63, network: 81 },
]

const anomalyData = [
  { time: "00:00", temperature: 22.5, humidity: 45, anomaly: false },
  { time: "00:30", temperature: 24.1, humidity: 52, anomaly: false },
  { time: "01:00", temperature: 28.5, humidity: 38, anomaly: true },
  { time: "01:30", temperature: 23.2, humidity: 48, anomaly: false },
  { time: "02:00", temperature: 31.2, humidity: 35, anomaly: true },
  { time: "02:30", temperature: 22.8, humidity: 46, anomaly: false },
]

const sensorDevices = [
  {
    id: "TEMP_001",
    name: "Temperature Sensor A1",
    location: "Building A - Floor 1",
    status: "online",
    lastReading: "22.5°C",
    battery: 87,
    signal: 95,
    dataPoints: 45600,
    alerts: 0,
  },
  {
    id: "HUMID_002",
    name: "Humidity Sensor B2",
    location: "Building B - Floor 2",
    status: "online",
    lastReading: "45%",
    battery: 72,
    signal: 88,
    dataPoints: 38900,
    alerts: 1,
  },
  {
    id: "PRESS_003",
    name: "Pressure Sensor C1",
    location: "Building C - Basement",
    status: "warning",
    lastReading: "1013.2 hPa",
    battery: 23,
    signal: 67,
    dataPoints: 52100,
    alerts: 2,
  },
  {
    id: "MOTION_004",
    name: "Motion Detector D3",
    location: "Building D - Floor 3",
    status: "offline",
    lastReading: "No motion",
    battery: 5,
    signal: 0,
    dataPoints: 29800,
    alerts: 5,
  },
]

const processingPipelines = [
  {
    name: "Temperature Analysis",
    status: "running",
    throughput: "1.2K/min",
    latency: "45ms",
    accuracy: "99.2%",
    processed: 156000,
  },
  {
    name: "Anomaly Detection",
    status: "running",
    throughput: "890/min",
    latency: "120ms",
    accuracy: "94.8%",
    processed: 89000,
  },
  {
    name: "Predictive Maintenance",
    status: "paused",
    throughput: "0/min",
    latency: "N/A",
    accuracy: "97.1%",
    processed: 234000,
  },
  {
    name: "Energy Optimization",
    status: "running",
    throughput: "650/min",
    latency: "78ms",
    accuracy: "91.5%",
    processed: 67000,
  },
]

export function IoTProcessing() {
  return (
    <div className="p-6 space-y-6 h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">IoT Data Processing</h1>
          <p className="text-muted-foreground mt-1">Real-time sensor data analytics and predictive insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-chart-3 border-chart-3">
            <Activity className="h-3 w-3 mr-1" />
            Live Processing
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <Cpu className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">98.2%</span> online
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Points/Min</CardTitle>
            <Zap className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+8.1%</span> from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-4">+5</span> in last 24h
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Latency</CardTitle>
            <Clock className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67ms</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">-12ms</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Temperature Sensor Readings</CardTitle>
            <CardDescription>Real-time temperature data from multiple sensors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={temperatureData}>
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
                <Line type="monotone" dataKey="sensor1" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sensor2" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sensor3" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sensor4" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Performance Metrics</CardTitle>
            <CardDescription>CPU, memory, and network utilization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={deviceMetrics}>
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
                  dataKey="cpu"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="memory"
                  stackId="2"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="network"
                  stackId="3"
                  stroke="hsl(var(--chart-3))"
                  fill="hsl(var(--chart-3))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Anomaly Detection */}
      <Card>
        <CardHeader>
          <CardTitle>Anomaly Detection</CardTitle>
          <CardDescription>AI-powered anomaly identification in sensor data</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <ScatterChart data={anomalyData}>
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
              <Scatter
                dataKey="temperature"
                fill={(entry) => (entry.anomaly ? "hsl(var(--chart-4))" : "hsl(var(--chart-1))")}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Processing Pipelines */}
      <Card>
        <CardHeader>
          <CardTitle>AI Processing Pipelines</CardTitle>
          <CardDescription>Machine learning models processing IoT data streams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processingPipelines.map((pipeline, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {pipeline.status === "running" ? (
                      <CheckCircle className="h-4 w-4 text-chart-3" />
                    ) : pipeline.status === "paused" ? (
                      <Pause className="h-4 w-4 text-chart-4" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                    <span className="font-medium">{pipeline.name}</span>
                  </div>
                  <Badge
                    variant={
                      pipeline.status === "running"
                        ? "default"
                        : pipeline.status === "paused"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {pipeline.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-muted-foreground">Throughput</div>
                    <div className="font-mono">{pipeline.throughput}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Latency</div>
                    <div className="font-mono">{pipeline.latency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Accuracy</div>
                    <div className="font-mono text-chart-3">{pipeline.accuracy}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Processed</div>
                    <div className="font-mono">{pipeline.processed.toLocaleString()}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {pipeline.status === "running" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Status */}
      <Card>
        <CardHeader>
          <CardTitle>Sensor Device Status</CardTitle>
          <CardDescription>Real-time monitoring of IoT sensor devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sensorDevices.map((device, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {device.status === "online" ? (
                      <CheckCircle className="h-4 w-4 text-chart-3" />
                    ) : device.status === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-chart-4" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    )}
                    <div>
                      <div className="font-medium">{device.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {device.location}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      device.status === "online" ? "default" : device.status === "warning" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {device.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-muted-foreground">Last Reading</div>
                    <div className="font-mono">{device.lastReading}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-muted-foreground" />
                    <Progress value={device.battery} className="w-16" />
                    <span className="text-xs w-8">{device.battery}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Signal className="h-4 w-4 text-muted-foreground" />
                    <Progress value={device.signal} className="w-16" />
                    <span className="text-xs w-8">{device.signal}%</span>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Alerts</div>
                    <div className="font-mono text-center">{device.alerts}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
