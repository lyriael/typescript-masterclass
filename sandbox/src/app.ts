const enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

let selected: Sizes;

function updateSize(size: Sizes): void {
    selected = size;
}

updateSize(Sizes.Large);
console.log(selected);