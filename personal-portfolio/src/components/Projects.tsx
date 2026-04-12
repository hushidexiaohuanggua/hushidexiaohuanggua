import { projects } from '../data/projects'
import { tokens } from '../design/tokens'

type ProjectCardProps = {
  name: string
  image: string
  description: string
  stack: string[]
  link: string
}

function ProjectCard({ name, image, description, stack, link }: ProjectCardProps) {
  const isExternal = /^https?:\/\//.test(link)

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border ${tokens.color.borderSubtle} bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20`}
    >
      <img
        src={image}
        alt={`${name} 截图`}
        className="h-32 w-full shrink-0 object-cover transition duration-300 group-hover:scale-[1.02] sm:h-36"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col space-y-2.5 p-4">
        <h3 className={`line-clamp-3 text-sm font-semibold leading-snug ${tokens.color.textPrimary} md:text-base`}>
          {name}
        </h3>
        <p className={`line-clamp-3 text-xs leading-5 ${tokens.color.textSecondary} md:text-sm md:leading-6`}>
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-2 py-0.5 text-[10px] text-cyan-200 md:px-2.5 md:py-1 md:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-center pt-2">
          <a
            href={link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className={`inline-flex rounded-lg ${tokens.color.accentGradientStrong} px-3 py-1.5 text-xs font-medium text-black transition hover:opacity-90 md:px-4 md:py-2 md:text-sm`}
          >
            查看项目
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className={tokens.layout.sectionScrollOffset}>
      <h2 className={`mb-4 text-2xl font-semibold ${tokens.color.textPrimary}`}>项目展示</h2>
      <p className={`mb-6 max-w-3xl text-sm ${tokens.color.textSecondary}`}>
        以下是我近期完成的项目，每个卡片包含项目截图、标题、描述以及技术栈标签。
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
