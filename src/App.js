import {useState} from 'react';

export default function Form () {
    const [prototypeForm, setPrototypeForm] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    })

    function handleKey1(e) {
        setPrototypeForm({
            ...prototypeForm,
            key1: e.target.value
        })
    }

    function handleKey2(e) {
        setPrototypeForm({
            ...prototypeForm,
            key2: e.target.value
        })
    }

    function handleKey3(e) {
        setPrototypeForm({
            ...prototypeForm,
            key3: e.target.value
        })
    }

    function handleKey4(e) {
        setPrototypeForm({
            ...prototypeForm,
            key4: e.target.value
        })
    }
    return(
        <div style={{
            position: 'fixed',
            marginLeft: '30px',
            marginTop: '30px'

        }}>
            <label style={{

            }}>
                key1:
                <input value={prototypeForm.key1}
                       onChange={handleKey1}
                       style={{
                           paddingTop: '5px',
                           paddingRight: '13px',
                           paddingBottom: '5px',
                           paddingLeft: '13px',
                           marginLeft: '8px',
                           color: 'red'
                       }}/>
                <p style={{
                    paddingTop: '5px',
                    paddingRight: '13px',
                    paddingBottom: '8px',
                    paddingLeft: '23px',
                    marginRight: '130px',
                    backgroundColor: 'blue',
                    borderRadius: '10px',
                    color: 'white',
                }}>
                    {prototypeForm.key1}
                </p>
            </label>
            <label>
                key2:
                <input
                    value={prototypeForm.key2}
                    onChange={handleKey2}
                    style={{
                        paddingTop: '5px',
                        paddingRight: '13px',
                        paddingBottom: '5px',
                        paddingLeft: '13px',
                        marginLeft: '8px',
                        color: 'red'
                    }}

                />
                <p style={{
                    paddingTop: '5px',
                    paddingRight: '13px',
                    paddingBottom: '8px',
                    paddingLeft: '23px',
                    marginRight: '120px',
                    backgroundColor: 'blue',
                    borderRadius: '10px',
                    color: 'white',
                }}>
                    {prototypeForm.key2}
                </p>
            </label>
            <label>
                key3:
                <input value={prototypeForm.key3}
                       onChange={handleKey3}
                       style={{
                           paddingTop: '5px',
                           paddingRight: '13px',
                           paddingBottom: '5px',
                           paddingLeft: '13px',
                           marginLeft: '8px',
                           color: 'red'
                       }}
                />
                <p style={{
                    paddingTop: '5px',
                    paddingRight: '13px',
                    paddingBottom: '8px',
                    paddingLeft: '23px',

                    backgroundColor: 'blue',
                    borderRadius: '10px',
                    color: 'white',
                }}>
                    {prototypeForm.key3}
                </p>
            </label>
            <label>
                key4:
                <input value={prototypeForm.key4}
                       onChange={handleKey4}
                       style={{
                           paddingTop: '5px',
                           paddingRight: '13px',
                           paddingBottom: '5px',
                           paddingLeft: '13px',
                           marginLeft: '8px',
                           color: 'red'
                       }}
                />
                <p style={{
                    paddingTop: '5px',
                    paddingRight: '13px',
                    paddingBottom: '8px',
                    paddingLeft: '23px',
                    marginRight: '130px',
                    backgroundColor: 'blue',
                    borderRadius: '10px',
                    color: 'white',
                }}>
                    {prototypeForm.key4}
                </p>
            </label>


        </div>
    )
}
