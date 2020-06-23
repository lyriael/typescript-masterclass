let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'cd06uio',
    next: 'cs98aos',
};

dictionary[0] = item;