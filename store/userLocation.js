

// //----------------------------------------------------------------
// //Constants
// //----------------------------------------------------------------
// const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';


// //----------------------------------------------------------------
// //Actions creators
// //----------------------------------------------------------------
// const gotLocation = (payload) => {
//     return {
//         type : GET_CURRENT_LOCATION,
//         payload
//     }
// }


// //----------------------------------------------------------------
// //Thunks
// //----------------------------------------------------------------
// export const getCurrentLocation=()=>{

//         return (dispatch)=>{
//             navigator.geolocation.getCurrentPosition(
//                 (postion)=>{
//                     dispatch(gotLocation(postion))
//                 },
//                 (error)=> console.log(error.message),
//                 {enableHighAccuracy:true, timeout: 20000, maximumAge: 1000}
//             )
//         }
//     } 
    


// //----------------------------------------------------------------
// //Reducers
// //----------------------------------------------------------------

// const getCurrentLocationReducer = (state,action) => {

// }