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
    top: {
        width: SIZES.width,
        height: SIZES.height / 2,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
    },
    
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    infos: {
        position: 'absolute',
        top: -35,
        height: 70,
        backgroundColor: COLORS.white,
        width: "90%",
        padding : 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    infoText: {
        flex:  1,
        alignSelf: 'center',
        color: COLORS.medium,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    infoLine: {
        width: "100%",
        height: 4,
        backgroundColor: COLORS.primary,
        marginHorizontal: 10,
    },
    all: {
        marginTop: 60,
        flex: 1,
        padding: 20,
        alignContent: "flex-start",
        width: "96%",
    },
    title: {
        fontSize: SIZES.MD,
        fontWeight: 'bold',
        color: COLORS.dark,
        marginBottom: 8,
    },
    desc: {
        fontSize: SIZES.SM+2,
        color: COLORS.medium,
        lineHeight: 20,
        fontWeight: '400',
    },
    actions: {
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        marginTop: 40,
        marginHorizontal: "auto",
        width: "95%",
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    actionIcon: {
        color: "orange",
    },
    actionText: {
        flex: 1,
        fontSize: SIZES.SM+2,
        color: COLORS.medium,
        fontWeight: '500',
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

    
    
})

export default styles