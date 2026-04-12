import { tokens } from '../design/tokens'

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目展示', href: '#projects' },
  { label: '联系方式', href: '#contact' },
]

function Header() {
  return (
    <header
      className={`sticky top-0 z-20 border-b ${tokens.color.borderSubtle} ${tokens.color.pageBg}/80 backdrop-blur`}
    >
      <div
        className={`${tokens.layout.container} ${tokens.spacing.headerY} flex items-center justify-between`}
      >
        <a href="#home" className={`text-sm font-semibold tracking-wide ${tokens.color.textPrimary}`}>
          黄浩的个人主页
        </a>
        <nav aria-label="主导航">
          <ul className={`flex items-center gap-4 text-sm ${tokens.color.textSecondary} md:gap-6`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
