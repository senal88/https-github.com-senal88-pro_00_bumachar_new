import { PostgresFeature } from '@/components/features/PostgresFeature'
import { AuthFeature } from '@/components/features/AuthFeature'
import { EdgeFunctionsFeature } from '@/components/features/EdgeFunctionsFeature'
import { StorageFeature } from '@/components/features/StorageFeature'
import { RealtimeFeature } from '@/components/features/RealtimeFeature'
import { VectorFeature } from '@/components/features/VectorFeature'
import { DataApiFeature } from '@/components/features/DataApiFeature'
import { LlmFeature } from '@/components/features/LlmFeature'
import { TableViewerFeature } from '@/components/features/TableViewerFeature'
import { ProfessionalWorkspace } from '@/components/ProfessionalWorkspace'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Sparkles, ChevronRight } from 'lucide-react'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12 flex-1">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-12 mb-20 md:mt-24 md:mb-32 max-w-5xl mx-auto px-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sb-card border border-sb-border text-sm font-medium mb-8 hover:bg-sb-border/50 transition-colors cursor-pointer group animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="text-sb-green flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              New
            </span>
            <span className="text-sb-text h-4 w-px bg-sb-border mx-1" />
            <a
              href="#professional-workspace"
              className="text-white flex items-center gap-1 group-hover:text-sb-green transition-colors"
            >
              Professional Planning Workspace is live{' '}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Build in a weekend. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sb-green to-emerald-500 drop-shadow-[0_0_15px_rgba(110,231,183,0.3)]">
              Scale to millions.
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-sb-text-muted mb-10 max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            An open source Firebase alternative tailored for powerful backend
            integrations. Start your project with a Postgres database,
            Authentication, instant APIs, and robust quantitative tools.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="bg-sb-green text-black hover:bg-sb-green/90 font-semibold h-12 px-8 text-base"
            >
              Start your project
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-sb-border bg-transparent text-white hover:bg-sb-card hover:text-white h-12 px-8 text-base"
            >
              <a href="#professional-workspace">Explore Planning</a>
            </Button>
          </div>
        </div>

        {/* Main Table Viewer Feature */}
        <div
          className="mb-8 md:mb-12 animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          <TableViewerFeature />
        </div>

        {/* Desktop Grid Layout - 3 Columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <div className="flex flex-col gap-6">
            <PostgresFeature />
            <StorageFeature />
            <VectorFeature />
          </div>
          <div className="flex flex-col gap-6">
            <AuthFeature />
            <RealtimeFeature />
            <DataApiFeature />
          </div>
          <div className="flex flex-col gap-6">
            <LlmFeature />
            <EdgeFunctionsFeature />
          </div>
        </div>

        <div className="mt-20 mb-16 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Use one or all. <br />
            <span className="text-sb-text-muted">
              Best of breed products.
            </span>{' '}
            <br />
            Integrated as a platform.
          </h2>
        </div>
      </div>

      <ProfessionalWorkspace />
      <Footer />
    </div>
  )
}
