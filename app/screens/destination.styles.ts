import { StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    destinations: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: SIZES.width,
        height: 200,
        borderRadius: 16,
    }
    
})

export default styles