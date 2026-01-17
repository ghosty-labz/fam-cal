import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Component,
});

function Component() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>Privacy Policy content goes here.</p>
    </div>
  );
}
