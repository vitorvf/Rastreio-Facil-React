import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";


export interface Company {
  id: number;
  sk_company: string;
  name: string;
  is_active: number;
  jobs_frequency: string;
  created_at: string;
  updated_at: string | null;
  tracking_code: string;
  status: string;
  events: {
    events: string;
    tag: string;
    local: string;
    date: string;
    city: string | null;
    uf: string | null;
    destination_local: string | null;
    destination_city: string | null;
    destination_uf: string | null;
    comment: string | null;
  }[];
  map: Map<string, any>;
}

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  rastreios?: Company; // Adicionar essa propriedade opcional
  getPosts?: (query?: string) => Promise<void>;
  isLoading?: boolean;


}

interface TransactionsProviderProps {
  children: ReactNode;
}




export const CartContext = createContext({} as TransactionContextType);

export function CartContextProvider({ children }: TransactionsProviderProps) {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rastreios, setRastreios] = useState<Company>();
  const navigate = useNavigate();


const getPosts = async (query: string = "") => {
  try {
    setIsLoading(true);
    const response = await api.get(
      `/${query}`
    );
    navigate(`/post/${query}`, );

    setRastreios(response.data);
  } finally {
    setIsLoading(false);
  }
  console.log(rastreios)

};

  // async function loadTransactions() {
  //   const response = await fetch("http://localhost:3333/transactions");
  //   const data = await response.json();

  //   setTransactions(data);
  // }

  // useEffect(() => {
  //   loadTransactions();
  // }, []);
  return (
    <CartContext.Provider value={{ rastreios, getPosts }}>
      {children}
    </CartContext.Provider>
  );
}