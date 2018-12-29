
// Javascript styling object
// used as a sort of global style object
const styles = {
  // UI Button Component Main
  uiButton: {
    base: {
      width:'75px',
      height:'30px',
      outline:'none',
      borderRadius:'5px',
      borderWidth:'1px',
      borderColor:'#0074D9',
      fontSize:'17px',
      fontFamily:'Raleway, sans-serif',
      transitionDuration:'0.6s',
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
      transitionDuration:'0.4s',
      cursor:'pointer',
      textDecoration:'none',
      color:'black',
      ":hover": {
        color:'red',
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
      transitionDuration:'0.4s',
      cursor:'pointer',
      outline:'none',
      display:'inline-block',
      ":hover": {
        color:'orange',
      },
    }
  },
  // price Div 
  priceDiv: {
    base: {
      display:'inline-block'
    }
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

    }
  },
  // disclaimer Div
  disclaimerDiv: {
    base: {
      margin:'10px',
      width:'20%',
      fontFamily:'Thasadith, sans-serif',
      fontSize:'6px',
      fontWeigth:'200',
    }
  }
}

export default styles;
