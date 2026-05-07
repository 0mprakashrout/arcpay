export interface Worker {
  id: string;
  name: string;
  wallet: string;
  salary: number;
  role: string;
}

export const demoWorkers: Worker[] = [
  {
    id: "1",
    name: "Alex Johnson",
    wallet: "0x1234...5678",
    salary: 500,
    role: "Developer",
  },
  {
    id: "2",
    name: "Sarah Lee",
    wallet: "0x9876...4321",
    salary: 700,
    role: "Designer",
  },
];