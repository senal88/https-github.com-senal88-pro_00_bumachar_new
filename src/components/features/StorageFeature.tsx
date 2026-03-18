import { Cloud, Image as ImageIcon, FileText, Film } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function StorageFeature() {
  return (
    <FeatureCard
      icon={Cloud}
      title="Storage"
      description="Store, organize, and serve large files, from videos to images."
    >
      <div className="grid grid-cols-4 gap-2 opacity-80">
        {[
          ImageIcon,
          FileText,
          Film,
          ImageIcon,
          Film,
          FileText,
          ImageIcon,
          Film,
        ].map((Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded bg-sb-card border border-sb-border flex items-center justify-center"
          >
            <Icon className="w-5 h-5 text-sb-text-muted" />
          </div>
        ))}
      </div>
    </FeatureCard>
  )
}
