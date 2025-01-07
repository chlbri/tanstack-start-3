import { getRouteApi, useRouter } from "@tanstack/react-router";
import type { FC } from "react";
import { updateCount } from "../functions";
import { Counter } from "../components/Counter";

const api = getRouteApi('/')

export const Home: FC = ()=> {
  const state = api.useLoaderData();
  const router = useRouter();

  return (
    <div className="flex flex">
      <button
        type='button'
        onClick={() => {
          updateCount({
            data: {
              increment: 1,
            },
          }).then(() => router.invalidate());
          console.log('from client');
        }}
      >
        Add to{state}
      </button>
      <Counter />
    </div>
  );
}