import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollViewBackgroundLayer } from './ScrollViewBackgroundLayer';
import { colors, windowHeight } from '../styles';
import CustomHeader from './Header';
import Spacer from './Spacer';

export default function ViewContainer({
  header,
  screenName,
  goBack,
  onPressGoBackIcon,
  children,
  style,
  safeAreaViewBounceColor = colors.backgroundPrimary,
  scrollable = true,
}) {
  const ContainerType = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollViewBackgroundLayer
        topBounceColor={
          safeAreaViewBounceColor
            ? safeAreaViewBounceColor
            : colors.backgroundPrimary
        }
        bottomBounceColor={
          safeAreaViewBounceColor
            ? safeAreaViewBounceColor
            : colors.backgroundPrimary
        }
      />
      {header && (
        <CustomHeader
          title={screenName}
          goBack={goBack}
          onPressGoBackIcon={onPressGoBackIcon}
        />
      )}
      <Spacer size={10} />
      <ContainerType
        style={!scrollable && [styles.container, { ...style }]}
        contentContainerStyle={scrollable && [styles.container, { ...style }]}
      >
        {children}
      </ContainerType>
      <Spacer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    paddingBottom: 120,
  },
  viewContainer: {
    alignItems: 'center',
    // backgroundColor: colors.backgroundPrimary,
    // paddingBottom: 120,
  },
});
