import { tokens } from '../design/tokens'

function Hero() {
  return (
    <section id="home" className={tokens.layout.sectionScrollOffset}>
      <div
        className={`relative overflow-hidden ${tokens.radius.card} border ${tokens.color.borderSubtle} ${tokens.color.surfaceBg} ${tokens.spacing.heroPanel}`}
      >
        {/* Soft gradient glow to emphasize the hero area on dark background. */}
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className={`relative grid items-center ${tokens.spacing.heroGap} md:grid-cols-[1fr_auto]`}>
          <div>
            <h1
              className={`text-2xl font-extrabold leading-tight md:text-3xl ${tokens.color.textPrimary}`}
            >
              你好，我是黄浩
            </h1>
            <div className={`mt-5 flex max-w-2xl gap-4 ${tokens.color.textSecondary}`}>
              <img
                src="/favicon.svg"
                alt="站点品牌标识"
                width={48}
                height={46}
                className="mt-1 h-12 w-auto shrink-0 rounded-xl opacity-95"
              />
              <p className="text-base leading-7 md:text-lg">
                我专注于 AI 应用开发、计算机视觉与端到端软件开发，将模型与算法落地为可部署、可维护的产品与系统，
                在研究与工程实现之间搭建桥梁。
              </p>
            </div>
          </div>

          <div className="mx-auto md:mx-0">
            <div
              className={`${tokens.radius.pill} ${tokens.color.accentGradientStrong} p-[2px] shadow-[0_0_60px_rgba(217,70,239,0.35)]`}
            >
              <img
                src="/touxiang.jpg"
                alt="黄浩个人头像"
                className="h-28 w-28 rounded-full bg-[#141414] object-cover object-top md:h-40 md:w-40"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
