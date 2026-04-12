// Shared UI tokens for consistent dark-theme styling.
export const tokens = {
  color: {
    pageBg: 'bg-[#0a0a0a]',
    surfaceBg: 'bg-[#0f0f0f]',
    textPrimary: 'text-white',
    textSecondary: 'text-white/80',
    borderSubtle: 'border-white/10',
    accentGradient: 'bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300',
    accentGradientStrong: 'bg-gradient-to-r from-fuchsia-500 to-cyan-400',
  },
  layout: {
    container: 'mx-auto w-full max-w-6xl px-6 md:px-10',
    sectionScrollOffset: 'scroll-mt-24',
  },
  spacing: {
    headerY: 'py-4',
    heroPanel: 'p-8 md:p-12',
    heroGap: 'gap-8',
  },
  radius: {
    card: 'rounded-3xl',
    pill: 'rounded-full',
  },
} as const
