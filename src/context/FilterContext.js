import { useContext , useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContext";
import { useEffect } from "react";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();


const initialState = {
    filter_products : [],
    all_products : [],
    grid_view: false,
};

export const FilterContextProvier = ({children}) =>{

const{products} = useProductContext(); 



const [state, dispatch] = useReducer(reducer , initialState);


// Set grid view 
const setGridView = () =>{
    return dispatch({type : "SET_GRID_VIEW"});
};


// Set list view 
const setListView = () =>{
    return dispatch({type : "SET_LIST_VIEW"});
};


useEffect(()=>{
    dispatch({type : "LOAD_FILTER_PRODUCTS" , payload : products})
}, [products]);


    return( <FilterContext.Provider value = {{ ...state , setGridView,  setListView}}>
        {children}
    </FilterContext.Provider>
    );
};

export const useFilterContext = ()=>{
    return useContext(FilterContext);
}