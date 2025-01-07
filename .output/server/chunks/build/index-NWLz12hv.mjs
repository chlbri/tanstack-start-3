import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

const s = (t) => (...e) => () => t(...e), d = (t = 0) => {
  const [n, e] = useState(t), u = s((o = 1) => e((c) => c + o)), r = s((o = 1) => e((c) => c - o)), m = s((o = 0) => e(o));
  return { value: n, increment: u, decrement: r, reset: m };
}, p = () => {
  const { value: t, increment: n } = d(0), r = { onClick: n(), className: "border-2 border-red-600 px-3 py-1.5 rounded-lg active:scale-95 active:bg-red-100 w-fit" };
  return jsxs("button", { ...r, children: ["You clicked ", t, " times"] });
}, b = () => jsx(p, {}), C = b;

export { C as component };
//# sourceMappingURL=index-NWLz12hv.mjs.map
