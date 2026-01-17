import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Component,
});

function Component() {
  return (
    <div>
      <h1>Terms of Service</h1>
      <p>Terms of Service content goes here.</p>
    </div>
  );
}
