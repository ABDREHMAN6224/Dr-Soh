export type LinkType = {
    title: string;
    link: string;
    dataTest?: string;
}

export type Project = {
    title:string
    image:string
    description:string
}

export type Research = {
    type: "International Journal Article" | "International Conference Article";
    title: string;
    authors: string[];
    journal?: string; 
    conference?: string; 
    volume?: number; 
    number?: number; 
    pages?: string|number;
    year: number|string;
    impactFactor?: number; 
    link?: string;
    
  };

  export type Course={
    title:string
  }