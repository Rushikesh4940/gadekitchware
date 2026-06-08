import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lander")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
