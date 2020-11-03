import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    root:{
        display: "flex"
    },
    hide: {
      display: "none",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20
      },
      navBtns: {
        marginRight: "1rem",
        
        "& a": {
          textDecoration: "none" 
        }     
      },
      button:{
        margin: "0 0.5rem",
          [sizes.down("md")]: {
          padding: "0.2rem",
          margin: "0.2"
        },
        [sizes.down("sm")]: {
          marginRight: "0.5",
          marginLeft: "0",
          padding: "0"
        },  
      },
      PaletteFormNavTitle: {
        [sizes.down("md")]: {
         
          fontSize: "20px"
        },
        [sizes.down("sm")]: {
          fontSize: "20px"
        }
      }
});

export default styles;