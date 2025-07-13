import { defineStore } from "pinia";

export const store = defineStore('cart' , {
    state:() => ({
        items : []
    }),

    actions : {
        add(ele){
            this.items.push(ele)
        },
        remove(index){
            this.items.splice(index , 1)
        }
    },

    getters : {
        itemscount : (state) => state.items.length
    }
})