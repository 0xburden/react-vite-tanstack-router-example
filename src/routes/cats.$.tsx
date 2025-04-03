import { createFileRoute } from "@tanstack/react-router";
import { Cat } from "../modules/cats/components";

export const Route = createFileRoute("/cats/$")({
  component: CatComponent,
});

function CatComponent() {
  const { _splat: dimensions } = Route.useParams();

  return (
    <Cat
      className="mt-8 m-auto"
      dimensions={dimensions as string}
    />
  );
}
