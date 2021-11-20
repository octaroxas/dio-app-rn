import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView, Image, Alert, ScrollView} from "react-native";
import { styles } from "./styles";
import Profile from './../../assets/profile.jpg';
import { Feather } from '@expo/vector-icons'
import Card from "../../components/Card/Card";

export default function Curriculo() {

    function alertSocial(rede: string, desc: string) {
        Alert.alert(rede,desc)
    }

    return (
            <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profileImage} source={Profile}/>
                <Text style={styles.name}>Octacílio C. de Almeida</Text>
                <Text>Desenvolvedor Frontend</Text>
            </View>

            <View style={styles.socialContainer}>
                <TouchableOpacity onPress={()=>alertSocial('github','https://github.com/octaroxas')}>
                    <Feather name="github" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alertSocial('Instagram','https://instagram.com/octacilio.rx')}>
                    <Feather name="instagram" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alertSocial('LinkedIn','https://www.linkedin.com/in/octac%C3%ADlio-c-almeida')}>
                    <Feather name="linkedin" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Card header='Sobre'>
                Graduando do curso de Bacharelado em Ciência da Computação pela Universidade 
                Federal do Oeste do Pará (UFOPA) 
            </Card>

            <Card header='Experiências Profissionais'>
                <View>
                    <Text> <Feather name="arrow-right"/> Service Core (Mobile Dev)</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> Bolsista Pibex (Mobile Dev)</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> Service Core (Mobile Dev)</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> Bolsista Pibex (Mobile Dev)</Text>
                </View>
            </Card>

            <Card header='Tecnologias'>
                <View>
                    <Text> <Feather name="arrow-right"/> Javascript</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> HTML</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> CSS</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> PHP (Laravel)</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> React</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> React Native</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> MySQL</Text>
                </View>
                <View>
                    <Text> <Feather name="arrow-right"/> Git</Text>
                </View>
            </Card>

            
        </SafeAreaView>
        </ScrollView>
    )
}