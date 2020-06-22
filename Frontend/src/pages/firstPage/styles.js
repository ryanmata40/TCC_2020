import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    top: {
        backgroundColor: '#FA7500',
        width: '361px',
        height: '300px',
    },
    medium: {
        backgroundColor: '#FFFFFF',
        width: '361px',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        backgroundColor:'rgba(0, 133, 255, 0.9)',
        width: '361px',
        height: '300px',
    },
    Buttom: {
        position: 'absolute',
        height: '58px',
        width: '163px',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 212,
        marginLeft: 92,
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
        width: 166,
        height: 148,
      },
      posImg: {
        paddingLeft: 97,
        paddingTop: 32
      }
});
