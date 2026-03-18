import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  children?: ReactNode
  action?: ReactNode
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  children,
  action,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl bg-sb-card border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sb-green/20 hover:shadow-elevation',
        className,
      )}
    >
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sb-bg/50 text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-6 text-sm text-sb-text-muted leading-relaxed">
        {description}
      </p>

      {action && <div className="mb-4">{action}</div>}

      <div className="relative mt-auto flex-1 min-h-[160px] w-full flex items-center justify-center rounded-lg overflow-hidden bg-sb-bg/30">
        {children}
      </div>
    </div>
  )
}
