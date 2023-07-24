declare const truthy: <T>(x: false | '' | 0 | 0n | T | null | undefined) => x is T
export default truthy
