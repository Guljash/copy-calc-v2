import ISku from "@/types/ISku"

const db: ISku[] = [
  {id: 101, count: 10, discount: 0, active: true, steps: {
      method: 'count',
      stepsData: {multiplier: [10, 100, 1000], value: [10, 7, 5, 3]}}
  },
  {id: 801, count: 10, discount: 0, active: true,},
  {id: 158, count: 36, discount: 0, active: true,},
]

export default db
