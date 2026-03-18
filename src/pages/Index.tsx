import { PostgresFeature } from '@/components/features/PostgresFeature'
import { AuthFeature } from '@/components/features/AuthFeature'
import { EdgeFunctionsFeature } from '@/components/features/EdgeFunctionsFeature'
import { StorageFeature } from '@/components/features/StorageFeature'
import { RealtimeFeature } from '@/components/features/RealtimeFeature'
import { VectorFeature } from '@/components/features/VectorFeature'
import { DataApiFeature } from '@/components/features/DataApiFeature'

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Desktop Grid Layout - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <PostgresFeature />
          <StorageFeature />
          {/* Add dummy spacers or other cards if needed for balance */}
          <div className="hidden lg:block h-24"></div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <AuthFeature />
          <RealtimeFeature />
          <DataApiFeature />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <EdgeFunctionsFeature />
          <VectorFeature />
        </div>
      </div>

      <div className="mt-24 mb-12 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Use one or all. <br />
          <span className="text-sb-text-muted">
            Best of breed products.
          </span>{' '}
          <br />
          Integrated as a platform.
        </h1>
      </div>
    </div>
  )
}
