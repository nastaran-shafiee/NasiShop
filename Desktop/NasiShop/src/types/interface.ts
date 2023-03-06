import React from "react";

export interface inputInterface{
    type?:string,
    className?:string,
    placeholder?:string
    error?:string | any
validation?:any

}
export interface buttonInterface{
    title?:string,
    className?:string,
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void
    type?: 'submit' | 'reset' | 'button' | undefined;

}
export interface childrennterface{
    children:any
   

}
export interface liInterface{
    children?: JSX.Element | JSX.Element[];
    width?:string,
    height?:string
    border?:string,
    padding?:string
}
export interface UliInterface{
    children?:any,
    justify?:string,
    padding?:string
}
export interface ButtonCartInterface{
    children?:any,
    
    position?:string
}
export interface childrenInterface{
    children?: JSX.Element | JSX.Element[];
}
export interface thInterface{
  
    text?:string

}
export interface fetchDataInterface{
    page: number;
    limit: number;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    url:string
}
export interface ProductInterface{
    name:string,
    brand: string,
    image:string[]
    thumbnail: string,
    price: number,
    quantity: number,
    createdAt: number,
    id: number,
    category: number,
   
    description: string
}
export interface initialstateInterface{
    data: any[];
}
export interface FetchSliceData {
    fetchSlice:any
  }
 
  export interface orderInterface{
    username: string,
lastname: string,
address:string,
phone: string,
expectAt: number,
products: [
{
id: number,
name: string,
count: string,
price: number |string,
image: string
}
],
prices: number,
delivered: boolean,
createdAt: number,
id: number
  }
   
   export interface authInterface{
    username:string,
    password:string
   }