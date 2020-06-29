import { StyleSheet, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    top: {
        flex: 1,
        backgroundColor: '#FA7500',
        width: wp('100%'),
        height: hp('50%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    medium: {
        backgroundColor: '#FFFFFF',
        width: wp('100%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        backgroundColor:'rgba(0, 133, 255, 0.9)',
        width: wp('100%'),
        height: hp('45%'),
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    Buttom: {
        position: 'absolute',
        height: 60,
        width: 165,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: 'transparent',
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ButtomTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        color: '#FFFFFF',
      },
      TextMedium: {
        fontWeight: "bold",
        color: '#888888'
      },
      img: {
        width: 165,
        height: 150,
      },
      posImgBottom: {
        marginLeft: 50,
      }
});
