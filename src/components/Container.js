import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollViewBackgroundLayer } from './ScrollViewBackgroundLayer';
import { colors } from '../styles';
import CustomHeader from './Header';
import { ScrollView, StyleSheet } from 'react-native';

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
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
});
