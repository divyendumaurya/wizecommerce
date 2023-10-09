import { useContext , useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContext";
import { useEffect } from "react";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();


const initialState = {
    filter_products : [],
    all_products : [],
    grid_view: true,
    sorting_value: "lowest",
    filters :{
        text : '',
        category : "all",
        company : "all",
    },
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


// sorting function 
const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };


// update the filter values 
const updateFilterValue = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch ({ type : "UPDATE_FILTERS_VALUE" , payload : {name , value}});
};




// to sort the product 
useEffect(() =>{
    dispatch ({ type: "FILTER_PRODUCTS"});
    dispatch({type :"SORTING_PRODUCTS" });
}
, [products,state.sorting_value , state.filters]);


// to load all the products for grid and list view 
useEffect(()=>{
    dispatch({type : "LOAD_FILTER_PRODUCTS" , payload : products})
}, [products]);


    return( <FilterContext.Provider value = {{ ...state , setGridView,  setListView , sorting , updateFilterValue,}}>
        {children}
    </FilterContext.Provider>
    );
};

export const useFilterContext = ()=>{
    return useContext(FilterContext);
}