import {makeAutoObservable} from "mobx";
import {deleteBasketItem} from "../http/itemAPI";

export default class BasketStore {
    constructor() {
        this._totalPrice = 0;
        this._basket = [];
        makeAutoObservable(this);
    }

    async setDeleteBasketItem(item) {
        await deleteBasketItem(item.id).then(() => {
            this._basket = this._basket.filter(prod => prod.id !== item.id);
            this._totalPrice -=  item.price * item.count;
        });
    }

    setBasketItems(item) {
        const isItemInBasket = this._basket.findIndex(prod => prod.id === item.id);
        if(isItemInBasket < 0) {
            this._basket = [...this._basket, { count: 1, ...item }];
            let totalPrice = 0;
            this._basket.forEach(item => totalPrice += Number(item.price * item.count));
            this._totalPrice = totalPrice;
        }
    }

    setDeleteAllBasketItems() {
        this._totalPrice = 0;
        return this._basket = [];
    }

    setCountBasketItems(itemId, action) {
        const itemInd = this._basket.findIndex(prod => prod.id === itemId);
        const itemInState = this._basket.find(item => item.id === itemId);
        if (action === "+") {
            const newItem = {
                ...itemInState,
                count: ++itemInState.count
            }
            this._basket = [...this._basket.slice(0, itemInd), newItem, ...this._basket.slice(itemInd + 1)]
        } else {
            const newItem = {
                ...itemInState,
                count: itemInState.count === 1 ? 1 : --itemInState.count
            }
            this._basket = [...this._basket.slice(0, itemInd), newItem, ...this._basket.slice(itemInd + 1)]
        }

        let totalPrice = 0;
        this._basket.forEach(item => totalPrice += Number(item.price * item.count));
        this._totalPrice = totalPrice;
    }


    get basketItems() {
        return this._basket;
    }

    get totalPrice() {
        return this._totalPrice;
    }
}