import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Table } from 'react-native-table-component';
import { Colors } from '../../../Themes/Colors';
import CustomButton from '../../../Components/CustomButton';

const EditTableScreen = ({ route, navigation }) => {
  const { tableData, setTableData } = route.params;
  const [editedData, setEditedData] = useState(tableData.tableData);

  const handleEdit = (rowIndex, colIndex, newValue) => {
    const newData = [...editedData];
    newData[rowIndex][colIndex] = newValue;
    setEditedData(newData);
  };

  const saveChanges = () => {
    setTableData({ ...tableData, tableData: editedData });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Table style={{ borderWidth: 2, borderColor: Colors.Secondary }} >
        {editedData.map((rowData, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {rowData.map((cellData, colIndex) => (
              <TextInput
                key={colIndex}
                style={styles.textInput}
                value={cellData}
                onChangeText={(text) => handleEdit(rowIndex, colIndex, text)}
              />
            ))}
          </View>
        ))}
      </Table>
      <CustomButton title={'Save Changes'} onPress={saveChanges} />
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: Colors.Bg },
  row: { flexDirection: 'row', height: 40, alignItems: 'center',justifyContent:"center" },
  textInput: { flex: 1, color: Colors.Secondary, fontSize: 14, borderWidth: 1, borderColor: Colors.White,textAlign:"center" },

});

export default EditTableScreen;
