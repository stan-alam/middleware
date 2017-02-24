##Chap01

notes: Express vs Hapi

Express is not well suited for larger projects, project of which scale. Hapi is good for this.

Some considerations to take when building web apps, like how to structure your code into files and directories, caching, validating, and authenticating. HapiJs is configuration-centric and is flexible and can be tweaked to the developer's need.

##1.1 What is hapi?

hapi is an open source framework for building applications with node. happi's most common use case is building web services such as JSON APIs, but it can be used to build HTTP proxies and as the server component of single page apps. hapi sits between Node and your own application's code, providing an abstraction layer for working with HTTP requests and responses.

		Node is a platform for writing server side JavaScript. It's powered by the V8 JavaScript engine
		the same one in Chrome. Node also offers on top of V8 a set of APIs for writing apps on the
		server side. There are APIs for working with TCP, HTTP, file-systems, etc. These APIs are exposed
		as built-in JavaScript modules using CommonJS module system. The HTTP module in node is low level,
		building web apps is not efficient and tedious involving to write a lot of boilerplate code. In node
		the web server is part of the application.

##1.1.1 What makes hapi special?

Node has an efficient scaling model, and a vibrant, healthy community. Hapi has a plugin architecture. Hapi is Node,  node is not hapi. JSON is the de factor standard for encoding and data transfer over the web. **The low level detail's of Node runtime let's the developer scale their APIs to thousands of concurrent users without using expensive hardware**. Modularity is also a strength in hapi. **The plugin system let's you join isolated chunks of applications like Legos and have them run as a single application**. The individual chunks or plugins can be developed, tested, and distributed. (npm packages) independently by different developers or teams in a large organization. Plugins also let develops create functionality to share with the entire open-source community.

**Configuration-Driven Features:**

hapi ethos is configuration-over-code, meaning that there aren't a lot of methods to remember to perform commonly required tasks, such as managing file uploads to a server. Instead complex behaviors are wrapped into simple configuration-driven APIs.

Implementing Hapi reduces boilerplate code. It's open source. **It's battle tested**. Used by large companies such PayPal, Yahoo, Mozilla, Disney.

##1.1.2 What kind of framework is hapijs?

*Opinionated frameworks* reduce the number of decisions required of you by making the decisions for you up front and then providing useful behavior without writing much code, think of Ruby Rails. With *Opinionated frameworks* you trade convenience for flexibility. Opinionated frameworks are rigid, and often monolithic, offering a lot of features in one single library. The software dictates your configuration. While hapi is less imposing but does have many features out of the box. **The core library of hapi provides only the essential features you will need when creating most modern web apps. Add ons like authentication is available as plugin modules through npm.

**hapi is configuration centric**

Why is configuration better than code?

Hypothetically: Build an app for an automated production line of jellybeans. An example that is code-centric or rich in methods might look like this code:

```Javascript

const Jellybean = require('jellybean');

const bean      = new Jellybean.bean();

bean.setName('Rootbear');
bean.setColor('brown');
bean.setSpeckles('true');
bean.setHumanReaction('yum!');


```

This code is "verbose" --five methods calls on the *bean* object to create the jellybean.

```Javascript

const Jellybean = require('jellybean');

const options = {
	name: 'spam',
	color: 'mixed',
	speckles: 'true',
	humanReactopm: 'yuck!'
};

```

This code doesn't not require any method calls to create the *jellybean* object. Instead the constructor accepts a configuration object with all the options. The second example is more flexible because it separates the configuration from the code. The configurations of the different jellybean flavors can be saved in a separate file. Changing the flavors/configs in the file without affecting the code. i.e update the config.

##1.2 The building blocks of hapi

Key components in hapi of which underpin every single hapi app.

servers, connections, routes, handlers, and plugins.

1. The server is the root of all hapi applications
2. Routes: specifiy the types of requests, e.g. POST /resources, GET /resources/{application-id}
DELETE /resources/{application-id}
3. Server connections: Link the server with the nic(network card interface)
4. Handlers: Describe how a matched route should be processed
POST /resources > handler: function() {....}
GET /resources/{app-id} > handler: function() {....}
5. Plugins: Extend the server with new functionality

#
    Servers:
    Everything begins with a server, the container for the hapi application. Every other object
    i.e connections, routes, handlers, plugins are created or used in the context of the server.

    Connections:
    Connections are used for the attaching a nic to the server, so the server can start accepting
    incoming requests. By using connections, you can have a single hapi server listen on multiple
    ports, this can be useful for applications using TLS.

    Routes:
    Routes tell hapi that you're using certain type of requests. Routes are created with a set of
    actions/options, including the HTTP verb that is the actions/options along with the path. e.g
    /about
     When a request arrives at the hapi server, hapi will attempt to find a route that matches the request. When it successfully pairs the request with a route, it will call the handler to process(or handle) the request.

     Handlers:
     Every time you create a route, you will specify a handler. A Handler tells hapi(server)how to respond to the HTTP request. A handler can take several forms. THe most flexible is defined as a javascript function with access to a request object and a reply interface.










