import React from 'react'


const TestComponent = props => {

    // let [moving, setMoving] = React.useState(false)
    let [translateValue, setTranslateValue] =  React.useState(0)

    const testStart = e => {
        console.log('start: '+translateValue)
        setTranslateValue(20)
       
    }
    
    // const touchMove = e => {
    //     if (moving) {
    //         setTranslateValue(40)
    //     }
    //     console.log('move: '+translateValue)
    // }
    // console.log('Outside: '+translateValue )
    const testEnd = e => {
        // setMoving(false)
        console.log('end: '+translateValue)
    }

    // console.log('Outside: '+translateValue )


    // React.useEffect(() => {
    //     window.addEventListener('pointerdown', testStart)

    //     return () =>
    //       window.removeEventListener('pointerdown', testStart);
    // })

    // React.useEffect(() => {
    //     window.addEventListener('pointermove', touchMove)

    //     return () =>
    //       window.removeEventListener('pointermove', touchMove);
    // })

    // React.useEffect(() => {
    //     window.addEventListener('pointerup', testEnd)

    //     return () =>
    //       window.removeEventListener('pointerup', testEnd);
    // })


    return (
        <div>
            TESTE
        </div>
    )
        

}

export default TestComponent