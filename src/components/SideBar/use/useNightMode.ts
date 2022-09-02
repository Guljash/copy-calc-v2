import useMainCalculation from "@/components/Dashboard/Calculator/use/useMainCalculation";
import {ref} from "vue";

const isNightMode = ref(false)

const useNightMode = () => {
    const {addDiscount, discountForAll} = useMainCalculation()

    const toggleNightMode = () => {
        let nightDiscount = discountForAll

        isNightMode.value ? nightDiscount -= 10 : nightDiscount += 10

        addDiscount(String(nightDiscount), true)
        isNightMode.value = !isNightMode.value
    }

    return {toggleNightMode, isNightMode}
}

export default useNightMode
