import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="mt-8">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-bold">Vite + React</h1>
        <p className="text-sm">And some other stuff</p>
      </div>
    </main>
  );
}
