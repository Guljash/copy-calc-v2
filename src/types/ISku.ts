type ISku = {
    id: number
    multiplier?: number
    count: number
    discount: number
    active: boolean
    steps?: ISteps
}

type ISteps = {
    method: TMethod
    stepsData: { multiplier: number[], value: number[] }
}

type TMethod = 'count' | 'discount'


export default ISku
