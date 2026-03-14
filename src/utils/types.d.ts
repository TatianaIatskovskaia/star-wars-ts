export interface Hero {
    name: string;
    img: string;
    url: string;
}

export type Characters = Record<string, Hero>;

export interface NavContextValue {
    name: string;
    changeName: (hero: string) => void;
}