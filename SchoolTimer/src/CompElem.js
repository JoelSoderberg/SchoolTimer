import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

class CompElem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title, 
            id: this.props.id,
            date: this.props.date,
            activeRowKey: null
        };
    }

    render () { 

        var days = new Date(this.props.date);
        var now = new Date();
        var count = Math.round((days - now)/86400000);
        console.log(count);
    
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.state.id})
            },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', style: 'cancel'},
                                {text: 'Yes'}
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.state.id,
            sectionId: 1
        };
        return(
        <Swipeout {...swipeSettings}>
            <View style={styles.list}>
                <View style={styles.subList}>
                    <Text style={styles.headerText}> {this.state.title} </Text>
                    <Text style={styles.headerSubText}> {count} Days Left </Text>
                </View>
                
            </View>
        </Swipeout>
        );
    }

}


const styles = StyleSheet.create({
    
    headerText: {
      fontSize: 15,
      fontFamily: 'arial',
      color: 'black'
    },
    headerSubText: {
      paddingTop: 6,
      fontSize: 15,
      fontFamily: 'arial',
      color: 'black'
    },
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'white'
    },
    subList: {
    flex: 1,
    flexDirection: 'column',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    borderBottomEndRadius: 1,
    borderBottomStartRadius: 1,
    borderColor: 'black'
    }
  });

export default CompElem;