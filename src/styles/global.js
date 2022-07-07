import {StyleSheet} from 'react-native';
import CONFIG from '@constants/configs';
import COLORS from '@constants/colors';

export default StyleSheet.create({
  fullyScreem: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  shadowContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowRadius: 15,
    shadowOpacity: 0.1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    elevation: 2,
    margin: 20,
    marginBottom: 50
  },
  shadowContainer2: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    margin: 5,
    marginBottom: 10,
		elevation: 1,
		shadowOffset:{  width: 1,  height: 1,  },
		shadowColor: 'black',
		shadowOpacity: 0.2,
  },
  row: {
    flexDirection: 'row',
  },
  centerItems: {
    alignItems: 'center',
  },
  secureMargin: {
    paddingHorizontal: 15,
  },
  bgWhite: {
    backgroundColor: '#FFF',
  },
  divider: {
    backgroundColor: '#eee',
    height: 10,
  },
  dividerSmall: {
    backgroundColor: '#eee',
    height: 5,
  },
  contentVerticalMiddle: {
    alignItems: 'center',
  },
  //tipography
  textCenterVertically: {
    textAlignVertical: 'center',
  },
  text: {
  },
  textSmall: {
    fontSize: 13,
    color: '#898A8F'
  },
  textMedium: {
    marginBottom: 3,
  },
  title: {
    fontSize: 22,
    color: COLORS.title,
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.title,
  },
  minimum_text: {
    color: COLORS.minimum_text,
    fontSize: 13,
  },
  slim_text: {
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  fontDark: {
    color: COLORS.darkText,
  },
  sizeFive: {
    fontSize: 12,
  },
  textCenter: {
    textAlign: 'center',
  },
  //header
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.primary
  },
  header_overlaid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pageTitle: {
    color: COLORS.secondary,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  //segment
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderTopColor: "#1e5874",
    borderTopWidth: 1
  },
  segmentButton: {
    paddingVertical: 7,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  segmentText: {
    color: COLORS.secondary,
    marginLeft: 5
  },
  segmentButtonActivated: {
    borderBottomColor: COLORS.secondary
  },
  //spaces
  paddingStatusBar: {
    paddingTop: CONFIG.STATUSBAR_HEIGHT,
  },
  marginStatusBar: {
    marginTop: CONFIG.STATUSBAR_HEIGHT,
  },
  spaceExtraSmall: {
    width: '100%',
    height: 10,
  },
  spaceSmall: {
    width: '100%',
    height: 20,
  },
  spaceMedium: {
    width: '100%',
    height: 30,
  },
  spaceBig: {
    width: '100%',
    height: 50,
  },
  //forms
  label: {
    color: COLORS.label,
    marginBottom: 5
  },
  inputAndroid: {
    height: 50,
    fontSize: 14,
  },
  textareaAndroid: {
    height: 80,
  },
  inputText: {
    color: COLORS.primary,
    fontSize: 20
  },
  errorValidation: {
    color: COLORS.errorColor,
    fontSize: 12,
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 15,
    paddingTop: 5,
  },
  colorErrorValidation: {
    color: COLORS.errorColor,
  },
  //buttons
  buttonContainer: {
    backgroundColor: COLORS.button,
    alignItems: 'center',
    height: 40,
    flexDirection: 'column',
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.buttonText,
  },
  buttonContainerLoading: {
    backgroundColor: COLORS.buttonLoading,
    alignItems: 'center',
    height: 40,
    flexDirection: 'column',
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonCircleContainerLoading: {
    backgroundColor: COLORS.buttonLoading,
    alignItems: 'center',
    height: 50,
    flexDirection: 'column',
    borderRadius: 25,
    justifyContent: 'center',
  },
  defaultButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
  },
  defaultButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#f7f7f7',
    fontWeight: 'bold',
    fontSize: 14,
  },
  clearCircleButton: {
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    borderColor: '#315a79',
    marginVertical: 10,
  },
  clearCircleButtonText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#315a79',
    fontSize: 14,
    fontWeight: 'bold',
  },
  //search without feedback
  buttonSearch: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 15
  },
  buttonSearchIcon: {
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
  },
  buttonSearchText: {
    fontSize: 16,
    color: '#999',
  },
  //tabbar
  //list
  listItemTitle: {
    color: COLORS.darkText,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  listMarker: {
    backgroundColor: '#999',
    color: '#FFF',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
    fontSize: 8,
  },
  listItemSubtitleText: {
    color: '#999',
  },
  emptyListText: {
    textAlign: 'center',
    paddingVertical: 15,
  },
  //segment
  tabsContainerStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  tabStyle: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    backgroundColor: 'transparent',
  },
  tabTextStyle: {
    color: '#999',
  },
  activeTabStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#A60000',
  },
  activeTabTextStyle: {
    color: '#A60000',
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },
  firstTabStyle: {
    borderRightWidth: 0,
    borderRightColor: 'transparent',
  },
  lastTabStyle: {},
  //footer

  footer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
  },
  //modal
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  modalTitle: {
    color: '#333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalSubtitle: {
    color: '#333',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 23,
    fontWeight: 'bold'
  },
  modalSubtitle2: {
    color: '#333',
    paddingVertical: 10,
    fontSize: 20,
  },
  modalText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold'

  },
  labelMarker: {
    marginRight: 12,
    color: '#2e5878',
  },
  topBoxRight: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    zIndex: 99999,
  },
  hide: {
    display: 'none'
  },
  containerContent: {
    flex: 1, 
    backgroundColor: '#FFF', 
    marginTop: 7, 
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    elevation: 7,
    paddingTop: 40
  },
  //flashmessages
  warning_message: {
    backgroundColor: '#fff3cd',
    color: '#856404',
    borderColor: '#ffeeba',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    textAlign: 'justify'
  }
});
