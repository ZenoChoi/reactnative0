import { StatusBar, setStatusBarTranslucent } from "expo-status-bar";
import 'react-native-gesture-handler';
import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Navigator,  RefreshControl,  Button, StackNavi, TextInput, KeyboardAvoidingView, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, AsyncStorage } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Video } from 'expo-av';
import { Icon } from "native-base";
import { DataTable } from 'react-native-paper';
import { NativeModules, Platform } from 'react-native';

import tEn from './locales/en.json';
import tPt from './locales/pt.json';


const deviceLanguage =
Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
  : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage);
let t = [];
let clear = '';
let submit = '';

switch(deviceLanguage){
  case 'pt_BR': 
    t = tPt;
    clear = 'Limpar';
    submit = 'Enviar';
    break;
  case 'en_US':
    t = tEn;
    clear = 'Clear';
    submit = 'Submit';
    break;
  default:
    t = tEn;
    clear = 'Clear';
    submit = 'Submit';
    break;
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: "#0AFFE6",
  },
  flag: {
    height: 50,
    width: 90,
    margin: 5,
    marginTop: 10,
    resizeMode: 'contain'
  },
  logo:{
    height: 100,
    width: 100,
    marginTop: '15%',
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  botaoLang:{
    textAlign: "center",
    width: 180,
    height: 40,
    color: '#ffffff',
    marginTop: 5,
    marginHorizontal: 40,
    backgroundColor: "#05F1AB",
    shadowColor: '#133F44',
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1E7B6B'
  },
  mini:{
    height: 40,
    width: 40,
    resizeMode: 'contain'
  }
});

