import React from "react";
import { Slice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import DressPage from "../pages/Site/womenCategoryProducts";
// input interface-----------------------------------------------
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
// button interface--------------------------------------------------------
export interface buttonInterface {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
// childreninterfav=ce---------------------------------------
export interface childrennterface {
  children: any;
}

// li interface------------------------------------------
export interface liInterface {
  children?: JSX.Element | JSX.Element[] | string;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
}
// ul interface---------------------------------------------
export interface UliInterface {
  children?: any;
  justify?: string;
  padding?: string;
  className?: string;
}
// button cart interface--------------------------------------
export interface ButtonCartInterface {
  children?: any;

  position?: string;
}
// children interface--------------------------------------------
export interface childrenInterface {
  children?: JSX.Element | JSX.Element[];
}
// th interface----------------------------------------------------
export interface thInterface {
  text?: string;
}
// fetch data interfce----------------------------------------------
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
// product Interface------------------------
export interface ProductInterface {
  name: string;
  brand: string;
  image: string[];
  thumbnail: string;
  price: number;
  quantity: number;
  createdAt: number;
  id: number;
  category?: number | string;
  description: string;
}
// fetchslice -------------------------------------
export interface FetchSliceData {
  fetchSlice: any;
}
// order interface------------------------------
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
// auth interface--------------------------------
export interface authInterface {
  username: string;
  password: string;
}
export interface LoginFormProps {
  handleLoginUser: (data: authInterface) => void;
}
// category interface------------------------------------------
export interface categoryInterface {
  id: number;
  name: string;
}
// option interface----------------------------------------------
export interface optionInterface {
  text?: string;
  value?: string;
}
// select interface-------------------------------------------------
export interface selectInterface {
  text?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  className?: string;
  value?: string;
}

// ------------------------------------------------------------------
export interface OptionSortInterface {
  value?: string;
  className?: string;
  text?: string;
}
// sorting interface-----------------------------------------
export interface Sortinterface {
  name?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[] | string | any;
}
// cart interface------------------------------------------------
export interface CartInterface {
  img?: string;
  name?: string;
  price?: string | number;
  id1?: any;
  quntity?: string | number;
  setMode?: any;
  setMode2?: any;
}
// product local interface------------------------------
export interface productLocal {
  price?: any;
  quantity?: any;
  name: string;
  image: string;
}
// for fetch---------------------------------------------------------------------------------------------------------------------

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface InitialStateInterface {
  data: Product[];
  data2: any[];
  addModal: boolean;
  deleteModal: boolean;
  id: number;
  editProduct: any;
  editMode: boolean;
  menCategory: any;
  womanCategory: any;
  singleProduct: any;
  orderMode: boolean;
  orderID: number;
  Cart: number;
  mode2: number;
}

export interface FetchSliceInterface {
  name: string;
  initialState: InitialStateInterface;
  reducers: {
    addProducts(
      state: InitialStateInterface,
      action: PayloadAction<Product[]>
    ): void;
    changeAddMod(
      state: InitialStateInterface,
      action: PayloadAction<boolean>
    ): void;
    createDataSuccess(
      state: InitialStateInterface,
      action: PayloadAction<Product>
    ): void;
    deleteDataSucces(
      state: InitialStateInterface,
      action: PayloadAction<number>
    ): void;
    openDeleteModal(
      state: InitialStateInterface,
      action: PayloadAction<boolean>
    ): void;
    getId(state: InitialStateInterface, action: PayloadAction<number>): void;
    updateDataSuccess(
      state: InitialStateInterface,
      action: PayloadAction<{ id: number; data: Product }>
    ): InitialStateInterface;
    editMode(
      state: InitialStateInterface,
      action: PayloadAction<{ mode: boolean; item: Product }>
    ): void;
    setFetchData(
      state: InitialStateInterface,
      action: PayloadAction<Product[]>
    ): void;
    addMen(state: InitialStateInterface, action: PayloadAction<any>): void;
    addWomen(state: InitialStateInterface, action: PayloadAction<any>): void;
    editMen(
      state: InitialStateInterface,
      action: PayloadAction<{ id: number; data: any }>
    ): InitialStateInterface;
    editWoman(
      state: InitialStateInterface,
      action: PayloadAction<{ id: number; data: any }>
    ): InitialStateInterface;
    singleProductFunction(
      state: InitialStateInterface,
      action: PayloadAction<Product>
    ): void;
    orderModeFunction(
      state: InitialStateInterface,
      action: PayloadAction<{ mode: boolean; id: number }>
    ): void;
    cartChange(
      state: InitialStateInterface,
      action: PayloadAction<number>
    ): void;
    cartchange2(
      state: InitialStateInterface,
      action: PayloadAction<number>
    ): void;
    ChangeMode2(
      state: InitialStateInterface,
      action: PayloadAction<number>
    ): void;
  };
}
