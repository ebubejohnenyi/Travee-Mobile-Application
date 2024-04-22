import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    Image, 
    ScrollView,
    TouchableOpacity, 
    Dimensions,
} from "react-native";
import React from "react";
import { useState} from "react";

export default function Homepage({navigation}){
    const [dropDown, setDropDown] = useState(false);
    const showDropDown = () => {
        setDropDown(!dropDown)
    }
    const styles = StyleSheet.create({
        header:{
            backgroundColor: "#20212A",
            height: 90,
            width: 350,
            padding: 15,
            borderRadius: 30,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        menu:{
            height: 20,
            width: 20
        },
        profile:{
            width: 50,
            height: 50,
            borderRadius: 100,
            resizeMode: 'cover'
        },
        overlay:{
            padding: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            width: Dimensions.get('window').width, // Set overlay width to screen width
            height: Dimensions.get('window').height, // Set overlay height to screen height
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10
        },
        btn:{
            backgroundColor: '#20212A',
            margin: 10,
            width: 150,
            textAlign: 'center',
            padding: 10,
            borderRadius: 100,
        },
        middleSearchBtn:{
            backgroundColor: '#1F45EE',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            borderRadius: 100,
            width: 250,
            padding: 10,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 10,
        }
    })
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{justifyContent: 'center'}}>
                            <TouchableOpacity onPress={showDropDown}>
                                <Image
                                    style={styles.menu}
                                    source={require('../assets/home.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={styles.profile}
                                source={require('../assets/profile.jpg')}
                            />
                            <View style={{marginLeft: 15}}>
                                <Text style={{color: '#fff', fontSize: 13}}>Hello, </Text>
                                <Text style={{color: '#fff', fontSize: 23, fontWeight: 'bold'}}>John</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#2A2C37', flexDirection: 'row', width: 80, padding: 10,borderRadius: 70, justifyContent: 'space-between', alignSelf: 'center'}}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../assets/notifcation.png')}
                            />
                            <View style={{borderRadius: 100,backgroundColor: 'blue', height: 25, width: 25}}>
                                <Text style={{color: '#fff', textAlign: 'center', paddingTop: 3}}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {dropDown && (
                    <View style={styles.overlay}>
                        <TouchableOpacity onPress={() => setDropDown(false)}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: '#2F3132', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 10, height: 10}} 
                                    source={require('../assets/close.png')}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setDropDown(false)}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: '#1F41F4', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 20, height: 20}} 
                                    source={require('../assets/home.png')}></Image>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: '#fff', fontSize: 20}}>Home</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchTour')}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: '#24B24C', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 20, height: 20}} 
                                    source={require('../assets/search.png')}></Image>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: '#fff', fontSize: 20}}>Search Tour</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: '#FF61D3', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 20, height: 20}} 
                                    source={require('../assets/heart.png')}></Image>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: '#fff', fontSize: 20}}>Your Tour</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: 'gray', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 20, height: 20}} 
                                    source={require('../assets/settings.png')}></Image>
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: '#fff', fontSize: 20}}>Settings</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={{paddingBottom: 90}}>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, marginLeft: 15, marginRight: 15}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image
                                    style={styles.profile}
                                    source={require('../assets/eggFace.jpg')}
                                />
                                <View style={{marginLeft: 10, marginTop: 10}}>
                                    <Text style={{color: '#fff', fontWeight: 200}}>Post in</Text>
                                    <Text style={{color: '#fff', fontWeight: 500, fontSize: 15}}>America</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={{backgroundColor: '#20212A', borderRadius: 100, width: 35, height: 35, padding: 7, margin: 5}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={require('../assets/next.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{justifyContent: 'center', flexDirection: 'row', overflow: 'hidden', flex: 1}}>
                                <Image
                                    style={{resizeMode: 'cover', width: 350, height: 250, borderRadius: 100/4}}
                                    source={require('../assets/pedro_city.jpg')}
                                />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{color: 'white', marginBottom: 10, marginTop: 10}}>Our city was located right next to Land mark beach, and could look out to the ocean from ...</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', color: '#23A347',backgroundColor: '#20212A', margin: 10, width: 150, padding: 10, borderRadius: 100}}>
                                        <Image
                                        style={{width: 13, height: 13, marginRight: 10}}
                                        resizeMode="contain"
                                        source={require('../assets/star.png')}
                                        />
                                        <Text style={{textAlign: 'center', color: '#23A247'}}>Save</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text style={{textAlign: 'center', color: 'white'}}>Comment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, marginLeft: 15, marginRight: 15}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image
                                    style={styles.profile}
                                    source={require('../assets/profile.jpg')}
                                />
                                <View style={{marginLeft: 10, marginTop: 10}}>
                                    <Text style={{color: '#fff', fontWeight: 200}}>Post in</Text>
                                    <Text style={{color: '#fff', fontWeight: 500, fontSize: 15}}>Nigeria</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={{backgroundColor: '#20212A', borderRadius: 100, width: 35, height: 35, padding: 7, margin: 5}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={require('../assets/next.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{justifyContent: 'center', flexDirection: 'row', overflow: 'hidden', flex: 1}}>
                                <Image
                                    style={{resizeMode: 'cover', width: 350, height: 250, borderRadius: 100/4}}
                                    source={require('../assets/columbia.jpg')}
                                />
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{color: 'white', marginBottom: 10, marginTop: 10}}>Our city was located right next to Land mark beach, and could look out to the ocean from ...</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', color: '#23A347',backgroundColor: '#20212A', margin: 10, width: 150, padding: 10, borderRadius: 100}}>
                                        <Image
                                        style={{width: 13, height: 13, marginRight: 10}}
                                        resizeMode="contain"
                                        source={require('../assets/star.png')}
                                        />
                                        <Text style={{textAlign: 'center', color: '#23A247'}}>Save</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text style={{textAlign: 'center', color: 'white'}}>Comment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                <View style={styles.middleSearchBtn}>
                    <View style={{backgroundColor: '#2F68F3', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                        <Image
                        style={{width: 20, height: 20}}
                        resizeMode="contain" 
                        source={require('../assets/whitelocation.png')}
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={{fontSize: 12, color: 'gray'}}>Search in</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>London</Text>
                            <Image
                            resizeMode="contain"
                             style={{width: 20, height: 20, marginLeft: 5}}
                            source={require('../assets/down.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#2F68F3', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                        <Image
                        style={{width: 20, height: 20}}
                        resizeMode="contain" 
                        source={require('../assets/search.png')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}