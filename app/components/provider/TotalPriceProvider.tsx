"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ITotalPrice {
  totalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

export const TotalPriceContext = createContext<ITotalPrice>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

export default function TotalPriceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  return (
    <TotalPriceContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </TotalPriceContext.Provider>
  );
}
