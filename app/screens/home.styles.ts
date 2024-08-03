import { StyleSheet} from 'react-native'
import { COLORS } from '../../constants/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    searchContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        padding: 8,
        backgroundColor: COLORS.lightGrey,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 16,
        justifyContent: 'space-between',
    },
    searchField: {
        color: COLORS.grey,
    },
    searchIcon: {
        color: COLORS.grey,
    },
    tags: {
        marginTop: 25,
        marginStart: 20,
        height: 40,
    },
    travels: {
        height: 280,
    },
    destinations: {
        // height: 120,
    }
})

export default styles