export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

export const certificates: Certificate[] = [
  {
    id: 'ai-chatgpt',
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'Tech Workshop',
    year: '2024',
    description: 'Hands-on training on leveraging AI tools and ChatGPT for development, automation, and productivity enhancement.',
    icon: '🤖',
  },
  {
    id: 'ai-medicine',
    title: 'AI in Medicine',
    issuer: 'Healthcare AI Program',
    year: '2024',
    description: 'Exploring applications of artificial intelligence in medical diagnosis, healthcare analytics, and patient care.',
    icon: '⚕️',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    issuer: 'Cloud Certification Program',
    year: '2023',
    description: 'Comprehensive certification covering cloud infrastructure, deployment models, and modern cloud architectures.',
    icon: '☁️',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    issuer: 'Design Academy',
    year: '2023',
    description: 'Fundamentals of visual design, typography, color theory, and modern design tools for creating compelling visuals.',
    icon: '🎨',
  },
];
