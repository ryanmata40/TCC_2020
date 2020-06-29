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
                    <View >
                        <Image source={servidor} style={styles.img} />
                    </View>
                    <TouchableOpacity
                        style={styles.Buttom} 
                        onPress={() => 'oi'}
                    >
                        <Text style={styles.ButtomTitle}>Diarista</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.medium}>
                    <Text style={styles.TextMedium}>OU</Text>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.posImgBottom}>
                        <Image source={contratante} style={styles.img} />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.Buttom} 
                        onPress={() => 'oi'}
                    >
                        <Text style={styles.ButtomTitle}>Contratante</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
