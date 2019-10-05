import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: {
                user1: {},
                user2: {},
                user3: {},
                user4: {},
            }

        }
    }

    render() {


        return (
            <div id="landingCont">
                <div class="mainLogo">NETFLIX</div>
                <div class="greet">Who's watching now?</div>
                <div class="usersCont">

                    <Link to='/user1/catalog'><div class="userIcon"><img class="userImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"></img> <div class="usName">{this.props.users.user1.name}</div></div></Link>
                    <Link to='/user2/catalog'><div class="userIcon"><img class="userImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"></img> <div class="usName">{this.props.users.user2.name}</div> </div></Link>
                    <Link to='/user3/catalog'><div class="userIcon"><img class="userImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"/> <div class="usName">{this.props.users.user3.name}</div> </div></Link>
                    <Link to='/user4/catalog'><div class="userIcon"><img class="userImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9fa8a33850498.56ba69ac2cc3a.png"/> <div class="usName">{this.props.users.user4.name}</div> </div></Link>
                </div>


            </div>
        )
    }
}
export default Landing;