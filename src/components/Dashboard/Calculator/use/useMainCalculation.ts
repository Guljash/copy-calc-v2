import db from "@/db/db";
import {computed, reactive} from "vue";
import ISku from "@/types/ISku";
import TInput from "@/types/TInput";

const useMainCalculation = () => {
    const skuItems = reactive<ISku[]>([])
    const dbMap = db.map(sku => sku.id)

    const countSum = computed(() => {
        if (!skuItems.length) {
            return 0
        }

        return Math.round(skuItems.reduce((acc, sku) => acc + sku.count * sku.multiplier, 0) * 2 / 2)
    })

    const refreshSkuActive = (id:number): void => {
        skuItems.forEach(sku => sku.id === id ? sku.active = true : sku.active = false)
    }

    const addSku = (skuString:string): void => {
        if (!skuString) {
            return
        }
        let dynamicMultiplier = 1
        let dynamicSku:number = parseInt(skuString, 10)
        const alreadyPushedSku = skuItems.find(sku => sku.id === dynamicSku)

        if (skuString.includes(',')) {
            const [sku, multiplier] = skuString.split(',')

            dynamicMultiplier = Number(multiplier)
            dynamicSku = Number(sku)
        }

        if (!alreadyPushedSku) {
            const index = dbMap.findIndex(i => i === dynamicSku)
            if (index === -1) {
                return;
            }

            skuItems.push({...db[index]})

        } else {
            addMultiplier(alreadyPushedSku.multiplier + dynamicMultiplier)
        }

        refreshSkuActive(dynamicSku)
    }

    const addMultiplier = (multiplier:number): void => {
        if (!multiplier) {
            return
        }

        skuItems.forEach(sku => sku.active ? sku.multiplier = multiplier : '')
    }

    const addDiscount = (discount:TInput, isDiscountForAll = false): void => {
        if (!discount) {
            return
        }

        if (isDiscountForAll) {
            skuItems.forEach(sku => sku.discount += parseInt(discount))
        } else {
            skuItems.forEach(sku => sku.active ? sku.discount = parseInt(discount) : '')
        }

        skuItems.forEach(sku => {
            const index = dbMap.findIndex(i => i === sku.id)

            sku.count = db[index].count * (1 - (sku.discount / 100))
        })
    }

    const deleteSku = () => {
        const currentSku = skuItems.find(sku => sku.active)
        const index = skuItems.findIndex(sku => sku.id === currentSku?.id)

        skuItems.splice(index, 1)
    }

    return {
        addSku, addMultiplier, addDiscount, deleteSku, refreshSkuActive, countSum, skuItems
    }
}

export default useMainCalculation
