interface Item {
    name: string;
}

interface Artist extends Item {
    songs: number;
}

interface Artist {
    getSongs(): number;
}

type Artist2 = {name: string} & Item

const newArtist: Artist = {
    name: 'asdf',
    songs: 7,
    getSongs(): number {
        return this.songs;
    }
};