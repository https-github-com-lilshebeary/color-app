import sizes from './sizes';
import bg from './bg.svg';

export default {
  root: {
    backgroundColor: "#1a18aa",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
      [sizes.down("lg")]: {
        width: "80%", 
      },
      [sizes.down("md")]: {
        width: "90%",
      },
      [sizes.down("sm")]: {
        width: "80%",
      },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1rem",
  },
  [sizes.down("xs")]: {
    gridTemplateColumns: "repeat(1, 100%)",
    gridGap: "1.4rem",
  },
  }
};