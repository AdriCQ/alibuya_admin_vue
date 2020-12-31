export type TPackStatus = "created" | "requested" | "waiting" | "ready" | "canceled";

/**
 * Ipack
 */
export interface IPack {
  id: number;
  delivery_method?: string;
  destinataries?: TPackDestinationPerson[];
  status: TPackStatus;
  products: IProduct[];
}