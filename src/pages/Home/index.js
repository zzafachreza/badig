import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  // const [play, setPlay] = useState(false);


  useEffect(() => {
    if (isFocused) {

      getData('user').then(res => {
        setUser(res);

        axios.post('https://zavalabs.com/badig/data.php', {
          id_user: res.id
        }).then(res => {

          console.error('data server', res.data)
          setData(res.data)

        })


      })


    }
  }, [isFocused]);





  return (
    <SafeAreaView style={{
      flex: 1,
      position: 'relative'
    }}>

      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 25,
          color: colors.white
        }}>Selamat datang, {user.username}</Text>

        <View style={{
          flexDirection: 'row'
        }}>

          <View style={{
            flex: 2
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 25,
              color: colors.white
            }}>Badig atau Berita Acara Digital memudahkan anda dalam membuat berita acara secara online</Text>

          </View>
          <View style={{
            flex: 1
          }}>
            <MyButton onPress={() => navigation.navigate('Add', {
              id_user: user.id
            })} title="New" Icons="create-outline" warna={colors.white} iconColor={colors.primary} colorText={colors.primary} />
          </View>

        </View>

      </View>

      <ScrollView style={{
        flex: 1,
        padding: 10,
      }}>

        {data.map(item => {

          return (

            <TouchableOpacity

              onPress={() => navigation.navigate('Detail', {
                id: item.id_berita
              })}

              style={{
                marginVertical: 5,

                borderWidth: 1,
                padding: 10,
                borderRadius: 10,

              }}>
              <View style={{
                flexDirection: 'row'
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>No. Order</Text>
                  <Text>{item.nomor_order}</Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>Tanggal</Text>
                  <Text>{item.tanggal}</Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>NIK Teknisi</Text>
                  <Text>{item.nik_teknisi}</Text>
                </View>
              </View>


              <View style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>Nama Pelanggan</Text>
                  <Text>{item.nama_pelanggan}</Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>CP Pelanggan</Text>
                  <Text>{item.cp_pelanggan}</Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Text style={styles.judul}>Nomor Internet</Text>
                  <Text>{item.nomor_internet}</Text>
                </View>
              </View>


            </TouchableOpacity>

          )

        })}


      </ScrollView>





      <TouchableOpacity onPress={() => {
        storeData('user', null);

        navigation.replace('Login');
      }} style={{

        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Icon type="ionicon" name="log-out-outline" color={colors.white} />
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 20,
          left: 10,
          color: colors.white
        }}>Keluar</Text>
      </TouchableOpacity>


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600]
  }
})