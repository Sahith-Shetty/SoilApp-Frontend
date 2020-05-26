export class Soil {
  public SI: number;
  public cropType: string;
  public soilType: string;
  public soilHumidity: number;
  public soilN: number;
  public soilP: number;
  public soilK: number;
  constructor(
    soilObj
  ) {
    Object.assign(soilObj, this);
  }
}
