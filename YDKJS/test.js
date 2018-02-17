import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Footer from './Footer';
import Header from './Header';

// const { container } = styles;
class OpsExcel extends Component {
    static navigationOptions = {
        title: 'OpsExcel',
        headerStyle: {
            backgroundColor: '#D0D3D4',
            borderBottom: 0,
            borderColor: '#FF8200',
        },
    };
    render() {
        return (

            <View style={styles.viewStyle}>
                <Header />
                <ScrollView style={{
                    flex: 1,
                    marginTop: 50,
                    alignItems: 'center'
                }}>
                    <Text style={{ fontFamily: 'brandon' }}>

                        <Text style={{ fontSize: 40, color: '#00AEC6', fontWeight: 'bold' }}>OPERATIONAL EXCELLENCE</Text>{'\n'}
                        {'\n'}{'\n'}

                        <Text style={{ fontSize: 25 }}>
                            AMBIANCE
                 {'\n'}
                            KNOWLEDGEABLE TEAM
                 {'\n'}
                            CONVENIENCE
                 {'\n'}
                            EMOTIONAL CONNECTION
                 {'\n'}
                        </Text>


                    </Text>
                </ScrollView>
            </View>

        );
    }
}
const styles = {

    viewStyle: {
        flex: 1,
        backgroundColor: '#D0D3D4',

    },
}


export default OpsExcel;

// <WebView
// javaScriptEnabled={true}
// source={{ uri: 'https://video.nest.com/embedded/live/PiPmFqC9MX?autoplay=1?autoplay=0&controls=0' }}
// />
