import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/MyAvatar2.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Burhanuddin Hamid. I research cybersecurity, privacy, and modern software systems.',
}

export default function About() {
  return (
  <Container className="mt-16 sm:mt-32">
  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
    {/* LEFT COLUMN (Image) */}
    <div className="lg:pl-20">
      <div className="max-w-xs px-2.5 lg:max-w-none">
        <Image
          src={portraitImage}
          alt=""
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
      </div>
    </div>

    {/* RIGHT COLUMN (Text) */}
    <div className="lg:order-first lg:row-span-2">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        I’m Burhanuddin Hamid. I research cybersecurity, privacy, and modern software systems.
      </h1>

      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          I’m an Information Technology student with a strong academic and practical focus on cybersecurity,
          data privacy, and web technologies. My work centers on understanding how modern software systems
          handle data, and where they fail.
        </p>

        <p>
          I have hands-on experience with cybersecurity fundamentals, vulnerability assessment using Kali Linux
          tools, Linux-based workflows, and CMS-driven content publishing. Alongside technical work, I specialize
          in research-driven writing that explains complex security and privacy concepts clearly and accurately.
        </p>

        <p>
          My research has been published in an international academic journal, and I have contributed a book
          chapter analyzing global privacy law failures, regulatory gaps, and their real-world impact. I’m
          particularly interested in ethical technology, digital rights, and structured problem-solving at the
          intersection of policy and engineering.
        </p>
      </div>
    </div>

    {/* SOCIAL LINKS COLUMN */}
    <div className="lg:pl-20">
      <ul role="list">
        
        <SocialLink
          href="https://github.com/burhamid53-byte"
          icon={GitHubIcon}
        >
          Follow on GitHub
        </SocialLink>

        <SocialLink
          href="https://linkedin.com/in/burhanuddin-hamid"
          icon={LinkedInIcon}
          className="mt-4"
        >
          Follow on LinkedIn
        </SocialLink>

        <SocialLink
          href="mailto:bursh521@gmail.com"
          icon={MailIcon}
          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
        >
          bursh521@gmail.com
        </SocialLink>
      </ul>
    </div>
  </div>
</Container>
  )
}