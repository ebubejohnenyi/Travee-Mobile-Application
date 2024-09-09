import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    ScrollView
 } from "react-native"
export default function Tour({navigation}){
    const bgImage = {uri: 'https://images.unsplash.com/photo-1708212970244-e612e919cfe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D'}
    const navigateTo = () =>{
        navigation.navigate('Homepage')
    }
    return(
        <SafeAreaView  style={{backgroundColor: '#000', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={navigateTo}>
                    <View style={{backgroundColor: '#2A2C37', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                        <Image
                        style={{width: 15, height: 15}}
                        resizeMode="contain" 
                        source={require('../assets/left.png')}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 500, marginLeft: 10}}>Tours</Text>
            </View>

            <View>
                <ImageBackground source={bgImage} resizeMode='cover' style={{height: 300}}>
                    <View style={{marginTop: 45, marginLeft: 10, backgroundColor: '#000000a0', flex: 1}}>
                        <Text style={{color: 'white', fontSize: 20}}>Explore in</Text>
                        <Text style={{color: 'white', fontSize: 50, fontWeight: '500'}}>Nigeria</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40,alignItems: 'center', backgroundColor: '#3F4445', padding: 10, borderRadius: 100}}>
                            <TextInput 
                            placeholder="Search"
                            placeholderTextColor="white"
                            style={{padding: 5, width: 300, color: 'white', flex: 1, fontWeight: 500, fontSize: 17}}
                            />
                            <Image
                            style={{width: 20, height: 20, marginLeft: 3,}}
                            source={require('../assets/search.png')}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, marginRight: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{backgroundColor: '#FF61D3', width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    resizeMode='contain'
                                    source={require('../assets/pinned.png')}
                                    ></Image>
                                </View>
                                <Text style={{color: '#fff', fontWeight: 400, fontSize: 17, marginLeft: 20}}>Pined post</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#2A2C37', borderRadius: 100, width: 80, padding: 10}}>
                                <Text style={{color: '#fff', fontWeight: 400, fontSize: 17, textAlign:'center'}}>More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <ScrollView>
            <ScrollView
            horizontal
            >
                <View style={{backgroundColor: '#181F2D', padding: 10, flex: 1, width: 230, height: 245, borderRadius: 100/5, borderWidth: 2, borderColor: 'blue', margin: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 7}}>
                        <Image 
                        style={{width: 50, height: 50, borderRadius: 100}}
                        resizeMode='cover'
                        source={require('../assets/columbia.jpg')}
                        />
                        <View>
                            <Text style={{color: 'gray'}}>Post in</Text>
                            <Text style={{color: 'white', fontWeight: 400, fontSize: 18}}>Greenich</Text>
                        </View>
                        <View style={{backgroundColor: '#2A2C37', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                            <Image
                            style={{width: 15, height: 15}}
                            resizeMode="contain" 
                            source={require('../assets/next.png')}
                            />
                        </View>
                    </View>
                    <Text style={{color: 'white', marginTop: 30, marginBottom: 30, alignItems: 'center'}}>Our city was located right next to Land mark beach, and could look out to the ocean from ...</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A', flex: 1, padding: 10, borderRadius: 100}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/star.png')}
                            />
                            <Text style={{textAlign: 'center', color: '#23A247'}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A',flex: 1, padding: 10, borderRadius: 100, marginLeft: 20}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/comment.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{backgroundColor: '#181F2D', padding: 10, flex: 1, width: 230, height: 245, borderRadius: 100/5, borderWidth: 2, borderColor: 'blue', margin: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 7}}>
                        <Image 
                        style={{width: 50, height: 50, borderRadius: 100}}
                        resizeMode='cover'
                        source={require('../assets/eggFace.jpg')}
                        />
                        <View>
                            <Text style={{color: 'gray'}}>Post in</Text>
                            <Text style={{color: 'white', fontWeight: 400, fontSize: 18}}>Gracias</Text>
                        </View>
                        <View style={{backgroundColor: '#2A2C37', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                            <Image
                            style={{width: 15, height: 15}}
                            resizeMode="contain" 
                            source={require('../assets/next.png')}
                            />
                        </View>
                    </View>
                    <Text style={{color: 'white', marginTop: 30, marginBottom: 30, alignItems: 'center'}}>Our city was located right next to Land mark beach, and could look out to the ocean from ...</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A', flex: 1, padding: 10, borderRadius: 100}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/star.png')}
                            />
                            <Text style={{textAlign: 'center', color: '#23A247'}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A',flex: 1, padding: 10, borderRadius: 100, marginLeft: 20}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/comment.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{backgroundColor: '#181F2D', padding: 10, flex: 1, width: 230, height: 245, borderRadius: 100/5, borderWidth: 2, borderColor: 'blue', margin: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 7}}>
                        <Image 
                        style={{width: 50, height: 50, borderRadius: 100}}
                        resizeMode='cover'
                        source={require('../assets/cruise.jpg')}
                        />
                        <View>
                            <Text style={{color: 'gray'}}>Post in</Text>
                            <Text style={{color: 'white', fontWeight: 400, fontSize: 18}}>Pedro</Text>
                        </View>
                        <View style={{backgroundColor: '#2A2C37', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                            <Image
                            style={{width: 15, height: 15}}
                            resizeMode="contain" 
                            source={require('../assets/next.png')}
                            />
                        </View>
                    </View>
                    <Text style={{color: 'white', marginTop: 30, marginBottom: 30, alignItems: 'center'}}>Our city was located right next to Land mark beach, and could look out to the ocean from ...</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A', flex: 1, padding: 10, borderRadius: 100}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/star.png')}
                            />
                            <Text style={{textAlign: 'center', color: '#23A247'}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A',flex: 1, padding: 10, borderRadius: 100, marginLeft: 20}}>
                            <Image
                            resizeMode="contain"
                             style={{width: 13, height: 13, marginRight: 8}}
                            source={require('../assets/comment.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{borderTopWidth: 1, borderColor: 'gray', marginTop: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, margin: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity style={{backgroundColor: '#24B24C', borderRadius: 100, padding: 10, width: 35,justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                resizeMode="contain"
                                style={{width: 13, height: 13,}}
                                source={require('../assets/whitestar.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 400, marginLeft: 10}}>Most like post</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#20212A', paddingLeft: 20, paddingRight: 20, height: 40, borderRadius: 100}}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 400}}>Newest</Text>
                        <Image
                            resizeMode="contain"
                            style={{width: 13, height: 13, marginLeft: 8}}
                            source={require('../assets/arrowup.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, marginLeft: 15, marginRight: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 100}}
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, marginLeft: 15, marginRight: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 100}}
                            source={require('../assets/cruise.jpg')}
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, marginLeft: 15, marginRight: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{width: 50, height: 50, borderRadius: 100}}
                            source={require('../assets/profile.jpg')}
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
            </ScrollView>
        </SafeAreaView>
    )
}