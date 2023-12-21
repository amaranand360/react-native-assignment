import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <SafeAreaView>
            
            <Text style={styles.headingText}> Components/Cleaning Services</Text>
            <ScrollView horizontal={true} style={styles.container}>
                
                <View style={[styles.card, styles.elevatedCard]}>
                    <Image source={require('../assets/Serface.png')} style={styles.imageCard} />
                    <Text style={styles.cardTitle}>Home Cleaning</Text>

                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Image source={require('../assets/home.png')} style={styles.imageCard} />
                    <Text style={styles.cardTitle}>Carpet Cleaning</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // width:250,
        // height:250,
        borderRadius: 4,
        margin: 8,
    },
    elevatedCard: {
        backgroundColor: 'gray'
    },
    imageCard: {
        width: 200,
        height: 200,
    },
    cardTitle: {
        color:"#000000",
        fontSize: 23,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:4,
    
    }, 
})
