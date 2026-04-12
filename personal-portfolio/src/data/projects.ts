export type Project = {
  name: string
  image: string
  description: string
  stack: string[]
  link: string
}

export const projects: Project[] = [
  {
    name: '基于迁移学习的土家织锦纹样分类研究',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description:
      '面向土家织锦图像的迁移学习分类研究，在改进 EfficientNetV2 结构上提升纹样识别准确率与泛化能力。',
    stack: ['PyTorch', 'EfficientNetV2', '迁移学习', '计算机视觉'],
    link: '/project-intro.html',
  },
  {
    name: '土家织锦纹样分类和展示系统',
    image: '/tujia-system.png',
    description: '集纹样分类、检索与数字化展示于一体的系统，便于文化保护与科普传播。',
    stack: ['Python', 'onnx', 'Java', 'Flask'],
    link: 'https://app-awp3sslqdfy8.appmiaoda.com',
  },
  {
    name: '基于AIGC的纹样生成系统',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    description: '结合生成式模型与传统纹样约束，实现可控、可编辑的纹样创作与迭代。',
    stack: ['AIGC', 'Stable Diffusion', 'Python', 'Lora'],
    link: '#',
  },
  {
    name: '在线考试系统',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    description: '支持题库管理、组卷、作答与成绩统计的在线考试与练习平台。',
    stack: ['C#', 'ASP.NET', 'SqlServer'],
    link: 'https://app-awrgofsu0jcx.appmiaoda.com',
  },
]
