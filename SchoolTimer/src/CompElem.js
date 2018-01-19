import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

class CompElem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title, 
            id: this.props.id,
            activeRowKey: null
        };
    }

    render () { 
    
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
                </View>
            </View>
        </Swipeout>
        );
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    top: {
      height: 20,
      backgroundColor: 'white'
    },
    header: {
      height: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderColor: 'black'
    },
    headerText: {
      fontSize: 20,
      fontFamily: 'arial',
      color: 'black'
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

export default CompElem;