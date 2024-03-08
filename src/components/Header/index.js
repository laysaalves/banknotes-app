import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
//
import COLORS from '../../consts/colors'
//
import FeatherIcon from 'react-native-vector-icons/Feather';
//configuração da statusbar em android e ios
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22:64;

export default function Header({ name }) {
 return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.username}>{name}</Text>

            <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.buttonUser}
                >
                <FeatherIcon name="user" size={29} color={COLORS.secundary} />
            </TouchableOpacity> 
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{ 
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    username:{
        fontSize: 18,
        color: COLORS.secundary,
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 33 / 2,
        elevation: 5
    }
})