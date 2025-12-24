import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'

import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import image1 from '@/images/photos/Stego_project.jpg'
import image2 from '@/images/photos/LearnSutra.jpeg'
import image3 from '@/images/photos/Apogeeeeeeeee.jpg'
import image4 from '@/images/photos/smart_home.jpg'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 4.75 10.25 8m0 0-3.5 3.25M10.25 8h-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
          {role.badge}
        </span>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Website Content Editor',
      title: 'CMS publishing, structuring, updating, proofreading',
      badge: 'WE',
      start: '2021',
      end: { label: 'Present', dateTime: new Date().getFullYear().toString() },
    },
    {
      company: 'Marketing Team Member — Technologia (AURO University)',
      title: 'Content planning, promotion, event coordination',
      badge: 'AU',
      start: '2023',
      end: '2023',
    },
    {
      company: 'Research Publication (IJFMR)',
      title: 'Privacy + data-driven systems research (published)',
      badge: 'RP',
      start: '2024',
      end: '2024',
    },
    {
      company: 'Book Chapter Publication',
      title: 'Broken Shields: Global privacy law failures',
      badge: 'BK',
      start: '2025',
      end: '2025',
    },
  ]

  // ✅ Add your WhatsApp number here (international format, no +, no spaces)
  // Example India: 919876543210
  const WHATSAPP_NUMBER = '919998662152'

  // Optional prefilled message
  const WHATSAPP_MESSAGE =
    "Hi Burhanuddin! I saw your portfolio and I'd like to connect."

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Highlights</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      {/* Put your PDF in: /public/Burhanuddin-Hamid-Resume.pdf */}
      <Button
        href="/Bur_Resume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume (PDF)
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>

      {/* WhatsApp CTA (replaces newsletter space by living in the right column) */}
      <Button
        href={whatsappHref}
        variant="primary"
        className="group mt-3 w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact me on WhatsApp
        <ArrowRightIcon className="ml-2 h-4 w-4 stroke-current transition group-active:translate-x-0.5" />
      </Button>

      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
       <code></code>
      </p>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Cybersecurity & privacy researcher with a builder mindset.
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Burhanuddin Hamid — an Information Technology student focused on
            cybersecurity, data privacy, and practical web systems. I publish
            research-backed work, build security-focused projects, and write
            clear technical content that people can actually use.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/bhamid_?igsh=azIxZnJuemVtYjRy&utm_source=qr"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialLink
              href="https://linkedin.com/in/burhanuddin-hamid"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* Newsletter removed; WhatsApp CTA is inside the right card */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
