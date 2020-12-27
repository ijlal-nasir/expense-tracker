
export default (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter( tran => tran.id != action.payload )
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.concat( action.payload )
            };
        default:
            return state;
    }

  }