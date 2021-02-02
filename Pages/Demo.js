import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,  TouchableOpacity, Image, Switch } from 'react-native';
import AppHeader from '../components/AppHeader';
import { StatusBar } from 'expo-status-bar';


export default function Demo(){

    const [sexe, setSexe] = useState("Homme");
    const [taille, setTaille] = useState(0);
    const [poids, setPoids] = useState(0);
    const [imc, setImc] = useState(0);

    function calcul() {
        let _imc = imc;
        let _taille = taille/100
        _imc = poids / (_taille*_taille)
        setImc(_imc)
    }

    function changeSexe() {
        if (sexe == "Homme") {
            setSexe("Femme")
        } else {
            setSexe("Homme")
        }
    }

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
    
            <AppHeader title="IMC Calculator" />

            <Text style={styles.text}>Votre sexe : {sexe}</Text>
            <Switch
                style={styles.title}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                onChange={changeSexe}
            />

            <Text style={styles.text}>Votre taille : {taille} cm</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTaille(text)}
                value={taille}
                maxLength={3}
                keyboardType="numeric"
            />

            <Text style={styles.text}>Votre poids : {poids} kg</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPoids(text)}
                value={poids}
                maxLength={3}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={calcul}><Text>Calcul de vorte IMC</Text></TouchableOpacity>

            { imc != 0 ? <Text style={styles.title}>Votre imc : {imc.toFixed(1)}</Text> : <Text style={styles.title}>Merci de renseigner vos valeurs</Text>}

            <View style={styles.imageImc}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://www.allianceapnees.org/wp-content/uploads/2017/05/calcul-imc.png',
                    }}
                />
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginTop: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    imageImc: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 150,
    },
    button: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#DDDDDD",
        padding: 10
    },
  });
  