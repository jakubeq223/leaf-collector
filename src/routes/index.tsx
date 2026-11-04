import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="fixed inset-0 bg-bg">
      <p className="sr-only">
        Jesienny Etat. Zbieraj liście w parku, sprzedawaj je w strefie sell i ulepszaj dłoń,
        grabki oraz dmuchawę. Cel: 250 000 liści.
      </p>
      <iframe
        title="Jesienny Etat — zbieranie liści"
        src="/jesien.html"
        className="block h-full w-full border-0 bg-bg"
      />
    </main>
  );
}
