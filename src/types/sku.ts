export type Sku = {
    id: SkuId
    multiplier?: number
    count: number
    discount: number
    active: boolean
    steps?: Steps
}

export type SkuId = number

export type Steps = {
    method: PriceChangeMethod
    stepsData: { multiplier: number[], value: number[] }
}

export type PriceChangeMethod = 'count' | 'discount'
