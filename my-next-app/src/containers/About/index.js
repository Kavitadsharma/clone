import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello Next.js 🚀</h1>
      <Link href={'/dashboard'}>
      about
      </Link>
    </main>
  )
}
