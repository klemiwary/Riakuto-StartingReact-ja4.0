type T = { foo: number };
type U = { bar: string };
type V = {
  foo?: number;
  baz: boolean;
};

type TnU = T & U;
type TnV = T & V;
type VnTorU = V & (T | U);
