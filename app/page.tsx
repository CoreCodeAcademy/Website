import NoLinksNav from "@/components/noLinksNav"

export default function Home() {
  return (
    <div className="bg-neutral-900 min-h-screen text-lg md:text-2xl lg:text-4xl">
      <NoLinksNav/>
      <p className="inline-block absolute top-1/2 left-1/2 -1/2 -translate-x-1/2 -translate-y-1/2">
      🚧 Work In Progress
      </p>
    </div>
  )
}
