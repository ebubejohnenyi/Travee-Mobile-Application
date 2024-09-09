import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { 
    Dimensions, 
    StyleSheet, 
    View, 
    SafeAreaView, 
    Text, 
    TextInput, 
    Image,
    TouchableOpacity,
    ScrollView, 
} from 'react-native';
import { useState, useRef } from 'react';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION ={
    latitude: 40.767110,
    longitude: -73.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};


export default function App() {
    const [place, setPlace] = useState("");
    const mapRef = useRef(null)

    const moveTo = () => {
        const camera = mapRef.current?.getCamera()
        if (camera){
            camera.center = place;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

  return (
    <View style={styles.container}>
        <View style={{position: 'relative'}}>
            <View style={{flexDirection: 'row', zIndex: 10, position: 'absolute', top: 50, alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 100/4, height: 100, padding: 5, margin: 5}}>
                <TouchableOpacity>
                    <Image
                        style={{width: 20, height: 20, marginRight: 10}}
                        source={require('../assets/left.png')}
                    />
                </TouchableOpacity>
                <View style={{borderColor: 'white', borderWidth: 1,borderRadius: 100, fontSize: 16, height: 55, width: 300, padding: 10, color: 'white', flexDirection: 'row', alignSelf: 'center', alignContent: 'center', justifyContent: 'center', marginRight: 15}}>
                    <TextInput 
                        placeholder="Search"
                        value={place}
                        onChange={(text)=> setPlace(text)}
                        placeholderTextColor="white"
                        style={{flex: 1, color: 'white', fontSize: 16, padding: 5}}
                    />
                    <Image
                        style={{width: 20, height: 20, margin: 5}}
                        source={require('../assets/whitelocation.png')}
                    />
                </View>
            </View>
            <View style={{position: 'absolute', top: 150}}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{flexDirection: 'row', alignItems: 'center',}}
                        style={{marginTop: 10}}>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                            <Text style={{color: '#fff'}}>Sunny</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                            <Text style={{color: '#fff'}}>AQI 25</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>Place</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                            <Text style={{color: '#fff'}}>Restaurant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                            <Text style={{color: '#fff'}}>Hotel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                            <Text style={{color: '#fff'}}>Club</Text>
                        </TouchableOpacity>
                    </ScrollView>
            </View>
            {/* <View style={{position: 'absolute', alignSelf: 'center', top: 600, padding: 10,backgroundColor: '#229844', height: 160, width: 330, borderRadius: 100/5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection : 'row', alignItems: 'center'}}>
                        <Image
                        resizeMode="contain"
                        source={require('../assets/train.png')}
                        style={{width: 23, height: 23}}
                        />
                        <Text style={{color: 'white', fontSize: 16, marginLeft: 20}}>Transport</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 16, marginRight: 20}}>Next station</Text>
                        <View style={{borderWidth: 2, borderRadius: 100, borderColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 4, width: 35}}>
                            <Image
                            resizeMode="contain"
                            source={require('../assets/next.png')}
                            style={{width: 23, height: 23}}
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{color: 'white', fontSize: 30, fontWeight: 500}}>BuckingHam</Text>
                    <Text style={{color: 'white', fontWeight: 400}}>Loren Ipsum is simply dummy </Text>
                </View>
            </View> */}
        </View>
        <View style={{zIndex: -1}}>
            <MapView
            ref={mapRef}
             style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});