import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export class IMCMsg extends Component {

constructor(props) {
    super(props)
}

    render() {
        let imc = this.props.imc;
        let situacao = "";
        let css = style.situacao;
        if ( imc < 17 && imc != ""){
            situacao = "Muito abaixo do peso"
        } else if (imc > 17 && imc < 18.49){
            situacao = "Abaixo do peso"
        } else if (imc > 18.5 && imc < 24.99){
            situacao = "Normal"
            css= style.normal
        } else if (imc > 25 && imc < 29.99){
            situacao = "Acima do peso"
        } else if (imc > 30 && imc < 34.99){
            situacao = "Obesidade 1"
        } else if (imc > 35 && imc < 39.99){
            situacao = "Obesidade 2 (severa)"
        } else if (imc > 40){
            situacao = "Obesidade 3 (mórbida)"
        }
        
        return (
            <View>
                <Text style={css}>
                    {situacao}
                </Text>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    situacao:{
        color:"red",
        fontWeight:"bold",
        fontSize:20
    },
    normal:{
        color:"blue",
        fontWeight:"bold",
        fontSize:20
    }
})



export default IMCMsg
