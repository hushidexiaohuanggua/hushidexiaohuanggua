import { skills } from '../data/skills'

function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-semibold">关于我</h2>
      <p className="mb-6 max-w-3xl text-white/80">
        我是一名热爱产品与工程实践的 AI 应用研究开发者，擅长将研究问题转化为可验证的模型与可落地的系统，
        在纺织品纹样识别、土家织锦数字化与 AIGC 生成等方向连接学术成果与产业需求。
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="mb-3 font-medium text-fuchsia-300">{group.category}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {group.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
