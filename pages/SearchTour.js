import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    Image, 
    ScrollView,
    TouchableOpacity, 
    TextInput,
    Dimensions,
 } from "react-native";
 import { useState} from "react";

export default function SearchTour({navigation}){
    const [dropDown, setDropDown] = useState(false);
    const showDropDown = () => {
        setDropDown(!dropDown)
    }
    const styles = StyleSheet.create({
        header:{
            backgroundColor: "#20212A",
            height: 210,
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
        overlay:{
            padding: 10,
            position: 'absolute',
            top: 30,
            left: 0,
            width: Dimensions.get('window').width, // Set overlay width to screen width
            height: Dimensions.get('window').height, // Set overlay height to screen height
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10
        },
    })
    const navigateToTour = () =>{
        navigation.navigate('Tour');
    }
    return(
        <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={showDropDown}>
                                <Image
                                    style={styles.menu}
                                    source={require('../assets/home.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                    <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Bazil</Text>
                                    <Image
                                    resizeMode="contain"
                                    style={{width: 20, height: 20, marginLeft: 5}}
                                    source={require('../assets/down.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{backgroundColor: '#2F3132', padding: 15, borderRadius: 100, maxWidth: 50,}}>
                                    <Image
                                    style={{width: 10, height: 10}} 
                                    source={require('../assets/close.png')}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#3F4445', padding: 10, borderRadius: 100}}>
                            <TextInput 
                            placeholder="Search"
                            placeholderTextColor="white"
                            style={{padding: 10, width: 300, color: 'white', flex: 1, fontWeight: 500, fontSize: 17}}
                            />
                            <Image
                            style={{width: 20, height: 20, marginLeft: 3,}}
                            source={require('../assets/search.png')}
                            />
                        </View>
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center',}}
                         style={{marginTop: 10}}>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#beach</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#newyork</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#free</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#food</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#nigeria</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#3F4445', padding: 10, borderRadius: 100, alignItems: 'center', margin: 5}}>
                                <Text style={{color: '#fff'}}>#tour</Text>
                            </TouchableOpacity>
                        </ScrollView>
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
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Homepage')
                                setDropDown(false)
                                }}>
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
                            <TouchableOpacity onPress={() => setDropDown(false)}>
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
                            <TouchableOpacity onPress={navigateToTour}>
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
                <ScrollView>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15, borderTopWidth: 2, borderTopColor: '#212227',}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <View style={{backgroundColor: 'green', borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: 50, height: 50}}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../assets/location.png')}
                                    />
                                </View>
                                <View style={{marginLeft: 15}}>
                                    <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>London</Text>
                                    <View style={{flexDirection: 'row', width: 90, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image 
                                        style={{width: 10, height: 10}}
                                        source={require('../assets/graystar.png')}
                                        />
                                        <Text style={{color: 'gray'}}>25</Text>
                                        <Text style={{color: 'gray'}}>reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#202127', height: 30, width: 80, alignItems: 'center', justifyContent: 'center',borderRadius: 100}}>
                                <Text style={{color: 'white'}}>$20,000</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15, borderTopWidth: 2, borderTopColor: '#212227',}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <View style={{backgroundColor: 'green', borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: 50, height: 50}}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../assets/location.png')}
                                    />
                                </View>
                                <View style={{marginLeft: 15}}>
                                    <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>Nigeria</Text>
                                    <View style={{flexDirection: 'row', width: 90, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image 
                                        style={{width: 10, height: 10}}
                                        source={require('../assets/graystar.png')}
                                        />
                                        <Text style={{color: 'gray'}}>105</Text>
                                        <Text style={{color: 'gray'}}>reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#202127', height: 30, width: 80, alignItems: 'center', justifyContent: 'center',borderRadius: 100}}>
                                <Text style={{color: 'white'}}>$25,000</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15, borderTopWidth: 2, borderTopColor: '#212227',}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <View style={{backgroundColor: 'green', borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: 50, height: 50}}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../assets/location.png')}
                                    />
                                </View>
                                <View style={{marginLeft: 15}}>
                                    <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>Colombia</Text>
                                    <View style={{flexDirection: 'row', width: 90, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image 
                                        style={{width: 10, height: 10}}
                                        source={require('../assets/graystar.png')}
                                        />
                                        <Text style={{color: 'gray'}}>15</Text>
                                        <Text style={{color: 'gray'}}>reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#202127', height: 30, width: 80, alignItems: 'center', justifyContent: 'center',borderRadius: 100}}>
                                <Text style={{color: 'white'}}>$10,000</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15, borderTopWidth: 2, borderTopColor: '#212227',}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <View style={{backgroundColor: 'green', borderRadius: 100, alignItems: 'center', justifyContent: 'center', width: 50, height: 50}}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../assets/location.png')}
                                    />
                                </View>
                                <View style={{marginLeft: 15}}>
                                    <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>Canada</Text>
                                    <View style={{flexDirection: 'row', width: 90, justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Image 
                                        style={{width: 10, height: 10}}
                                        source={require('../assets/graystar.png')}
                                        />
                                        <Text style={{color: 'gray'}}>40</Text>
                                        <Text style={{color: 'gray'}}>reviews</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#202127', height: 30, width: 80, alignItems: 'center', justifyContent: 'center',borderRadius: 100}}>
                                <Text style={{color: 'white'}}>$30,000</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}