import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import IMCCalc from './IMCCalc'

export class IMCApp extends Component {

    constructor(props){
        super(props)
        this.state = { 
            peso: 0,
            altura: 0.0,
            pesoChange: 0,
            alturaChange: 0.0
        }
    }

    mudarPeso(peso) {
        this.setState({pesoChange:peso})
    }

    mudarAltura(altura) {
        this.setState({alturaChange:altura})
    }

    calcular(){
        this.setState({
            pesoEstado: this.state.pesoChange,
            alturaEstado: this.state.alturaChange
        })
    }

    render() {
        return (
            <View>
                
                <TextInput placeholder = "Peso (Kg)"
                onChangeText={(peso) => this.mudarPeso(peso)}>
                </TextInput>

                <TextInput placeholder = "Altura (M)"
                onChangeText={(altura) => this.mudarAltura(altura)}>
                </TextInput>

                <Button title="Calcular" onPress={()=>this.calcular()} >
                </Button>
                
                <IMCCalc peso={this.state.pesoEstado} altura={this.state.alturaEstado}></IMCCalc>
            </View>
        )
    }
}

export default IMCApp