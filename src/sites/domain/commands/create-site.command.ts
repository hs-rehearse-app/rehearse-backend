export class CreateSiteCommand {
  constructor(
    public name: string,
    public location: {
      city: string;
      address: string;
      timeZone: string;
    },
    public pictures: string[],
    public logo?: string,
  ) {}
}
