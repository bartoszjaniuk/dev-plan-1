import Script from "next/script";

export default function Home() {
  return (
    <main className="relative">
      HomePage
      <Script src="/scripts/emoji.js" />
    </main>
  );
}
