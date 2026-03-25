export interface Site {
  imgs: {
    logo: string
  },
  Contact: {
    emailAddress: string,
    phoneNumber: string
  },
  Business: {
    Name: string,
    Description: string,
    Established: number,
    Tagline: string
  },
  Address: string,
  openingHours: string
}