import { PostgresFeature } from '@/components/features/PostgresFeature'
import { AuthFeature } from '@/components/features/AuthFeature'
import { EdgeFunctionsFeature } from '@/components/features/EdgeFunctionsFeature'
import { StorageFeature } from '@/components/features/StorageFeature'
import { RealtimeFeature } from '@/components/features/RealtimeFeature'
import { VectorFeature } from '@/components/features/VectorFeature'
import { DataApiFeature } from '@/components/features/DataApiFeature'
import { LlmFeature } from '@/components/features/LlmFeature'
import { TableViewerFeature } from '@/components/features/TableViewerFeature'
import { Button } from '@/components/ui/button'
import { Sparkles, ChevronRight, Triangle, Github, Twitter } from 'lucide-react'

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
            <span className="text-white flex items-center gap-1 group-hover:text-sb-green transition-colors">
              Supabase AI is now generally available{' '}
              <ChevronRight className="w-4 h-4" />
            </span>
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
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication, instant APIs, Edge
            Functions, Realtime subscriptions, Storage, and Vector embeddings.
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
              className="border-sb-border bg-transparent text-white hover:bg-sb-card hover:text-white h-12 px-8 text-base"
            >
              Documentation
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
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <PostgresFeature />
            <StorageFeature />
            <VectorFeature />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <AuthFeature />
            <RealtimeFeature />
            <DataApiFeature />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <LlmFeature />
            <EdgeFunctionsFeature />
          </div>
        </div>

        {/* Bottom Text */}
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

      {/* Footer */}
      <footer className="border-t border-sb-border bg-sb-card/30 pt-16 pb-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-sb-card text-sb-green">
                <Triangle className="h-4 w-4 fill-current" />
              </div>
              supabase
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sb-text-muted hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sb-text-muted hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-sb-text-muted">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Database
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Authentication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Storage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Edge Functions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Realtime
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vector
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-sb-text-muted">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Developers</h4>
            <ul className="space-y-3 text-sm text-sb-text-muted">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contributing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Open Source
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-sb-text-muted">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-sb-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sb-text-muted">
            © 2024 Supabase Clone Inc.
          </p>
          <div className="flex gap-4 text-sm text-sb-text-muted">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
