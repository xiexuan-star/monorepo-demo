export function escape(path: string) {
  return path.replace(/\\/g, '/');
}

export function arrayed<T>(maybeArray: T): T extends Array<any> ? T : [T] {
  if (Array.isArray(maybeArray)) return maybeArray as any;
  return [maybeArray] as any;
}
