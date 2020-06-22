import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import servidor from './../../assets/img/servidor.png'
import contratante from './../../assets/img/contratante.png'

export default class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}> 
                    <View style={styles.posImg}>
                        <Image source={servidor} style={styles.img} />
                    </View>
                    <TouchableOpacity
                        style={styles.Buttom} 
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    >
                        <Text style={styles.ButtomTitle}>Servidor</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.medium}>
                    <Text style={styles.TextMedium}>OU</Text>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.posImg}>
                        <Image source={contratante} style={styles.img} />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.Buttom} 
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        <Text style={styles.ButtomTitle}>Contratante</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
