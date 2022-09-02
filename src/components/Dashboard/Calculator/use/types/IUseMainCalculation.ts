import type {ComputedRef} from 'vue'
import ISku from "@/types/ISku";
import TInput from "@/types/TInput";

type IUseMainCalculation = {
    addSku: (skuString:string) => void
    addMultiplier: (multiplier:number) => void
    addDiscount: (discount:TInput, isDiscountForAll: boolean) => void
    deleteSku: () => void
    refreshSkuActive: (id:number) => void
    countSum: ComputedRef<number>
    skuItems: ISku[]
    discountForAll: number
}

export default IUseMainCalculation
