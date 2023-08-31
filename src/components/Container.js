import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollViewBackgroundLayer } from './ScrollViewBackgroundLayer';
import { colors } from '../styles';
import CustomHeader from './Header';
import Spacer from './Spacer';

export default function ScrollViewContainer({
  header,
  screenName,
  goBack,
  onPressGoBackIcon,
  children,
}) {
  return (
    <SafeAreaView>
      <ScrollViewBackgroundLayer
        topBounceColor={colors.backgroundPrimary}
        bottomBounceColor={colors.backgroundPrimary}
      />
      {header && (
        <CustomHeader
          title={screenName}
          goBack={goBack}
          onPressGoBackIcon={onPressGoBackIcon}
        />
      )}
      <Spacer />
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
      <Spacer />
    </SafeAreaView>
  );
}

export function ViewContainer() {
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    paddingBottom: 120,
  },
});
