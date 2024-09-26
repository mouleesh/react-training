const makeRed = (WrappedComponent) => {

    return function HoC(props){
        return <>
            <div style={{color: "red"}}>
                <WrappedComponent {...props}/>
            </div>
        </>
    }
}

export default makeRed