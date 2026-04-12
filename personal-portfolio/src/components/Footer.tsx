function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-white/60 md:px-10">
        © {new Date().getFullYear()} 黄浩. Built with React + TypeScript + Tailwind CSS.
      </div>
    </footer>
  )
}

export default Footer
