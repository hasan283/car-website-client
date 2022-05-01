import React from 'react';

const StackOverflow = () => {
    return (
        <div>
            <h1 className="text-center my-5">StackOverflow Page</h1>
            <div className="bg-dark text-white py-5 my-5">
                <div className="container">
                    <h1><b>Question:---</b>What are the benefits of using dotENV?</h1>
                    <p><b>Ans: dotenv allows you to separate secrets from your source code. This is useful in a collaborative environment (e.g., work, or open source) where you may not want to share your database login credentials with other people. Instead, you can share the source code while allowing other people to create their own</b></p>
                </div>
            </div>
        </div>
    );
};

export default StackOverflow;