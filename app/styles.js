
// Javascript styling object
// used as a sort of global style object
const styles = {
  // UI Button Component Main
  uiButton: {
    base: {
      outline:'none',
      borderRadius:'5px',
      borderWidth:'1px',
      borderColor:'#0074D9',
      fontSize:'17px',
      fontFamily:'Raleway, sans-serif',
      transitionDuration:'0.3s',
      cursor:'pointer',
      display:'inline-block',
    }, 
    primary: {
      display:'inline-block',
      ":hover": {
        backgroundColor:'#0074D9',
        color:'white'
      },
    },
  },
  // UI Button Component Div
  uiButtonDiv: {
    base: {
      margin:'5px',
      display:'inline-block'
    },
    primary: {
      display:'inline'
    }
  },
  // UI Link Component Main
  uiLink: {
    base: {
      fontSize:'14px',
      fontFamily:'Roboto, sans-serif',
      transitionDuration:'0.3s',
      cursor:'pointer',
      textDecoration:'none',
      color:'black',
      display:'inline-block',
      ":hover": {
        color:'#FF4136',
      },
    },
  },
  // UI Link Component Div
  uiLinkDiv: {
    base: {
      padding:'0%',
      margin:'0%',
    },
  },
  // price Main
  price: {
    base: {
      padding:'0%',
      margin:'0%',
      fontSize:'20px',
      fontFamily:'Roboto, sans-serif',
      color:'black',
      transitionDuration:'0.3s',
      outline:'none',
      display:'inline-block',
    },
  },
  // price Div 
  priceDiv: {
    base: {
      display:'inline-block',
      marginRight:'5px',
    },
  },
  // Title Main - wrapper for animal info
  titleDiv: {
    base: {
      margin:'10px',
    },
  },
  // disclaimer Main
  disclaimer: {
    base: {

    },
  },
  // disclaimer Div
  disclaimerDiv: {
    base: {
      margin:'10px',
      width:'20%',
      fontFamily:'Thasadith, sans-serif',
      fontSize:'6px',
      fontWeigth:'200',
    },
  },
  // Options Main
  options: {
    base: {
      border:'none',
      outline:'none',
      fontSize:'16px',
      fontStyle:'italic',
      padding:'2px',
      display:'inline-block',
      ":hover": {
        color:'#0074D9',
      },
    },
  },
  // Button Options
  toggle: {
    base: {
      width:'75px',
      height:'30px',
      outline:'none',
      margin:'3px',
      borderRadius:'5px',
      borderWidth:'1px',
      borderColor:'#0074D9',
      fontSize:'17px',
      fontFamily:'Raleway, sans-serif',
      transitionDuration:'0.3s',
      cursor:'pointer',
      display:'inline-block'
    },
    primary: {
      display:'inline-block',
      ":hover": {
        backgroundColor:'#0074D9',
        color:'white'
      },
    },
  },
  // back button
  back:{
    base:{
      cursor:'pointer',
      height:'30px',
      margin:'3px',
      transitionDuration:'0.2s',
      color:'black',
      fontSize:'28px',
      display:'inline-block',
      ":hover": {
        color:'#FF4136',
      },
    }
  },
  // div wrapper
  div: {
    base: {
      margin:'10px',
      padding:'0%'
    }
  },
  info: {
    base: {
      fontFamily:'Raleway, sans-serif',
      margin:'0px 0px 0px 10px',
      fontSize:'12px',
      transitionDuration:'0.5s',
    }
  },
  infoDiv: {
    base: {
      margin:'0px',
      padding:'0px'
    }
  }
}

export default styles;
