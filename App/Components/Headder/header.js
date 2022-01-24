/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, TouchableOpacity,Text } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';
import { BLACK, WHITE } from '../../helper/Color';
import LinearGradient from 'react-native-linear-gradient';
function HeaderWithLogoandText({ leftPress, leftIcon, rightPress, centerText, centerIcon, boldtext, rightIcon, righText, borderBottom, borderLeftRadius, borderRightRadius}) {
  return (
    <LinearGradient
    start={{x:1,y:1}}
    end={{x:0,y:1}}
    colors={['#639BB9', '#324E5D']}
      style={{
        flexDirection: 'row',
        height: isIphoneXorAbove ? 80 : 60 ,
        alignItems:"center",
        width: SCREEN.width,
        paddingHorizontal: 20,
        // backgroundColor: backColor,
        borderBottomColor: BLACK.border,
        borderBottomWidth: borderBottom ? 1 : 0,
        // borderBottomLeftRadius: !borderLeftRadius ? 5 :0,
        // borderBottomRightRadius: !borderRightRadius ? 5:0,

      }}>
      <View style={{width:'100%',flexDirection:'row', marginTop: isIphoneXorAbove ? 20 : 0 ,alignItems:'center'}}>
      {leftPress &&
        <TouchableOpacity
          onPress={leftPress}
          activeOpacity={0.85}>
          <Image source={leftIcon} style={{ height: 26, width: 26, justifyContent: 'center' }} />
        </TouchableOpacity>}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}>

          {centerIcon && <Image source={centerIcon} style={{height: 60, width: 100, resizeMode: 'contain'}}/>}
          {centerText && <Text style={{fontSize:22, fontFamily: boldtext ? FONT.OpenSans.bold : FONT.OpenSans.regular, color:WHITE.dark}}>{centerText}</Text>}
        </View>
      </View>
      {(rightIcon || righText !== '') && <TouchableOpacity
        onPress={rightPress}
        style={{
          width: 35,
          height: 35,
          borderRadius:22,
          elevation:3,
          justifyContent: 'center',
          alignItems: 'center',
 
        }}>
        {righText !== '' && <Text style={{fontSize:16, fontFamily:FONT.OpenSans.regular, color:WHITE.btntxtColor}}>{righText}</Text>}
        {rightIcon && <Image
          source={rightIcon}
          style={{ height: 35, width: 35, resizeMode: 'contain' }}
        />}
      </TouchableOpacity>}
      </View>
    </LinearGradient>
  );
}

export default HeaderWithLogoandText;
