interface ISku {
    id: number,
    multiplier?: number,
    count: number,
    discount: number,
    active: boolean,
    steps?: ISteps,
}

interface ISteps {
    method: TValue,
    stepsData: { multiplier: number[], value: number[] }
}

type TValue = 'count' | 'discount'


export default ISku
