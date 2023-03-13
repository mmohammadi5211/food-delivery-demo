import { type } from 'os';
import { useContext, useReducer, createContext, Dispatch } from 'react';

const FoodsContext = createContext<InitProps[] | null>(null);
const FoodsDispatchContext = createContext<Dispatch<Action> | null>(null);

interface FoodProps {
  children: React.ReactNode;
}
export function FoodsProvider({ children }: FoodProps) {
  const [foods, dispatch] = useReducer(foodsReducer, initialFoods);
  return (
    <>
      <FoodsContext.Provider value={foods}>
        <FoodsDispatchContext.Provider value={dispatch}>
          {children}
        </FoodsDispatchContext.Provider>
      </FoodsContext.Provider>
    </>
  );
}

type Action = {
  type: string;
  id: number;
  title: string;
  price: string;
};

const foodsReducer = (foods: InitProps[], action: Action): InitProps[] => {
  switch (action.type) {
    case 'added': {
      return [
        ...foods,
        {
          id: action.id,
          title: action.title,
          price: action.price,
        },
      ];
    }
    default: {
      throw Error('error');
    }
  }
};

type InitProps = {
  id: number;
  title: string;
  price: string;
};
const initialFoods: InitProps[] = [];

export function useFoods() {
  return useContext(FoodsContext);
}

export function useFoodsDispatch() {
  return useContext(FoodsDispatchContext);
}
