
// Javascript styling object
const styles = {
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
    }, 
    primary: {
      ":hover": {
        backgroundColor:'#0074D9',
        color:'white'
      },
    },
  },
  uiButtonDiv: {
    base: {
      margin:'5px',
    },
    Primary: {

    },
  },
  uiLink: {
    base: {
      fontSize:'14px',
      fontFamily:'Roboto, sans-serif',
      transitionDuration:'0.4s',
      cursor:'pointer',
      decoration:'underline',
      ":hover": {
        color:'red',
      },
    },
    primar: {
      
    },
  },
  uiLinkDiv: {
    base: {

    },
    primar: {
      
    },
  }
}

export default styles;
