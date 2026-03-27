import { Triangle, Twitter, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-sb-border bg-sb-card/30 pt-16 pb-12 mt-0">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-white mb-6">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-sb-card text-sb-green">
              <Triangle className="h-4 w-4 fill-current" />
            </div>
            workspace.senamfo.com.br
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
          © {new Date().getFullYear()} Workspace Senamfo Inc.
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
  )
}
