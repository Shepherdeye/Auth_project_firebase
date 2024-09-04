export const actions = {
    ADD_To_FAVORITE: "ADD_TO_VAVORITE",
    REMOVE_FROM_FAVORITE: "REMOVE_FROM_VAVORITE",
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_To_FAVORITE:
            return [...state, action.payload]

        case actions.REMOVE_FROM_FAVORITE:
            return [state.filter((item) => item.id !== action.payload)]

        default:
            return state;
    }
}