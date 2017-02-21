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

*Opinionated frameworks* reduce the number of decisions required of you by making the decisions for you up front and then providing useful behavior without writing much code, think of Ruby Rails. With *Opinionated frameworks* you trade convenience for flexibility. Opinionated frameworks are rigid, and often monolithic, offering a lot of features in one single library. The software dictates your configuration. While hapi is less imposing but does have many features out of the box. **The code





