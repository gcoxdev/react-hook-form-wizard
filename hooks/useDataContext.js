import { useStateMachine } from 'little-state-machine'
import updateData from '../actions/updateData'

export const useDataContext = () => {
    return useStateMachine(updateData)
}