const truthy = Boolean as unknown as (<T>(x: T | false | '' | 0n | 0 | null | undefined) => x is T)
export default truthy
