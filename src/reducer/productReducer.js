export const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, products: action.payload }

              case 'IS_LOADING':
            return { ...state, isLoading: false }

        case 'SORT':
            return { ...state, sortBy: action.payload }
        default:
            return state
    }
}
