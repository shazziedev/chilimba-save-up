import React, { useState } from 'react';
import { View, Switch , Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import styles from './styles/container.js';

function SwicthComponent({isEnabled,toggleSwitch}) {

    return (
        <View styles={styles.container}>
         <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
    );
}

export default SwicthComponent;