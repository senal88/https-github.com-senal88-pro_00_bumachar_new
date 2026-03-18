import { Database, Check } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function PostgresFeature() {
  return (
    <FeatureCard
      icon={Database}
      title="Postgres Database"
      description="Every project is a full Postgres database, the world's most trusted relational database."
      className="min-h-[400px]"
      action={
        <ul className="space-y-2 mt-4">
          {['100% portable', 'Built-in Auth with RLS', 'Easy to extend'].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-sb-text-muted"
              >
                <Check className="h-4 w-4 text-sb-green" />
                {item}
              </li>
            ),
          )}
        </ul>
      }
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <svg
          viewBox="0 0 100 100"
          className="w-40 h-40 text-sb-green drop-shadow-[0_0_8px_rgba(110,231,183,0.3)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M70 40 C 75 35, 85 35, 90 45 C 95 55, 90 70, 70 80 C 60 85, 45 80, 40 70 L 40 65"
            opacity="0.8"
          />
          <path d="M30 40 C 25 30, 35 20, 50 20 C 65 20, 75 30, 70 40" />
          <path d="M30 40 C 25 50, 35 60, 45 60 L 75 60" />
          <circle cx="65" cy="35" r="3" fill="currentColor" />
          <path d="M40 70 C 50 85, 70 85, 80 75" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-lg" />
      </div>
    </FeatureCard>
  )
}
