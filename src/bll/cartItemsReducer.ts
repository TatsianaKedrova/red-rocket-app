import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";

export type ItemOptionsType = {
  color?: string;
  size?: string;
  weight?: string;
};

export type SingleItemType = {
  id: string;
  itemPicture: string;
  name: string;
  itemOptions?: ItemOptionsType;
  oldPrice?: string;
  newPrice: string;
  itemsCount: number;
};

const id1 = v1();
const id2 = v1();

export type CartItemsType = SingleItemType[];

const initialState: CartItemsType = [
  {
    id: id1,
    itemPicture: 'https://huckberry.imgix.net/spree/products/336292/original/p8d54LcKxm_ekster_senate_card_holder_tracker_card_0_original.jpg?auto=compress%2Cformat&cs=tinysrgb&fit=max&w=700',
    name: "Ekster Senate Cardholder",
    itemOptions: {
      color: "black",
      size: "200cm",
      weight: "4kg",
    },
    newPrice: "48,30",
    oldPrice: "69,00",
    itemsCount: 1,
  },
  {
    id: id2,
    itemPicture: 'https://cdn.shopify.com/s/files/1/2301/4381/products/1gray-297561_1024x.jpg?v=1624262577',
    name: "MOFT Universal Laptop Stand",
    newPrice: "29,99",
    itemsCount: 1,
  },
];

const slice = createSlice({
  initialState,
  name: "cartItems",
  reducers: {
    incrementItem(state, action: PayloadAction<{ id: string }>) {
      const incrementedItem = state.find(
        (element) => element.id === action.payload.id
      );
      if (incrementedItem) {
        incrementedItem.itemsCount++;
      }
    },
    decrementItem(state, action: PayloadAction<{ id: string }>) {
      const decrementedItem = state.find(
        (element) => element.id === action.payload.id
      );
      if (decrementedItem) {
        decrementedItem.itemsCount--;
      }
    },
  },
});

export const cartItemsReducer = slice.reducer;

export const { incrementItem, decrementItem } = slice.actions;
