import useMainCalculation from "@/components/Dashboard/Calculator/use/useMainCalculation";
import {ref} from "vue";
import {get, set} from "@vueuse/core";

const isNightMode = ref(false)

const useNightMode = () => {
    const {addDiscount, discountForAll} = useMainCalculation()

    const toggleNightMode = () => {
        set(isNightMode, !get(isNightMode))

        const nightDiscount = get(isNightMode) ? discountForAll - 10 : discountForAll + 10

        addDiscount(nightDiscount, true, true)
    }

    return {toggleNightMode, isNightMode}
}

export default useNightMode
