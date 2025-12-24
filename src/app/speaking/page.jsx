import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function ExperienceItem({ title, description, meta, highlights }) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Eyebrow decorate>{meta}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>

      {highlights && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export const metadata = {
  title: 'Experience & Skills',
  description:
    'Hands-on experience across cybersecurity, privacy research, technical writing, and web projects.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Experience & skills built through hands-on work."
      intro="This page highlights the areas I’ve spent the most time working in — from cybersecurity research and privacy analysis to technical writing and practical web development. Everything here is based on real projects, publications, and applied learning."
    >
      <div className="space-y-20">
        {/* CYBERSECURITY & PRIVACY */}
        <ExperienceSection title="Cybersecurity & Privacy">
          <ExperienceItem
            title="Cybersecurity Research & Applied Security"
            meta="Academic + Practical Work"
            description="Focused on understanding how data is stored, transmitted, hidden, and exposed in modern systems, with an emphasis on privacy risks and defensive techniques."
            highlights={[
              'Built a complete image steganography & steganalysis tool using multiple encoding methods',
              'Hands-on work with LSB, LSB-2, random distribution techniques, and detection heuristics',
              'Experience with Kali Linux tools and Linux-based workflows',
              'Strong understanding of privacy risks, encryption basics, and threat models',
            ]}
          />

          <ExperienceItem
            title="Privacy Research & Policy Analysis"
            meta="Publications & Long-Form Research"
            description="Research-driven exploration of privacy laws, regulatory gaps, and how technical systems often fail to align with legal protections."
            highlights={[
              'Published peer-reviewed research on data privacy challenges',
              'Authored a book analyzing failures in global privacy laws and enforcement',
              'Focused on ethical technology, digital rights, and real-world impact',
            ]}
          />
        </ExperienceSection>

        {/* TECHNICAL WRITING */}
        <ExperienceSection title="Technical Writing & Content Research">
          <ExperienceItem
            title="Technical & Research-Driven Writing"
            meta="Articles, Guides, and Analysis"
            description="Extensive experience writing clear, structured, and research-backed content on cybersecurity, VPNs, software tools, and internet privacy."
            highlights={[
              'Authored published articles under my own name on cybersecurity and privacy topics',
              'Strong ability to explain complex technical concepts clearly',
              'Experience with CMS-based publishing and content structuring',
              'Research-first approach with emphasis on accuracy and clarity',
            ]}
          />
        </ExperienceSection>

        {/* WEB & SOFTWARE */}
        <ExperienceSection title="Web & Software Projects">
          <ExperienceItem
            title="Web Development & UI Prototyping"
            meta="Academic & Independent Projects"
            description="Built and designed multiple web-based projects and prototypes focused on usability, structure, and clarity."
            highlights={[
              'Developed a web application for managing technology summit applications',
              'Designed an EdTech product prototype using Figma',
              'Comfortable working with HTML, CSS, JavaScript, and client-side logic',
            ]}
          />

          <ExperienceItem
            title="System Design & Optimization Projects"
            meta="Academic Projects"
            description="Worked on structured problem-solving projects involving data analysis and optimization."
            highlights={[
              'Designed a smart home energy optimization system',
              'Focused on analyzing usage patterns and improving efficiency',
              'Applied logical reasoning and system-level thinking',
            ]}
          />
        </ExperienceSection>
      </div>
    </SimpleLayout>
  )
}
