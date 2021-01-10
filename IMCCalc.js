import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import IMCMsg from './IMCMsg'

export class IMCCalc extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let imc = ""
        if(this.props.peso){
            imc = this.props.peso/(this.props.altura * this.props.altura)
        }
        
        return (
            <View>
                <Text style = {style.negrito}>
                    Seu IMC é: {imc}
                </Text>
                <IMCMsg imc={imc}></IMCMsg>
            </View>
        )
    }
}

const style = StyleSheet.create({
    negrito:{
        fontWeight:"bold",
        fontSize:20
    }
})

export default IMCCalc
