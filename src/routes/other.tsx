import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/other")({
  component: Other,
});

function Other() {
  return (
    <main className="mt-8">
      <div className="flex items-center justify-center">
        <div className="p-2 font-bold">This is the other page</div>
      </div>
    </main>
  );
}
