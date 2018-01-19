import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Icon } from 'react-native-elements';
import DataList from './infoFile.json';
import CompElem from './CompElem';

const CompList = () => {

        const swipeSettings = {
            autoClose: true,
        
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
        };

        return(
            
                <View style={styles.container}>

                    <View style={styles.top}>
                    </View>

                    <View style={styles.header}>
                       
                            <View style={styles.iconBox}>
                                <Image style={styles.iconImageL} source={require('./login.png')} />
                            </View>

                            <View style={styles.headerTextBox}>
                                <Text style={styles.headerText}> Assignment Counter </Text>
                            </View >

                            <View style={styles.iconBox}>
                                <Image style={styles.iconImageR} source={require('./plus2.png')} />
                            </View>
                   
                    </View>

                    
                    <FlatList
                        data={DataList}
                        renderItem={({ item }) => (
                            <CompElem title={item.title} id={item.id} />
                        /*
                            <Swipeout {...swipeSettings}>
                            <View style={styles.list}>
                                <View style={styles.subList}>
                                    <Text style={styles.headerText}> {item.title} </Text>
                                </View>
                            </View>
                            </Swipeout>
                            */
                        )}
                        keyExtractor={ item => item.id }
                    />
                    
                </View>
            
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    top: {
      height: 15,
      backgroundColor: 'white'
    },
    header: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderColor: 'black'
    },
    headerTextBox: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontSize: 20,
      fontFamily: 'arial',
      color: 'black'
    },
    iconBox: {
        flex: 1,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconImageR: {
        height: 30,
        width: 30
    },
    iconImageL: {
        height: 35,
        width: 35
    },
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    subList: {
    flex: 1,
    flexDirection: 'column',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'black'
    }
  });

export default CompList;