function PINInsert({ navigation }){
  clearText = () => {
    _textInput.setNativeProps({text: ''});
  }

  const windowHeight = Dimensions.get('window').height;

  var onoff = 0
  hideText = () => {
    if(onoff == 0){
      _textInput.setNativeProps({secureTextEntry: false});
      onoff = 1;
    }else{
      _textInput.setNativeProps({secureTextEntry: true})
      onoff = 0;
    }
  }
  
  return(
    <KeyboardAvoidingView style={styles.container0} >
      <SafeAreaView style={{flex: 1, backgroundColor: '#00FFEC'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1, backgroundColor: '#00DCCC', alignItems: "center", justifyContent: 'flex-end'}}>
            <View style={{ width: '95%', alignItems: "center", flexDirection: "row-reverse"}} >

              <TouchableOpacity onPress={()=>t=tEn} >
                <Image style={styles.flag} source={require('./assets/en.png')} />
              </TouchableOpacity>              
              <TouchableOpacity onPress={()=>t=tPt} >
                <Image style={styles.flag} source={require('./assets/br.png')} />
              </TouchableOpacity>
            </View>
            <Image style={styles.logo} source={require('./assets/headphone.png')} />
            <Text style={{fontSize: 40, marginTop: 4}}>SoundFly</Text>
            <View style={{width: '100%', alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
              <TextInput
                ref={component => _textInput = component}
                style={{
                  height: 35,
                  width: '27.5%',
                  marginTop: '10%',
                  borderWidth: 1,
                  borderColor: '#bbb',
                  fontSize: 28,
                  backgroundColor: '#fff'
                }}
                maxLength={6}
                secureTextEntry={true}
                placeholder="PIN"
              />
              <TouchableOpacity onPress={hideText} style={{alignItems: "center", justifyContent: "center", marginTop: 40, marginHorizontal: 5}}>
                <Icon name="eye" size={20} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", flexDirection: 'row' }}>
              <TouchableOpacity onPress={clearText}
                  style={{margin: 5, marginTop: 20, backgroundColor: 'blue', padding: 5, borderRadius: 8}}
              >
                <Image style={{height: 40, width: 40, }} source={require('./assets/clear.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>
                navigation.navigate('banner')}
                style={{margin: 5, marginTop: 20, backgroundColor: 'purple', padding: 5, borderRadius: 8}}
              >
                <Image style={{height: 40, width: 40, }} source={require('./assets/search.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

function Banner({ navigation }){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center", backgroundColor: "#00FFD4"}}>
        <View style={{flexDirection: "row", width: '100%', justifyContent: "center"}}>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}><Image style={styles.flag} source={require('./assets/headphone.png')} /></View>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}><Image style={styles.flag} source={require('./assets/headphone.png')} /></View>
        </View>
        <View style={{
          borderRadius: 16,
          backgroundColor: '#0CF1CC',
          width: 350,
          height: 80,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#399888"}}>
            <Text style={{color: '#fff', fontSize: 35}}>Congresso ABC</Text>
          </View>
          <View style={{
            height: 250,
            width: 250,
            marginTop: '17.5%',
            borderWidth: 1,
            borderColor: '#28CAAF',
            backgroundColor: '#0CF1CC'}}
          >
          </View>
          <TouchableOpacity onPress={() =>
            navigation.navigate('List')}
            style={{marginTop: 20, borderRadius: 8, borderWidth: 2, borderColor: '#ccc', backgroundColor: '#0CF1CC', width: 200, justifyContent: "center", alignItems: "center",}}
          >
            <Text style={{color: '#000', fontSize: 25, fontWeight: "bold"}} > {t.continue} </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

let listaSala = {
  sala: [
    {
      desc: [
        {
          nome: 'Sala 1',
          estado: 'Ao Vivo',
          pubpv: 0
        }
      ]
    },
    {
      desc: [
        {
          nome: 'Auditório',
          estado: 'Espera',
          pubpv: 0
        }
      ]
    },
    {
      desc: [
        {
          nome: 'Sala 5',
          estado: 'Ao vivo',
          pubpv: 0
        }
      ]
    },
    {
      desc: [
        {
          nome: 'Ginásio',
          estado: 'Programada',
          pubpv: 1
        }
      ]
    },
    {
      desc: [
        {
          nome: 'Pavilhão',
          estado: 'Encerrada',
          pubpv: 1
        }
      ]
    }
  ],
};

let roomName = '';
let roomStatus = '';
let roomPublicity = -1;
let indexNo = -1;
let lang = '';

function getData(nome, estado, publicidade, j){
  roomName = nome;
  roomStatus = estado;
  roomPublicity = publicidade;
  indexNo = j;
}

function getLang(nome, estado, publicidade, j, idioma){
  roomName = nome;
  roomStatus = estado;
  roomPublicity = publicidade;
  indexNo = j;
  lang = idioma;
}

function RoomList({ navigation }){
  let buildTable = [];

  for(var i=0;i<listaSala.sala.length;i++){
    let publicidade = [];
    const lock = <Image style={{height: 18, width: 18, resizeMode: 'contain'}} source={require('./assets/lock.jpg')} key={i.toString()} />;
    const unlock = <Image style={{height: 18, width: 18, resizeMode: 'contain'}} source={require('./assets/unlock.jpg')} key={i.toString()} />;
    let descNome = listaSala.sala[i].desc[0].nome;
    let descEstado = listaSala.sala[i].desc[0].estado;
    let descPubPv = listaSala.sala[i].desc[0].pubpv;

    if(listaSala.sala[i].desc[0].pubpv == 1){
      publicidade.push(lock);
      
      buildTable.push(
        <DataTable.Row
          onPressIn={() =>
            getData(descNome, descEstado, descPubPv, i)
          }
          onPress={() =>
          navigation.navigate('Pv')} key={i}>
          <DataTable.Cell>{listaSala.sala[i].desc[0].nome}</DataTable.Cell>
          <DataTable.Cell>{listaSala.sala[i].desc[0].estado}</DataTable.Cell>
          <DataTable.Cell>
            {publicidade}
          </DataTable.Cell>
        </DataTable.Row>
      )
    }else if(listaSala.sala[i].desc[0].pubpv == 0){
      publicidade.push(unlock);
      
      buildTable.push(
        <DataTable.Row
          onPressIn={() =>
            getData(descNome, descEstado, descPubPv, i)
          }
          onPress={() =>
          navigation.navigate('RoomPreview')} key={i}>
          <DataTable.Cell>{descNome}</DataTable.Cell>
          <DataTable.Cell>{descEstado}</DataTable.Cell>
          <DataTable.Cell>
            {publicidade}
          </DataTable.Cell>
        </DataTable.Row>
      )
    }
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center", backgroundColor: "#00FFD4"}}>
        <View style={{flexDirection: "row", width: '100%', justifyContent: "center"}}>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}><Image style={styles.flag} source={require('./assets/headphone.png')} /></View>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}><Image style={styles.flag} source={require('./assets/headphone.png')} /></View>
        </View>
        <View style={{
          borderRadius: 16,
          backgroundColor: '#0CF1CC',
          width: 350,
          height: 80,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#399888"}}>
            <Text style={{color: '#fff', fontSize: 35}}>Congresso ABC</Text>
        </View>
        <DataTable style={{backgroundColor: '#fff', width: '80%', marginTop: '20%', borderWidth: 1, borderColor: '#ccc'}} > 
          <DataTable.Header>
            <DataTable.Title> {t.name} </DataTable.Title>
            <DataTable.Title> {t.status} </DataTable.Title>
            <DataTable.Title> {t.publicity} </DataTable.Title>
          </DataTable.Header>
          {buildTable}
        </DataTable>
      </View>
    </SafeAreaView>
  );
}

function privateRoom({ navigation }){
  roomPublicity = 1;

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center", backgroundColor: "#00FFD4"}}>
        <View style={{flexDirection: "row", width: '100%', justifyContent: "center"}}>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
        </View>
        <View style={{
          borderRadius: 16,
          backgroundColor: '#0CF1CC',
          width: 350,
          height: 80,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#399888"}}>
            <Text style={{color: '#fff', fontSize: 35}}>Congresso ABC</Text>
        </View>
        <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: '15%'}}> {roomName} </Text>
        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 28}}>Sala restrita</Text>
          <Image style={{height: 36, width: 36, resizeMode: 'contain', margin: 4}} source={require('./assets/lock.jpg')} />
        </View>
        <Text style={{fontSize: 28}}> {roomStatus} </Text>
        <Text style={{fontSize: 30, marginTop: 60}}> {t.password} </Text>
        <View style={{width: '100%', alignItems: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
          <TextInput
            ref={component => _textInput = component}
            style={{
              height: 35,
              width: '35%',
              borderWidth: 1,
              borderColor: '#bbb',
              fontSize: 28,
              backgroundColor: '#fff'
            }}
            maxLength={6}
            secureTextEntry={true}
            placeholder= {t.password}
          />
          <TouchableOpacity onPress={hideText} style={{alignItems: "center", justifyContent: "center", marginHorizontal: 5}}>
            <Icon name="eye" size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", flexDirection: 'row' }}>
          <TouchableOpacity onPress={clearText}
            style={{margin: 5, marginTop: 20, backgroundColor: 'blue', padding: 5, borderRadius: 8}}
          >
            <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20}}> {t.clear_text} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() =>
              getData(roomName, roomStatus, roomPublicity, indexNo)
            }
            onPress={() =>
            navigation.navigate('RoomPreview')}
            style={{margin: 5, marginTop: 20, backgroundColor: 'purple', padding: 5, borderRadius: 8}}
          >
            <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20}}> {t.submit} </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </View>
    </SafeAreaView>
  );
}

function RoomPreview({ navigation }){
  let pubPvText = [];
  if(roomPublicity == 0){
    pubPvText.push(
      <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}} key={indexNo}>
        <Text style={{fontSize: 28}}>Sala pública</Text>
        <Image style={{height: 36, width: 36, resizeMode: 'contain', margin: 4}} source={require('./assets/unlock.jpg')} />
      </View>
    );
    roomPublicity = 0;
  }else if(roomPublicity == 1){
    pubPvText.push(
      <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}} key={indexNo}>
        <Text style={{fontSize: 28}}>Sala restrita</Text>
        <Image style={{height: 36, width: 36, resizeMode: 'contain', margin: 4}} source={require('./assets/lock.jpg')} />
      </View>
    );
    roomPublicity = 1;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: "center", backgroundColor: "#00FFD4"}}>
        <View style={{flexDirection: "row", width: '100%', justifyContent: "center"}}>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
        </View>
        <View style={{
          borderRadius: 16,
          backgroundColor: '#0CF1CC',
          width: 350,
          height: 80,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#399888"}}>
            <Text style={{color: '#fff', fontSize: 35}}>Congresso ABC</Text>
        </View>
        <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: '15%'}}> {roomName} </Text>
        {pubPvText}
        <Text style={{fontSize: 28}}> {roomStatus} </Text>
        <Text style={{fontSize: 30, marginTop: 60}}> {t.channel} </Text>
        <TouchableOpacity
          style={styles.botaoLang}
          onPressIn={() =>
            getLang(roomName, roomStatus, roomPublicity, indexNo, 'Original')
          }
          onPress={() => navigation.navigate('room')}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> {t.original} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoLang}
          onPressIn={() =>
            getLang(roomName, roomStatus, roomPublicity, indexNo, 'Inglês')
          }
          onPress={() => navigation.navigate('room')}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> {t.English} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoLang}
          onPressIn={() =>
            getLang(roomName, roomStatus, roomPublicity, indexNo, 'Português')
          }
          onPress={() => navigation.navigate('VideoPlayer')}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> {t.Portugues} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function Room({ navigation }) {  
  let pubPvText = [];
  if(roomPublicity == 0){
    pubPvText.push(
      <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}} key={indexNo}>
        <Text style={{fontSize: 28}}>Sala pública</Text>
        <Image style={{height: 36, width: 36, resizeMode: 'contain', margin: 4}} source={require('./assets/unlock.jpg')} />
      </View>
    );
    roomPublicity = 0;
  }else if(roomPublicity == 1){
    pubPvText.push(
      <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center"}} key={indexNo}>
        <Text style={{fontSize: 28}}>Sala restrita</Text>
        <Image style={{height: 36, width: 36, resizeMode: 'contain', margin: 4}} source={require('./assets/lock.jpg')} />
      </View>
    );
    roomPublicity = 1;
  }

  return (
    <SafeAreaView style={styles.container0}>
      <View style={{flex: 1, alignItems: "center", backgroundColor: "#00FFD4"}}>
        <View style={{flexDirection: "row", width: '100%', justifyContent: "center"}}>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
          <View style={{alignItems: "center", justifyContent: "center", width: '50%'}}>
            <Image style={styles.flag} source={require('./assets/headphone.png')} />
          </View>
        </View>
        <View style={{
          borderRadius: 16,
          backgroundColor: '#0CF1CC',
          width: 350,
          height: 80,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#399888"}}>
            <Text style={{color: '#fff', fontSize: 35}}>Congresso ABC</Text>
        </View>
        <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: '15%'}}> {roomName} </Text>
        {pubPvText}
        <Text style={{fontSize: 28}}> {roomStatus} </Text>
        <Text style={{fontSize: 28}}> {lang} </Text>
        <Text style={{fontSize: 28}}> Conectado </Text>
        <View style={{marginTop: '15%', flexDirection: "row"}}>
          <TouchableOpacity title="Volta para Lobby"
            onPress={() =>{
                navigation.navigate("RoomPreview")
              }
            }
          >
            <Image source={require('./assets/xbutton.png')}
            resizeMode = 'center'
            style={roomstyle.icon} />
          </TouchableOpacity>
          <Image style={roomstyle.icon} source={require('./assets/idioma.png')}/>
          <Image style={roomstyle.icon} source={require('./assets/mute.png')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const roomstyle = StyleSheet.create({
  div0:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FFD4"
  },
  div1:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00E5BE"
  },
  div2:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00C1A0"
  },
  div3:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00826C"
  },
  div4:{
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DDCBB"
  },
  icon:{
    resizeMode: 'contain',
    width: 70,
    height: 70,
    margin: 5,
  },
})

const {width, height} = Dimensions.get('window');

function VideoPlayerScreen({ navigation }){
  return(
    <SafeAreaView style={{justifyContent: "center", alignItems: "center", flex: 1}}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay = {false}
        isLooping = {false}
        useNativeControls
        style={{ width: width, height: height / 3 }}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="pinroom"
          component = {PINInsert}
        />
        <Stack.Screen
          name="banner"
          component = {Banner}
        />
        <Stack.Screen
          name="RoomPreview"
          component = {RoomPreview}
        />
        <Stack.Screen
          name="List"
          component = {RoomList}
        />
        <Stack.Screen
          name="Pv"
          component = {privateRoom}
        />
        <Stack.Screen
          name="room"
          options={{title: 'Welcome'}}
          component = {Room}
        />
        <Stack.Screen
          name='VideoPlayer'
          component={VideoPlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
