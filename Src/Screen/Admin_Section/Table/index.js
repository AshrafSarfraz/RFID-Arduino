import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Colors } from '../../../Themes/Colors';
import { Home, Pen } from '../../../Themes/Icons';
import CustomHeader from '../../../Components/CustomHeader';

const Table_Screen = ({ navigation }) => {
  const [tableData, setTableData] = useState({
    tableHead: ['No', 'Username', 'Level'],
    tableData: [
      ['1', 'Hafiz', 'Manager'],
      ['2', 'Ashraf', 'Staff'],
      ['3', 'Khalid', 'Student'],
      ['4', '', ''],
      ['5', '', ''],
      ['6', '', ''],
      ['7', '', ''],
      ['8', '', ''],
      ['9', '', ''],
      ['10', '', ''],
    ]
  });

  const handleEdit = (rowIndex, colIndex, newValue) => {
    const newData = [...tableData.tableData];
    newData[rowIndex][colIndex] = newValue;
    setTableData({ ...tableData, tableData: newData });
  };

  const navigateToEditScreen = () => {
    navigation.navigate('EditTable', { tableData, setTableData });
  };

  return (
    <View style={styles.container}>
    <CustomHeader  Title={'Manage Access'} source={Home} onPress={()=>navigation.goBack()} />
      <Table borderStyle={{ borderWidth: 2, borderColor: Colors.White }}>
        <Row data={tableData.tableHead} style={styles.head} textStyle={styles.headtxt} />
        <Rows
          data={tableData.tableData}
          textStyle={[styles.text,styles.rowText]}
          style={styles.row}
        />
      </Table>
      <TouchableOpacity onPress={navigateToEditScreen} style={styles.editButton}>
       <Image source={Pen} style={{width:30,height:30,resizeMode:'contain',tintColor:Colors.Secondary}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: Colors.Bg,justifyContent:"center", },
  headtxt:{ margin: 6, color: Colors.Secondary, fontSize: 16 ,textAlign:"center"},
  head: { height: 40, },
  text: {  color: Colors.Secondary, fontSize: 14 ,textAlign:"center"},
  row: { height: 30 },
  rowText: { textAlign: 'center',color:Colors.Secondary },
  editButton: { alignSelf:"flex-end" ,marginTop:"6%"},
  editButtonText: { color: 'white', fontSize: 16 },
});

export default Table_Screen;
