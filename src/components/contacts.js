import React from 'react';
import { Col, Media, } from 'reactstrap';
import 'holderjs';

export default function contacts(props) {
    return (
        <div>
            <div className="col">
                <h1>Contacts </h1>
                {props.contacts.map((each) => {
                    return (
                        <Media style={{ marginTop: 30 }}>
                            <Media left href="#" style={{ marginRight: 10 }}>
                                <Media style={{width:96, height:96}} object src={each.sex ==='male' ? process.env.PUBLIC_URL + "/assets/boy.jpg" : process.env.PUBLIC_URL + "/assets/girl.png"} alt="image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    {each.name} {each.surname}
                        </Media>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                        </Media>
                    )
                })}

            </div>
        </div>

    )
}