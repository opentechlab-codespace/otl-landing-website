export interface Client {
  name: string;
  logo: string;
  category: string;
}

export interface ClientStats {
  value: string;
  label: string;
}

export interface ClientsData {
  title: string;
  subtitle: string;
  clients: Client[];
  stats: ClientStats[];
}