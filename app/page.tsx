import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-4 p-4 px-8">
      <Link href="/default-font">DefaultFont</Link>
      <Link href="/geist">Geist</Link>
      <Link href="/inter-static">InterStatic</Link>
    </main>
  );
}
