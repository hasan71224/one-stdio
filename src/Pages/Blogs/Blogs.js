import React from 'react';

const Blogs = () => {
    return (
        <div >
            <div className='container'>
                <h2 className='text-center my-3'>Blogs- </h2>
                <div>
                    <h4>1. What is difference between authentication and Authorisation give two examples each?</h4>
                    <p>
                        1. the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.
                        2. authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to. Comparing these processes to a real-world example, when you go through security in an airport, you show your ID to authenticate your identity.
                        3. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.

                    </p>
                </div>
                <div>
                    <h4>2. Why we use firebase? what other options do you have to implement authentication?</h4>
                    <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                    <p><strong>1. Cookie based authentication:</strong> Cookie based authentication has been the default method for handling user authentication for a long time. From the below diagram you can clearly see the client posts the login credential to the server, server verifies the credential and creates session id which is stored in server(state-full) and returned to client via set-cookie. On subsequent request the session id from the cookie is verified in the server and the request get processed. Upon logout session id will be cleared from both client cookie and server.</p>
                    <p><strong>2.Token based authentication:</strong> Token based authentication is gaining in popularity because of the rise in single page applications(SPA) and statelessness(RESTful API’s)of the application. There are different ways to implement token based authentication, we will focussing on most commonly used JSON Web Token(JWT). On receiving the credentials from client the server validates the credentials and generates a signed JWT which contains the user information. Note, the token will never get stored in server(stateless). On subsequent request the token will be passed to server and gets verified(decoded) in the server. The token can be maintained at client side in local storage, session storage or even in cookies.</p>
                </div>
                <div>
                    <h4>3. what other services does firebase provide other than authentication?</h4>
                    <p>There are many services which Firebase provides, Most useful of them are:

                        1. Cloud Firestore <br />
                        2. Cloud Functions <br />
                        3. Authentication <br />
                        4. Hosting <br />
                        5. Cloud Storage <br />
                        6. Google Analytics <br />
                        7. Predictions <br />
                        8. Cloud Messaging <br />
                        9. Dynamic Links <br />
                        10. Remote Config <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;