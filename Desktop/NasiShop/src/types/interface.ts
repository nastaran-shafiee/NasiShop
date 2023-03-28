import React from "react";
import { Slice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import DressPage from "../pages/Site/womenCategoryProducts";

export interface inputInterface {
  type?: string;
  className?: string;
  placeholder?: string;
  error?: string | any;
  validation?: any;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}
export interface buttonInterface {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
}
export interface childrennterface {
  children: any;
}
export interface liInterface {
  children?: JSX.Element | JSX.Element[] | string;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
}
export interface UliInterface {
  children?: any;
  justify?: string;
  padding?: string;
}
export interface ButtonCartInterface {
  children?: any;

  position?: string;
}
export interface childrenInterface {
  children?: JSX.Element | JSX.Element[];
}
export interface thInterface {
  text?: string;
}
export interface fetchDataInterface {
  page?: number;
  limit: number;
  setTotalPages?: React.Dispatch<React.SetStateAction<number>> | undefined;
  url?: string;
  category?: string | undefined;
  delivered?: boolean | undefined;
}
export interface ProductInterface {
  name: string;
  brand: string;
  image: string[];
  thumbnail: string;
  price: number;
  quantity: number;
  createdAt: number;
  id: number;
  category: number;

  description: string;
}
export interface initialstateInterface {
  data: any[];
  data2: any[];
  addModal: boolean;
  deleteModal: boolean;
  id: number;
  editProduct: any;
  editMode: boolean;
  menCategory: any[];
  womanCategory: any[];
}
export interface FetchSliceData {
  fetchSlice: any;
}

export interface orderInterface {
  username: string;
  lastname: string;
  address: string;
  phone: string;
  expectAt: number;
  products: [
    {
      id: number;
      name: string;
      count: string;
      price: number | string;
      image: string;
    }
  ];
  prices: number;
  delivered: boolean;
  createdAt: number;
  id: number;
}

export interface authInterface {
  username: string;
  password: string;
}
export interface categoryInterface {
  id: number;
  name: string;
}
export interface optionInterface {
  text?: string;
  value?: string;
}
export interface selectInterface {
  text?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
}
//
export interface FetchSliceInterface
  extends Builder<
    Slice<
      initialstateInterface,
      {
        addProducts: (
          state: initialstateInterface,
          action: PayloadAction<ProductInterface[]>
        ) => void;
        dataCategory: (
          state: initialstateInterface,
          action: PayloadAction<string>
        ) => void;
        changeAddMod: (
          state: initialstateInterface,
          action: PayloadAction<boolean>
        ) => void;
        createDataSuccess: (
          state: initialstateInterface,
          action: PayloadAction<ProductInterface>
        ) => void;
      }
    >
  > {}
export interface OptionSortInterface {
  value?: string;
  className?: string;
  text?: string;
}
export interface Sortinterface {
  name?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[] | string | any;
}
