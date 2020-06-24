function reverse(str: string): string;
function reverse<T>(arr: any[]): any[];

function reverse<T>(something: string | T[]): string | T[] {
    if (typeof something === "string") {
        return something
            .split('')
            .reverse()
            .join('');
    }
    return something.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chilli', 'mushrooms']);