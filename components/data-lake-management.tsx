"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import {
  Database,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Download,
  HardDrive,
  Zap,
  CheckCircle,
  TrendingUp,
} from "lucide-react"

// Mock data lake metrics
const storageDistribution = [
  { name: "Structured Data", value: 45, size: "1.2TB", color: "hsl(var(--chart-1))" },
  { name: "Semi-structured", value: 30, size: "800GB", color: "hsl(var(--chart-2))" },
  { name: "Unstructured", value: 25, size: "650GB", color: "hsl(var(--chart-3))" },
]

const dataTypes = [
  { type: "JSON", count: 45600, size: "890GB", growth: "+12%" },
  { type: "CSV", count: 23400, size: "340GB", growth: "+8%" },
  { type: "Parquet", count: 18900, size: "1.1TB", growth: "+15%" },
  { type: "Images", count: 156000, size: "2.3TB", growth: "+22%" },
  { type: "Videos", count: 8900, size: "4.2TB", growth: "+18%" },
  { type: "Logs", count: 890000, size: "1.8TB", growth: "+25%" },
]

const catalogEntries = [
  {
    name: "customer_transactions_2024",
    type: "Structured",
    format: "Parquet",
    size: "245GB",
    lastModified: "2 hours ago",
    quality: "High",
    tags: ["finance", "customer", "transactions"],
    status: "active",
  },
  {
    name: "sensor_telemetry_raw",
    type: "Semi-structured",
    format: "JSON",
    size: "1.2TB",
    lastModified: "15 minutes ago",
    quality: "Medium",
    tags: ["iot", "sensors", "telemetry"],
    status: "processing",
  },
  {
    name: "marketing_campaign_images",
    type: "Unstructured",
    format: "Mixed",
    size: "890GB",
    lastModified: "1 day ago",
    quality: "High",
    tags: ["marketing", "images", "campaigns"],
    status: "active",
  },
  {
    name: "application_logs_archive",
    type: "Semi-structured",
    format: "JSON",
    size: "3.4TB",
    lastModified: "6 hours ago",
    quality: "Low",
    tags: ["logs", "applications", "archive"],
    status: "archived",
  },
]

const qualityMetrics = [
  { metric: "Completeness", score: 94, trend: "up" },
  { metric: "Accuracy", score: 87, trend: "up" },
  { metric: "Consistency", score: 91, trend: "stable" },
  { metric: "Timeliness", score: 89, trend: "down" },
]

export function DataLakeManagement() {
  return (
    <div className="p-6 space-y-6 h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Data Lake Management</h1>
          <p className="text-muted-foreground mt-1">Intelligent cataloging and organization of enterprise data</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search datasets..." className="pl-10 w-80" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Datasets</CardTitle>
            <Database className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+156</span> added this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4TB</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-4">78%</span> of capacity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
            <CheckCircle className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-3">+2.1%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Ingestion</CardTitle>
            <Zap className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">pipelines running</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Storage Distribution</CardTitle>
            <CardDescription>Data organization by structure type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={storageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {storageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {storageDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Quality Metrics</CardTitle>
            <CardDescription>Quality assessment across dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-sm">{metric.metric}</span>
                    {metric.trend === "up" && <TrendingUp className="h-3 w-3 text-chart-3" />}
                    {metric.trend === "down" && <TrendingUp className="h-3 w-3 text-chart-4 rotate-180" />}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-chart-1 h-2 rounded-full" style={{ width: `${metric.score}%` }} />
                    </div>
                    <span className="font-mono text-sm w-12 text-right">{metric.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Types Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Data Types & Growth</CardTitle>
          <CardDescription>Dataset distribution and growth trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataTypes.map((type, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{type.type}</span>
                  <Badge variant="outline" className="text-chart-3 border-chart-3">
                    {type.growth}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Count:</span>
                    <span className="font-mono">{type.count.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-mono">{type.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Catalog */}
      <Card>
        <CardHeader>
          <CardTitle>Data Catalog</CardTitle>
          <CardDescription>Recently accessed and modified datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {catalogEntries.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-chart-1" />
                    <div>
                      <div className="font-medium">{entry.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {entry.format} • {entry.size} • {entry.lastModified}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {entry.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      entry.quality === "High" ? "default" : entry.quality === "Medium" ? "secondary" : "destructive"
                    }
                    className="text-xs"
                  >
                    {entry.quality}
                  </Badge>
                  <Badge variant={entry.status === "active" ? "default" : "secondary"} className="text-xs">
                    {entry.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
