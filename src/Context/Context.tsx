import {  createContext, useReducer } from "react";
import { ActionType, ShopReducerInitialStateType, ContextType, InitialStateContextType, ChildrenType, ItemsCartReducerInitialStateType } from "../Types/types";
import { data } from "../Data/data";

////////////////////////  REDUCER SHOP  ////////////////////////////////

export const ShopReducerInitialState: ShopReducerInitialStateType = {
    modalOpen: false,
    array: data,
    pos: 0
}

export function reducerShop(state: ShopReducerInitialStateType, action: ActionType) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {...state, modalOpen: action.payload.modalOpen, pos: action.payload.pos}
            break;

        case 'CLOSE_MODAL':
            return {...state, modalOpen: action.payload.modalOpen}
            break;
              
    }
    return state
}

////////////////////////  REDUCER CART  ////////////////////////////////

export const ItemsCartReducerInitialState: ItemsCartReducerInitialStateType[] = [{
    itemName: '',
    qtdItem: 0,
    valorTotal: 0
}]
    


export function reducerCart(state: ItemsCartReducerInitialStateType[], action: ActionType) {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            let newState = [...state]
            newState.push({
                itemName: action.payload.itemName,
                qtdItem: action.payload.qtdItem,
                valorTotal: action.payload.valorTotal,
            })
            return newState
            break;
              
    }
    return state
}


/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
    shop: ShopReducerInitialState,
    cart: ItemsCartReducerInitialState
}

export const Context = createContext<ContextType>({
    state: ContextInitialState,
    dispatch: () => null
})  

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
    shop: reducerShop(state.shop, action),
    cart: reducerCart(state.cart, action)
})

export function ContextProvider({children}: ChildrenType) {

    const [state, dispatch] = useReducer(mainReducer, ContextInitialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}