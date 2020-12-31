export interface IShopImage {
  id: number;
  tags?: string[];
  paths: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}