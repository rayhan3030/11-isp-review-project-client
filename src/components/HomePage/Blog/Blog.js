import React from 'react';
import useSetTitle from '../../../hooks/useSetTitle';

const Blog = () => {
    useSetTitle('Blog')
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Welcome To Learning Protocol of ISP Review</h2>
                <p className="mt-4 mb-8 dark:text-gray-400"> ✎ This small field is implement for some basic programming knowledge. 4 Simple common questions and the answers were given below. </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-yellow-500">✨ Difference between SQL and NoSQL?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            <span className='text-2xl font-bold'>SQL vs NoSQL: Five Main Differences</span> <br />
                            <small className='text-white'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</small>
                            <br /> <span className=''>There are five practical differences between SQL and NoSQL :</span>
                            <br /> ⓵ Language <br /> ⓶ Scalability  <br /> ⓷ Structure <br /> ⓸ Properties <br /> <br />
                            1. Language
                            SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

                            The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.

                            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
                            <br />
                            <br />
                            2. Scalability
                            Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

                            SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                            NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                            Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
                            <br />
                            <br />
                            3. Structure
                            SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.

                            NoSQL databases need not stick to this format, but generally fit into one of four broad categories:

                            Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.
                            Key-Value stores are dictionaries which access diverse objects with a key unique to each.
                            Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.
                            Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.
                            <br />
                            <br />
                            4. Properties
                            At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:

                            Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
                            Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
                            Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
                            Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
                            NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:

                            Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)
                            Availability: Every request has a non-error result, regardless of how recent that result is.
                            Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.
                            <br />
                            <br />
                            5. Support and communities
                            SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                            NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.

                            SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.

                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-yellow-500"> ✨ What is JWT, and how does it work??</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                            Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                            <br />
                            <br />
                            <span className='text-xl'>When should you use JSON Web Tokens?</span>
                            <br />
                            <br />
                            Here are some scenarios where JSON Web Tokens are useful:

                            Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

                            Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-yellow-500">✨ What is the difference between javascript and NodeJS?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            <span>JavaScript is a lightweight, object-oriented programming language for creating dynamic HTML pages with combined effects. When launched in the V8 engine or via the node interpreter, Node.js typically represents several objects and functions accessible to JavaScript code.

                                The differences between Node.js and JavaScript will be discussed in this post. But, before we get into the differences, let's review JavaScript and Node.js.</span>
                            <br />
                            <br />
                            <span className='text-xl font-semibold'>What is Node.js?</span>
                            <br />
                            <br />
                            <span>
                                For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.

                                Ryan Dahl invented and popularised Node.js in 2009. Web apps, command-line apps, real-time chat apps, and REST API servers are just a few applications that can be built using Node.js. It is, however, mainly used to create network programs like web servers—Node.js’s standard filename extension is.js. You can enroll in the best node js course online if you find helpful node js.
                            </span>
                            <br />
                            <br />
                            <span className='text-xl font-semibold'>
                                The Benefits and Drawbacks of Node.js
                            </span>
                            <br />
                            <br />
                            <span>
                                The following are some of the benefits and drawbacks of Node.js:
                                <br />
                                <span className='font-bold'>Benefits</span>
                                <br />
                                1. JS is an MIT-licensed accessible framework.
                                <br />
                                2. It is a lightweight framework with only the most essential modules. Other components may be added based on the demands of the application.
                                <br />
                                3. It is a multi-platform framework that runs on Windows, Mac OS X, and Linux.
                                <br />
                                4. The JavaScript programming language is used to create server-side apps.
                                <br />
                                5. Any form of data in js applications was never buffered. Data is output in chunks by Node.js apps. The Node.js library's Interfaces are all reactive or non-blocking. Node.js host never awaits data from such an API. It is now crystal clear to us. The server moves on to the following API after calling one, and a Node.js notification mechanism helps the server receive a response from the previous API request.
                                <br />
                                6. JS is a fast-execution programming library based on the V8 JavaScript Engine.
                                <br />
                                Because a Full stack developer earns a lot of money and might benefit from JavaScript or node js, numerous websites provide full stack developer course with placement. You should take a look.
                            </span>
                            <br />
                            <br />
                            <span>
                                <span className='font-bold'>Drawbacks</span>
                                <br />
                                1. One of Node.js' significant drawbacks is its lack of consistency. The API frequently changes, which causes challenges for developers because they'll have to make adjustments to their existing code base to stay compatible.
                                <br />
                                2. It does not enable multi-threading programming and is unsuitable for creating high-performance computing applications.
                                <br />
                                3. Unlike other programming languages, JavaScript does not have a comprehensive and functioning library framework. As a result, users are forced to use a shared library to execute tasks like image analysis, XML processing, Entity mapping, and database operations. It makes it difficult for developers to use Node.js for simple programming tasks.
                                <br />
                            </span>
                            <br />
                            <br />
                            <span className='text-xl font-semibold'>
                                What is JavaScript?
                            </span>
                            <br />
                            <br />
                            <span>
                                Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.
                                <br />
                                It's also known as a browser settings language because it may be used for client-side and server-side programming. Brendan Eich of Netscape designed it, and it was first released in 1995. Before being renamed JavaScript, the language was known as LiveScript. The programming language C has a significant influence on JavaScript's syntax. The filename extension for JavaScript is.js. Angular js node js are both also based on JavaScript.
                            </span>
                            <br />
                            <br />
                            <span className='text-xl font-semibold'>
                                The Benefits and Drawbacks of JavaScript
                            </span>
                            <br />
                            <br />
                            <span>
                                The following are some of the benefits and drawbacks of JavaScript:
                                <br />
                                <span className='font-bold'>Benefits</span>
                                <br />
                                1. It is an open-source framework that is flexible, fast, and lightweight.
                                <br />
                                2. Cross-compilation is possible.
                                <br />
                                3. Interfaces, modules, and classes are all supported.
                                <br />
                                4. It can be used for both frontend and backend development, allowing it to run on various platforms.
                                <br />
                                5. It enables us to create user interfaces that react when the mouse has hovered over them.
                                <br />
                                6. It works well with other languages. Thus it can be used in a variety of other applications.
                                <br />
                                7. We could enhance JavaScript to allow us to write significant applications.
                            </span>
                            <br />
                            <br />
                            <span className='text-xl font-semibold'>
                                Differences Between Node.js and JavaScript?
                            </span>
                            <br />
                            <br />
                            <span>
                                1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                                <br />
                                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                                <br />
                                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                                <br />
                                3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                                <br />
                                4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                                <br />
                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                                <br />
                                5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                                <br />
                                Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                            </span>
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-yellow-500">✨ How does NodeJS handle multiple requests at the same time?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            <span>
                                We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.

                                How NodeJS handle multiple client requests?

                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                                How to scale your NodeJS application with Cluster Module?

                                A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.

                                The cluster module allows easy creation of child processes that all share the same server ports.
                                <br /> <br />
                                Step 1: Create a NodeJS application and install the required Express.js module.
                                <br />
                                Step 2: Create an index.js file on your root directory with the following code.

                            </span> <br />
                            <span>
                                Explanation: If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.

                                They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                            </span>
                            <br />
                            <span>
                                Step 3: Run the index.js file using the following command.
                            </span>
                            <br />
                            <br />
                            <span>
                                Using worker_threads Module: The best solution for CPU performance is Worker Thread. This module is used in Node.js because it is useful for performing heavy JavaScript tasks.
                                <br />
                                Instead of having:
                                <br /> <br />
                                <br />                   ▣ One process
                                <br />             ▣ One thread
                                <br />             ▣ One event loop
                                <br />             ▣ One JS Engine Instance
                                <br />             ▣ One Node.js Instance
                                <br />             ▣ Worker threads have:
                                <br />             ▣ One process
                                <br /><br />
                                <br />       ▣ Multiple threads
                                <br />             ▣ One event loop per thread
                                <br />             ▣ One JS Engine Instance per thread
                                <br />             ▣ One Node.js Instance per thread
                                <br /><br />              Example: Create an index.js file with the following code.
                            </span>
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;