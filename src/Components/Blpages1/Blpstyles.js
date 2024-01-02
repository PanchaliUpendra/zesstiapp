import { StyleSheet, StatusBar } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  box1: {
    flex: 2,
    // backgroundColor: "#EEA734",
    backgroundColor: "white",
    position: "relative",
  },
  box2: {
    flex: 1,
    backgroundColor: "white",
  },
  box21: {
    flex: 1.5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box22: {
    flex: 1,
    backgroundColor: "white",
  },
  startbtn: {
    width: "90%",
    minHeight: "40px",
    padding: 10,
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#EEA734",
    borderRadius: 10,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    fontWeight: "600",
  },
  btncon1: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  b21header: {
    backgroundColor: "white",
    fontWeight: "900",
    fontSize: 25,
    letterSpacing: 1.5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  b21text: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "80%",
    color: "#3A3A3A",
    fontSize: 16,
  },
  //image style sheet
  imglogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  //logo head
  logotheaad: {
    fontSize: 27,
    letterSpacing: 1.5,
    color: "black",
    fontWeight: "900",
    textAlign: "center",
    textTransform: "capitalize",
  },
  //style with logo image
  logoimghead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    minHeight: 150,
    width: "100%",
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
  //page image goes here
  pageimg: {
    flex: 1,
  },
  innerpageimg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  backcircle: {
    position: "absolute",
    backgroundColor: "#EEA734",
    borderRadius: 500,
    width: 500,
    height: 500,
    top: -90,
    left: -150,
    opacity: 0.1,
  },
});
