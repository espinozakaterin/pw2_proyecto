
const handlerBarsContext = {
    "/index.html": {
        "gallery": [
           
        ]
        
        
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;