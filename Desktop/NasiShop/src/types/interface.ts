import React from "react";

export interface inputInterface{
    type?:string,
    className?:string,
    placeholder?:string

}
export interface buttonInterface{
    title?:string,
    className?:string,
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void
   

}
export interface childrennterface{
    children:any
   

}
export interface liInterface{
    children?:any,
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