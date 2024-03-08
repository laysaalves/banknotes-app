import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
//
import COLORS from '../../consts/colors'
//
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    
    <TouchableOpacity 
        style={styles.actionButton}
        >
        <View style={styles.areaButton}>
        <FeatherIcon name="heart" size={29} color={COLORS.primary} />
        </View>
        <Text style={styles.labelButton}>Saúde</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <FeatherIcon name="trending-up" size={29} color={COLORS.primary} />
        </View>
        <Text style={styles.labelButton}>Investimentos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <FeatherIcon name="briefcase" size={29} color={COLORS.primary} />
        </View>
        <Text style={styles.labelButton}>Viagens</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <FeatherIcon name="shopping-cart" size={29} color={COLORS.primary} />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="barcode" size={29} color={COLORS.primary} />
        </View>
        <Text style={styles.labelButton}>Pagamentos</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 27
    },
    areaButton:{
        backgroundColor: 'rgba(255,255,2555, 0.5)',
        elevation: 5,
        height: 60,
        width: 60,
        borderRadius: 33 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.darkLight
    }
})