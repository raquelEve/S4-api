
const world = 'world';

export function hello(who: string = world): string {
    return `Bye Bye ${who}! `;
}
console.log("hello");