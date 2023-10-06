import db from "@/db/db";
import {computed, ComputedRef, reactive, ref} from "vue";
import {Sku, SkuId} from "@/types";
import {get, set} from "@vueuse/core";

export interface UseMainCalculation {
    addSku: (skuString: string) => void
    addMultiplier: (multiplier: number) => void
    addDiscount: (discount: number, isDiscountForAll?: boolean, isNeedToRewriteDiscountForAll?: boolean) => void
    deleteSku: () => void
    refreshSkuActive: (id: SkuId) => void
    countSum: ComputedRef<number>
    skuItems: Sku[]
    discountForAll: number
}

const skuItems = reactive<Sku[]>([])
let discountForAll = 0

const useMainCalculation = (): UseMainCalculation => {

    const skuIds = db.map(sku => sku.id)

    const countSum = computed(() => {
        return skuItems.length ? Math.round(skuItems.reduce((acc, sku) => acc + sku.count * (sku.multiplier ?? 1), 0) * 2 / 2) : 0
    })

    const refreshSkuActive = (id: SkuId): void => {
        skuItems.forEach(sku => sku.id === id ? sku.active = true : sku.active = false)
    }

    const addSku = (skuString: string): void => {
        if (!skuString) {
            return
        }

        let dynamicMultiplier = 1
        let dynamicSku = parseInt(skuString, 10)
        const isSkuAlreadyPushed = skuItems.find(sku => sku.id === dynamicSku)

        if (skuString.includes(',')) {
            const [sku, multiplier] = skuString.split(',')

            dynamicMultiplier = parseInt(multiplier)
            dynamicSku = parseInt(sku)
        }

        if (isSkuAlreadyPushed) {
            refreshSkuActive(dynamicSku)
            addMultiplier((isSkuAlreadyPushed.multiplier ?? 1) + dynamicMultiplier)

            return
        }

        const index = skuIds.findIndex(i => i === dynamicSku)

        if (index === -1) {
            return
        }

        skuItems.push({...db[index]})
        refreshSkuActive(dynamicSku)
        addMultiplier(dynamicMultiplier)
    }

    const getStepValue = (skuItem: Sku, multiplier = 1): number => {
        if (!skuItem.steps) {
            return skuItem.count
        }

        skuItem.steps.stepsData.multiplier.push(Infinity)

        const countIndex = skuItem.steps.stepsData.multiplier.findIndex(el => multiplier < el)

        return skuItem.steps.stepsData.value[countIndex]
    }

    const addMultiplier = (multiplier: number): void => {
        const activeSku = skuItems.find(sku => sku.active)

        if (!multiplier || !activeSku) {
            return
        }

        if (activeSku.steps) {
            const value = getStepValue(JSON.parse(JSON.stringify(activeSku)), multiplier)

            switch (activeSku.steps.method) {
                case 'count':
                    //todo сделать отдельную функцию прямого изменения цены
                    activeSku.count = value
                    break
                case 'discount':
                    addDiscount(value)
                    break
            }
        }
        activeSku.multiplier = multiplier
        addDiscount(activeSku.discount)
    }

    const addDiscount = (discount: number, isDiscountForAll = false, isNeedToRewriteDiscountForAll = false): void => {
        if (isNaN(discount) || discount > 100) {
            return
        }

        if (isDiscountForAll) {
            if (!isNeedToRewriteDiscountForAll) {
                skuItems.forEach(sku => sku.discount -= discountForAll)
            }
            discountForAll = discount
            skuItems.forEach(sku => sku.discount += discountForAll)
        } else {
            skuItems.forEach(sku => sku.active ? sku.discount = discount + discountForAll : '')
        }

        skuItems.forEach(sku => {
            const index = skuIds.findIndex(i => i === sku.id)
            const count = sku.steps?.method === 'count' ?
                getStepValue(JSON.parse(JSON.stringify(db[index])), sku.multiplier) :
                db[index].count

            sku.count = count * (1 - (sku.discount / 100))
        })
    }

    const deleteSku = (): void => {
        const activeSku = skuItems.find(sku => sku.active)
        const index = skuItems.findIndex(sku => sku.id === activeSku?.id)

        skuItems.splice(index, 1)
    }

    return {
        addSku, addMultiplier, addDiscount, deleteSku, refreshSkuActive, countSum, skuItems, discountForAll
    }
}

export default useMainCalculation
