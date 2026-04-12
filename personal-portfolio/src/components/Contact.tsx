type ContactItem = { label: string; value: string }

const contactItems: ContactItem[] = [
  { label: '邮箱', value: '493155059@qq.com' },
  { label: 'GitHub', value: 'github.com/huanghao' },
  { label: '微信号', value: '18254153663' },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-semibold">联系方式</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex flex-1 flex-col items-center text-center sm:min-w-[8rem]">
              <span className="mb-1 text-sm text-white/60">{item.label}</span>
              <span className="cursor-default text-sm text-cyan-300 select-text">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
