import axios from 'axios'
import { makeAutoObservable } from "mobx"
import Notify from '../CommonComponents/Notify'

export default class GridViewStore {

    gridListData = []

    constructor() {
        makeAutoObservable(this)
    }

    getGtridData = () => {
        return axios.get(`https://60ff90a3bca46600171cf36d.mockapi.io/api/products`).then(({ data }) => {
            this.gridListData = data

            return data
        }).catch((e) => {
            Notify.success({ message: 'Oops Something went wrong...' })
        })
    }
}