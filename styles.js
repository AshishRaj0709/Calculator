import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5"
},
resultContainer:{
  width: "100%",
  height: "100px",
  marginBottom: "20px",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "20px",
  backgroundColor: "#fff"
},
result:{
  fontSize: "48px",
  fontWeight: "bold"
},
buttonRow:{
  flexDirection: "row"
},
button:{
  width: "60px",
  height: "70px",
  margin: "10px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ccc",
  borderRadius: "50px"
},
buttonText:{
  fontSize: "32px",
  color: "#333"
},
operatorButton:{
  backgroundColor: "#fca311"
},
clearButton:{
  backgroundColor: "#e71d36"
}
})

export default styles;