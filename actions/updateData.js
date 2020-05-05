export default function updateData(state, payload) {
    return {
        ...state,
        data: {
            ...state.data,
            ...payload
        }
    }
}
