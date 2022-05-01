import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center my-5'>This is Question page</h1>
            <div className='bg-dark text-white py-5'>
                <div className="my-5 container">
                    <h1><b>Question:1:---</b> Difference between javascript and nodejs</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 className='text-center my-3'><u>Node Js</u></h4>
                            <p>1. NodeJS is a Javascript runtime environment.</p>
                            <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                            <p>3. It is mostly used on the server-side.</p>
                            <p>4. Nodejs does not have capability to add HTML tags.</p>
                            <p>5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h4 className='text-center my-3'><u>JavaScript</u></h4>
                            <p>1. Javascript is a programming language that is used for writing scripts on the website. </p>
                            <p>2. Javascript can only be run in the browsers.</p>
                            <p>3. It is basically used on the client-side.</p>
                            <p>4. Javascript is capable enough to add HTML and play with the DOM.</p>
                            <p>5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container py-5">
                <h1><b>Question:2:---</b> When should you use nodejs and when should you use mongodb</h1>
                <p><b>USe Node js:</b> Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. It is better to use Node JS to connect to the database server</p>
                <p><b>USe Mongodb:</b>MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)

                    one of the best advantage with MongoDB is you can store a collection inside another collection (in relational database is can be said as table inside another table) this neglect use of “join”

                    You can also store a array inside a field (neglect use of foreign key of relational model)

                    in this you can use concepts like mongo population to join data of multipal fields if require

                    and most importantly it support More user at a time and also useful if you have large number of fields ( large number of coloums in your collection or table)</p>
            </div>

            <div className="bg-primary text-white mb-5 py-5">
                <div className="container">
                    <h1><b>Question:3:---</b> Difference between javascript and nodejs</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h4 className="text-center my-2">SQL</h4>
                                <p>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                                <p>2. These databases have fixed or static or predefined schema</p>
                                <p>3. These databases are not suited for hierarchical data storage.</p>
                                <p>4. These databases are best suited for complex queries</p>
                                <p>5. Vertically Scalable</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h4 className="text-center my-2">NoAQl</h4>
                                <p>1. Non-relational or distributed database system.</p>
                                <p>2. They have dynamic schema</p>
                                <p>3. These databases are best suited for hierarchical data storage.</p>
                                <p>4. These databases are not so good for complex queries</p>
                                <p>5. Horizontally scalable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;