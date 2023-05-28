import { createContext, ReactNode, useState, useEffect, useMemo } from "react";

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

interface GlobalContextValue {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

interface RastreioContextProviderProps {
  children: React.ReactNode;
}

export const RastreioContext = createContext(
  null as unknown as GlobalContextValue
);

export function RastreioContextProvider({
  children,
}: RastreioContextProviderProps) {
  const [code, setCode] = useState("");
  const value = useMemo<GlobalContextValue>(() => ({ code, setCode }), [code]);

  return (
    <RastreioContext.Provider value={value}>
      {children}
    </RastreioContext.Provider>
  );
}
