export const initialState={

    basket:[
        /*{
            id:"123456",
            title:"Mohithhdkjbdjkfbsjkd",
            price:8989,
            rating:4,
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_600x.png?v=1630059242"
        },

        {
            id:"123457",
            title:"Mohithhdkjbdjkfbsjkd",
            price:8989,
            rating:4,
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_600x.png?v=1630059242"
        }*/
    ],
    user:null,
};

export const getBaskteTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
    console.log(action.type);
    switch(action.type){

        case "SET_USER":

            return {...state,
            user:action.user
        }
        case 'ADD_TO_BASKET':
        // Logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
            

        case 'REMOVE_FROM_BASKET':
        // Logic for removing item from basket

            // we cloned the basket
            let newBasket=[...state.basket];

            // we check to see if product exists, 
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);

            if(index>=0){
                // item exists in basket, remove it....
                newBasket.splice(index, 1);
            }
            else{
                console.warn(
                    'Cant remove product (id:${action.id}) as its not exists'
                );
            }

            return {...state, basket:newBasket};
        

        default:
            return state;

    }
}

export default reducer;