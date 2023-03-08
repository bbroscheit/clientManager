const initialState = {
    allUsers: [],
    allMessages:[],
    allClients:[],
    clientDetail:[],
    login:[]
}

function mainReducer(state = initialState, action){
    switch (action.type) {
        case "GET_ALL_USERS":
            return{
                ...state,
                allUsers: action.payload
            };
            
        case "GET_ALL_MESSAGES":
            return{
                ...state,
                allMessages: action.payload
            };
            
        case "GET_ALL_CLIENT":
            return{
                ...state,
                allClients: action.payload
            }
           
        case "CLIENT_DETAIL":
            return{
                ...state,
                clientDetail: action.payload
            }
        case "LOGIN":
            return{
                ...state,
                login: action.payload
            }
        default:
            return state;
            
    }
}

export default mainReducer;