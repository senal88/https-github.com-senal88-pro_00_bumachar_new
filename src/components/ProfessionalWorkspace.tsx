import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Github,
  FolderGit2,
  Cpu,
  Activity,
  Database,
  GitBranch,
  Inbox,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const repos = [
  {
    name: 'python-bcb',
    url: 'https://github.com/wilsonfreitas/python-bcb.git',
    desc: 'Python interface to Brazilian Central Bank web services for automated data retrieval.',
    inbox: true,
  },
  {
    name: 'rbcb',
    url: 'https://github.com/wilsonfreitas/rbcb.git',
    desc: 'R interface to Brazilian Central Bank web services, enabling robust statistical analysis.',
  },
  {
    name: 'python-bizdays',
    url: 'https://github.com/wilsonfreitas/python-bizdays.git',
    desc: 'Business days calculations and calendars for financial instrument pricing.',
  },
  {
    name: 'R-fixedincome',
    url: 'https://github.com/wilsonfreitas/R-fixedincome.git',
    desc: 'Comprehensive fixed income pricing, analytics, and risk management in R.',
  },
  {
    name: 'awesome-quant',
    url: 'https://github.com/wilsonfreitas/awesome-quant.git',
    desc: 'A curated list of insanely awesome libraries, packages, and resources for Quants.',
  },
  {
    name: 'rb3',
    url: 'https://github.com/wilsonfreitas/rb3.git',
    desc: 'R package to download and parse public data released by B3 (Brazilian Exchange).',
  },
]

export function ProfessionalWorkspace() {
  return (
    <section
      id="professional-workspace"
      className="py-24 border-t border-sb-border bg-sb-bg relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-sb-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional Planning
          </h2>
          <p className="text-lg text-sb-text-muted leading-relaxed">
            Your dedicated workspace for quantitative finance. Access core
            libraries, manage your analytical inbox, and monitor backend
            integration services directly from your dashboard.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sb-card border border-sb-border text-sb-green shadow-sm">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Quantitative Repositories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card
                key={repo.name}
                className="bg-sb-card border-sb-border hover:border-sb-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                      {repo.name}
                    </CardTitle>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sb-text-muted hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <CardDescription className="text-sb-text-muted min-h-[40px]">
                    {repo.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  {repo.inbox && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121212] border border-sb-border text-xs font-mono text-sb-text-muted">
                      <Inbox className="w-3.5 h-3.5 text-sb-green" />
                      _inbox/python-bcb
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sb-text-muted hover:text-white hover:bg-sb-bg border border-transparent hover:border-sb-border h-9 px-3"
                    asChild
                  >
                    <a href={repo.url} target="_blank" rel="noreferrer">
                      View Source{' '}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-50" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sb-card border border-sb-border text-sb-green shadow-sm">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Backend Systems Integration
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-sb-card/50 border-sb-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sb-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="text-base text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-sb-green" /> Data Ingestion
                  Layer
                </CardTitle>
                <CardDescription className="text-sm text-sb-text-muted">
                  Automated scraping from BCB & B3 using python-bcb and rb3
                  wrappers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-24 w-full rounded-md bg-[#121212] border border-sb-border p-3 font-mono text-xs flex flex-col justify-center gap-2">
                  <div className="flex justify-between items-center text-sb-text-muted">
                    <span>
                      Status: <span className="text-sb-green">Active</span>
                    </span>
                    <span>0ms latency</span>
                  </div>
                  <div className="w-full bg-sb-bg rounded-full h-1.5">
                    <div className="bg-sb-green h-1.5 rounded-full w-[85%] animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sb-card/50 border-sb-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="text-base text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-400" /> Quantitative
                  Engine
                </CardTitle>
                <CardDescription className="text-sm text-sb-text-muted">
                  Pricing and risk metrics calculated via R-fixedincome and
                  python-bizdays.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-24 w-full rounded-md bg-[#121212] border border-sb-border p-3 font-mono text-xs flex items-center justify-center relative overflow-hidden">
                  <svg
                    className="absolute w-full h-full opacity-30"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="0,40 20,30 40,35 60,15 80,20 100,5"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="relative z-10 px-2 py-1 bg-sb-bg rounded border border-sb-border text-blue-400">
                    Processing Yield Curves
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sb-card/50 border-sb-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="text-base text-white flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-purple-400" /> API Gateway
                </CardTitle>
                <CardDescription className="text-sm text-sb-text-muted">
                  Exposing normalized quant data endpoints for frontend
                  consumption.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-24 w-full rounded-md bg-[#121212] border border-sb-border p-3 font-mono text-[10px] text-sb-text-muted flex flex-col gap-1.5 justify-center">
                  <div className="flex justify-between">
                    <span>GET /v1/rates/selic</span>
                    <span className="text-green-400">200 OK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>POST /v1/price/bond</span>
                    <span className="text-green-400">200 OK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GET /v1/calendar/br</span>
                    <span className="text-green-400">200 OK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
