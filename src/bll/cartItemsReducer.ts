import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";
import cardHolder from "../assets/cardHolder.jpg";
import moftStand from "../assets/moftStand.jpg";

export type SingleItemType = {
  id: string;
  itemPicture: string | null;
  name: string;
  itemOptions?: {
    color?: string;
    size?: string;
    weight?: string;
  };
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
    itemPicture: cardHolder,
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
    itemPicture: moftStand,
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
