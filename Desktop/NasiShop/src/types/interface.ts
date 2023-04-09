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
  disabled?: boolean;
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
  className?: string;
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
  setTotalPages?:
    | React.Dispatch<React.SetStateAction<number>>
    | undefined
    | any;
  url?: string;
  category?: string | undefined;
  delivered?: boolean | undefined;
  sort?: string | undefined;
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
export interface LoginFormProps {
  handleLoginUser: (data: authInterface) => void;
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
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string;
}
// for fetch---------------------------------------------------------------------------------------------------------------------

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface InitialStateInterface {
  data: Product[];
  data2: Product[];
  addModal: boolean;
  deleteModal: boolean;
  id: number;
  editProduct: any | null;
  editMode: boolean;
  menCategory: any;
  womanCategory: any;
  singleProduct: any | null;
  orderMode: boolean;
  orderID: number;
  Cart: number;
  mode2: number;
}

interface AddMenPayload {
  menCategory: Product;
}

interface AddWomenPayload {
  womanCategory: Product;
}

interface EditMenPayload {
  id: number;
  data: Product;
}

interface EditWomenPayload {
  id: number;
  data: Product;
}

interface OrderModePayload {
  mode: boolean;
  id: number;
}

export interface FetchSliceInterface {
  name: string;
  initialState: InitialStateInterface;
  reducers: {
    addProducts(
      state: InitialStateInterface,
      action: { payload: Product[] }
    ): void;
    changeAddMod(
      state: InitialStateInterface,
      action: { payload: boolean }
    ): void;
    createDataSuccess(
      state: InitialStateInterface,
      action: { payload: Product }
    ): void;
    deleteDataSuccess(
      state: InitialStateInterface,
      action: { payload: number }
    ): void;
    openDeleteModal(
      state: InitialStateInterface,
      action: { payload: boolean }
    ): void;
    getId(state: InitialStateInterface, action: { payload: number }): void;
    updateDataSuccess(
      state: InitialStateInterface,
      action: { payload: { id: number; data: Product } }
    ): InitialStateInterface;
    editMode(
      state: InitialStateInterface,
      action: { payload: { mode: boolean; item: Product | null } }
    ): void;
    setFetchData(
      state: InitialStateInterface,
      action: { payload: Product[] }
    ): void;
    addMen(
      state: InitialStateInterface,
      action: { payload: AddMenPayload }
    ): void;
    addWomen(
      state: InitialStateInterface,
      action: { payload: AddWomenPayload }
    ): void;
    editMen(
      state: InitialStateInterface,
      action: { payload: EditMenPayload }
    ): InitialStateInterface;
    editWoman(
      state: InitialStateInterface,
      action: { payload: EditWomenPayload }
    ): InitialStateInterface;
    singleProductFunction(
      state: InitialStateInterface,
      action: { payload: Product | null }
    ): void;
    orderModeFunction(
      state: InitialStateInterface,
      action: { payload: OrderModePayload }
    ): void;
  };
}
// ------------------------------------------------------------------
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
export interface CartInterface {
  img?: string;
  name?: string;
  price?: string | number;
  id1?: any;
  quntity?: string | number;
  setMode?: any;
  setMode2?: any;
}
export interface productLocal {
  price?: any;
  quantity?: any;
  name: string;
  image: string;
}
