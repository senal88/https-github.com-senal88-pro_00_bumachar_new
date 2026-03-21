import {
  TableProperties,
  Search,
  Filter,
  ArrowUpDown,
  Database,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableViewerFeature() {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-sb-card border border-sb-border transition-all duration-300 hover:border-sb-green/30 hover:shadow-elevation">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-sb-border bg-sb-card/50">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sb-bg/50 text-white shadow-sm border border-sb-border">
              <TableProperties className="h-5 w-5 text-sb-green" />
            </div>
            <h3 className="text-xl font-bold text-white">Table Editor</h3>
          </div>
          <p className="text-sm text-sb-text-muted leading-relaxed">
            Manage your data like a spreadsheet. A powerful interface to view,
            edit, and filter your database directly from your dashboard.
          </p>
        </div>
      </div>

      {/* Spreadsheet UI */}
      <div className="flex flex-col flex-1 bg-sb-bg/30 p-4 md:p-6 lg:p-8">
        <div className="rounded-lg border border-sb-border bg-[#181818] overflow-hidden shadow-2xl">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border-b border-sb-border bg-sb-card/80 gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-sb-text hover:text-white hover:bg-sb-border bg-sb-bg/50 border border-sb-border"
              >
                <Database className="w-3.5 h-3.5 mr-2" />
                public.clusters
              </Button>
              <span className="text-xs text-sb-text-muted px-2 border-l border-sb-border">
                4 rows
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1.5 h-3.5 w-3.5 text-sb-text-muted" />
                <Input
                  placeholder="Search records..."
                  className="h-7 w-[160px] md:w-[220px] pl-8 text-xs bg-sb-bg border-sb-border text-white focus-visible:ring-sb-green/50"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 w-8 p-0 text-sb-text hover:text-white border-sb-border bg-sb-bg"
              >
                <Filter className="w-3.5 h-3.5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-7 w-8 p-0 text-sb-text hover:text-white border-sb-border bg-sb-bg"
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto custom-scrollbar">
            <Table className="w-full min-w-[700px]">
              <TableHeader className="bg-sb-bg/80 sticky top-0 z-10">
                <TableRow className="border-sb-border hover:bg-transparent">
                  <TableHead className="w-[40px] text-center text-[11px] h-8 border-r border-sb-border text-sb-text-muted bg-sb-card/20"></TableHead>
                  <TableHead className="text-[11px] h-8 border-r border-sb-border font-medium text-sb-text-muted group/th hover:bg-sb-card/40 cursor-pointer transition-colors">
                    id{' '}
                    <span className="text-[9px] text-sb-text-muted/50 font-mono ml-1">
                      uuid
                    </span>
                  </TableHead>
                  <TableHead className="text-[11px] h-8 border-r border-sb-border font-medium text-sb-text-muted group/th hover:bg-sb-card/40 cursor-pointer transition-colors">
                    created_at{' '}
                    <span className="text-[9px] text-sb-text-muted/50 font-mono ml-1">
                      timestamptz
                    </span>
                  </TableHead>
                  <TableHead className="text-[11px] h-8 border-r border-sb-border font-medium text-sb-text-muted group/th hover:bg-sb-card/40 cursor-pointer transition-colors">
                    name{' '}
                    <span className="text-[9px] text-sb-text-muted/50 font-mono ml-1">
                      text
                    </span>
                  </TableHead>
                  <TableHead className="text-[11px] h-8 border-r border-sb-border font-medium text-sb-text-muted group/th hover:bg-sb-card/40 cursor-pointer transition-colors">
                    status{' '}
                    <span className="text-[9px] text-sb-text-muted/50 font-mono ml-1">
                      varchar
                    </span>
                  </TableHead>
                  <TableHead className="text-[11px] h-8 font-medium text-sb-text-muted group/th hover:bg-sb-card/40 cursor-pointer transition-colors">
                    size{' '}
                    <span className="text-[9px] text-sb-text-muted/50 font-mono ml-1">
                      int8
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: 'a1b2c3d4-1',
                    date: '2023-10-12T14:20:00Z',
                    name: 'Production DB',
                    status: 'Active',
                    size: '1024 GB',
                  },
                  {
                    id: 'e5f6g7h8-2',
                    date: '2023-11-05T09:15:30Z',
                    name: 'Staging Cluster',
                    status: 'Maintenance',
                    size: '256 GB',
                  },
                  {
                    id: 'i9j0k1l2-3',
                    date: '2024-01-20T16:45:10Z',
                    name: 'Analytics Replica',
                    status: 'Active',
                    size: '2048 GB',
                  },
                  {
                    id: 'm3n4o5p6-4',
                    date: '2024-02-14T08:00:00Z',
                    name: 'Dev Env 1',
                    status: 'Paused',
                    size: '10 GB',
                  },
                ].map((row, i) => (
                  <TableRow
                    key={row.id}
                    className="border-sb-border hover:bg-sb-card/40 transition-colors group/row"
                  >
                    <TableCell className="py-2 text-center text-[10px] text-sb-text-muted/60 border-r border-sb-border bg-sb-card/10 select-none">
                      {i + 1}
                    </TableCell>
                    <TableCell className="py-2 text-[11px] font-mono text-sb-text-muted border-r border-sb-border">
                      {row.id}
                    </TableCell>
                    <TableCell className="py-2 text-[11px] text-sb-text-muted border-r border-sb-border whitespace-nowrap font-mono">
                      {new Date(row.date).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </TableCell>
                    <TableCell className="py-2 text-[11px] text-white border-r border-sb-border font-medium">
                      {row.name}
                    </TableCell>
                    <TableCell className="py-2 text-[11px] border-r border-sb-border">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium leading-none ${
                          row.status === 'Active'
                            ? 'bg-sb-green/10 text-sb-green border border-sb-green/20'
                            : row.status === 'Paused'
                              ? 'bg-sb-text-muted/10 text-sb-text-muted border border-sb-text-muted/20'
                              : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                        }`}
                      >
                        {row.status === 'Active' && (
                          <span className="w-1 h-1 rounded-full bg-sb-green mr-1.5"></span>
                        )}
                        {row.status === 'Maintenance' && (
                          <span className="w-1 h-1 rounded-full bg-yellow-500 mr-1.5"></span>
                        )}
                        {row.status === 'Paused' && (
                          <span className="w-1 h-1 rounded-full bg-sb-text-muted mr-1.5"></span>
                        )}
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell className="py-2 text-[11px] text-sb-text-muted text-right pr-4 font-mono">
                      {row.size}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
