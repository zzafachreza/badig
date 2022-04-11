import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  MenuOrangTua,
  MenuOrangTuaEdit,
  MenuAnak,
  MenuAnakEdit,
  MenuPasutri,
  MenuPasutriEdit,
  MenuPendidikan,
  MenuPendidikanEdit,
  MenuPengalaman,
  MenuPengalamanEdit,
  MenuPelatihan,
  MenuPelatihanEdit,
  MenuProfileEdit,
  MenuOrangTuaAdd,
  MenuAnakAdd,
  MenuPasutriAdd,
  MenuPendidikanAdd,
  MenuPelatihanAdd,
  Petunjuk,
  Register,
  Add,
  Add2,
  Add3,
  Ttd1,
  Ttd2,
  Detail,
} from '../pages';
import { colors } from '../utils';
import MenuPengalamanAdd from '../pages/MenuPengalamanAdd';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: 'Register',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: true,
          headerTitle: 'Halaman 1 ...',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Add2"
        component={Add2}
        options={{
          headerShown: true,
          headerTitle: 'Halaman 2 ...',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Add3"
        component={Add3}
        options={{
          headerShown: true,
          headerTitle: 'Halaman 3 ...',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Ttd1"
        component={Ttd1}
        options={{
          headerShown: true,
          headerTitle: 'TTD Pelanggan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Ttd2"
        component={Ttd2}
        options={{
          headerShown: true,
          headerTitle: 'TTD Teknisi / Mitra',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Berita Acara',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Petunjuk"
        component={Petunjuk}
        options={({ route }) => ({
          title: route.params.name, headerStyle: {
            backgroundColor: colors.primary,
          }, headerTintColor: '#fff',
        })}
      />



      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuOrangTua"
        component={MenuOrangTua}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />

      <Stack.Screen
        name="MenuOrangTuaEdit"
        component={MenuOrangTuaEdit}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuOrangTuaAdd"
        component={MenuOrangTuaAdd}
        options={{
          headerShown: true,
          headerTitle: 'Orang Tua Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuAnak"
        component={MenuAnak}
        options={{
          headerShown: true,
          headerTitle: 'Anak',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuAnakEdit"
        component={MenuAnakEdit}
        options={{
          headerShown: true,
          headerTitle: 'Anak Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuAnakAdd"
        component={MenuAnakAdd}
        options={{
          headerShown: true,
          headerTitle: 'Anak Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



      <Stack.Screen
        name="MenuPasutri"
        component={MenuPasutri}
        options={{
          headerShown: true,
          headerTitle: 'Suami / Istri',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuPasutriEdit"
        component={MenuPasutriEdit}
        options={{
          headerShown: true,
          headerTitle: 'Suami / Istri Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPasutriAdd"
        component={MenuPasutriAdd}
        options={{
          headerShown: true,
          headerTitle: 'Suami / Istri Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPendidikan"
        component={MenuPendidikan}
        options={{
          headerShown: true,
          headerTitle: 'Pendidikan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPendidikanEdit"
        component={MenuPendidikanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pendidikan Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPendidikanAdd"
        component={MenuPendidikanAdd}
        options={{
          headerShown: true,
          headerTitle: 'Pendidikan Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPengalaman"
        component={MenuPengalaman}
        options={{
          headerShown: true,
          headerTitle: 'Pengalaman',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPengalamanEdit"
        component={MenuPengalamanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pengalaman Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPengalamanAdd"
        component={MenuPengalamanAdd}
        options={{
          headerShown: true,
          headerTitle: 'Pengalaman Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="MenuPelatihan"
        component={MenuPelatihan}
        options={{
          headerShown: true,
          headerTitle: 'Pelatihan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPelatihanEdit"
        component={MenuPelatihanEdit}
        options={{
          headerShown: true,
          headerTitle: 'Pelatihan Edit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuPelatihanAdd"
        component={MenuPelatihanAdd}
        options={{
          headerShown: true,
          headerTitle: 'Pelatihan Tambah',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="MenuProfileEdit"
        component={MenuProfileEdit}
        options={{
          headerShown: true,
          headerTitle: 'Tentang Kami',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



    </Stack.Navigator>
  );
}
