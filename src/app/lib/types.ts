export interface Destination {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  imageUrl: string;
}

export interface CrewMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Technology {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
}
