import { StyleSheet, Text, View, FlatList } from 'react-native';
import COLORS from '../../consts/colors'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '130,34',
    date: '12/07/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Aluguel',
    value: '650,00',
    date: '14/07/2023',
    type: 0 // despesas
  },
  {
    id: 3,
    label: 'Salário',
    value: '9.000,00',
    date: '15/07/2023',
    type: 1 // receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= "Layseiras"/>

      <Balance saldo="7.391,57" gastos="-302,84"/>

      <Text style={styles.title}>SUAS MOVIMENTAÇÕES</Text>
      <Actions/>
      <FlatList style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.oneback
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    color: COLORS.darkGreen
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});