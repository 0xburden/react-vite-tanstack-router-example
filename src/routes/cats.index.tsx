import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cats/")({
  component: Cats,
});

function Cats() {
  return (
    <main className="mt-8 w-full text-center">
      <p>Try navigating to {`cats/200/300`}</p>
    </main>
  );
}
