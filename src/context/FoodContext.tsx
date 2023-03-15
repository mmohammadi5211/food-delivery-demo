import { count } from 'console';
import { type } from 'os';
import { title } from 'process';
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

type Action =
  | {
      type: 'added';
      id: number;
      title: string;
      price: string;
      count: number;
    }
  | {
      type: 'increment';
      id?: number;
    }
  | {
      type: 'decrement';
      id?: number;
    };

const foodsReducer = (foods: InitProps[], action: Action): InitProps[] => {
  switch (action.type) {
    case 'added': {
      // const existingCartItemIndex = foods.findIndex(
      //   (item) => item.id === action.id
      // );
      // const existingCartItem = foods[existingCartItemIndex];
      // let updatedItems;
      // if (existingCartItem) {
      //   const updatedItem = {
      //     ...existingCartItem,
      //     count: action.count + (existingCartItem?.count ?? 0),
      //   };

      //   updatedItems = [...foods];
      //   updatedItems[existingCartItemIndex] = updatedItem;
      //   return updatedItems;
      // } else {
      //   return [
      //     ...foods,
      //     {
      //       id: action.id,
      //       title: action.title,
      //       price: action.price,
      //       count: action.count,
      //     },
      //   ];
      // }

      const exitsFoodIndex = foods.findIndex((i) => i.id === action.id);
      const exitsFood = foods[exitsFoodIndex];

      if (exitsFood) {
        const items2 = foods.map((food) => {
          if (food.id === action.id) {
            return { ...food, count: (food?.count ?? 0) + 1 };
          } else {
            return food;
          }
        });
        return items2;
      } else {
        return [
          ...foods,
          {
            id: action.id,
            title: action.title,
            price: action.price,
            count: action.count,
          },
        ];
      }
    }
    case 'increment': {
      const items = foods.map((i) => {
        if (i.id === action.id) {
          return { ...i, count: (i?.count ?? 0) + 1 };
        } else {
          return i;
        }
      });
      return items;
    }
    case 'decrement': {
      let items1 = foods.map((i) => {
        if (i.id === action.id) {
          return { ...i, count: (i?.count ?? 0) - 1 };
        } else {
          return i;
        }
      });
      return items1.filter((p) => (p?.count ?? 0) > 0);
    }
    default: {
      throw Error('error');
    }
  }
};

type InitProps = {
  id?: number;
  title?: string;
  price?: string;
  count?: number;
};
const initialFoods: InitProps[] = [];

export function useFoods() {
  return useContext(FoodsContext);
}

export function useFoodsDispatch() {
  return useContext(FoodsDispatchContext);
}
