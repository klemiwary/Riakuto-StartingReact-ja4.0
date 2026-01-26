interface T { foo: number }
interface U { bar: string }
interface V {
  foo?: number;
  baz: boolean;
}

type TnU = T & U;
type TnV = T & V;
type VnTorU = V & (T | U);
