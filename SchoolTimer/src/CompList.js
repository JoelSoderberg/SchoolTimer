import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
import LinearGradient from 'react-native-linear-gradient';
import DataList from './infoFile.json';
import CompElem from './CompElem';

const CompList = () => {

        return(
                
                <View style={styles.container}>

                
                    <View style={styles.top}>
                    </View>
               
                        
                   
                            <View style={styles.headerMain}>
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

                                <LinearGradient 
                                 colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                >
                                
                                <View style={styles.headerBoarder}>
                                </View>
                                </LinearGradient>

                            </View>
                        
                    
                    <FlatList
                        data={DataList}
                        renderItem={({ item }) => (
                            <CompElem title={item.title} id={item.id} date={item.date} />
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
    headerMain: {
        flexDirection: 'column'
    },
    header: {
      flexDirection: 'row',
      height: 55,
      //backgroundColor: 'white',
      //borderBottomWidth: 0.5,
      //borderColor: 'black'
    },
    headerBoarder: {
      height: 3,
      width: 50,
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