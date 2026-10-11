import Eyebrow from "@/components/Eyebrow";
import { DialogButton } from "@/components/Dialogs";
import { projects } from "@/lib/site";

const frame =
  "relative mx-5 mt-5 block aspect-[16/10] overflow-hidden rounded-2xl border border-white/25 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5)]";

function ImageFrame({ href, title, children }) {
  if (!href) return <div className={frame}>{children}</div>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} example in a new tab`}
      className={`${frame} cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ title, category, text, tags, tint, image, imageHref, url }) {
  return (
    <article
      className="group relative flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[30px] shadow-[0_30px_60px_-25px_rgba(41,28,14,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
      style={{
        backgroundColor: tint,
        backgroundImage:
          "radial-gradient(circle at 25% 10%, rgba(225,212,194,0.4), transparent 50%), linear-gradient(170deg, rgba(255,255,255,0.14), transparent 60%)",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-4 size-44 rounded-full border border-white/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 top-12 size-28 rounded-full border border-white/20"
      />

      {/* Title, text, tags */}
      <div className="relative px-5 pt-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      {image ? (
        <ImageFrame href={imageHref} title={title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
          />
        </ImageFrame>
      ) : (
        null
      )}

      {/* Button */}
      <div className="relative mt-auto p-5">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full bg-white py-3 text-center text-sm font-semibold text-espresso transition-colors hover:bg-cream"
          >
            View project
          </a>
        ) : (
          <DialogButton
            dialog="enquiry"
            className="block w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-espresso transition-colors hover:bg-cream"
          >
            Build something similar
          </DialogButton>
        )}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            Projects made to <span className="text-cocoa">stand out.</span>
          </h2>
          <p className="mt-5 leading-7 text-cocoa/80">
            Every project starts with a business goal and ends with a digital
            experience people remember.
          </p>
        </div>

        <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
