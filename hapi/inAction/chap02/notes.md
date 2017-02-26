##Chap 02

**2.1  Designing the API**

Develop a social network for **witch doctors**. Witch doctors will be able to create a profile and upload their spells/hex. Witch doctors can also search for spells that match their scriptures. When a witch doctor likes a spell they can award a pentagram. Collect enough pentagrams and the amateur witch doctor can become a homeopathic practitioner of the dark and not so dark arts.

The user story is As a/an ________ I want _________ so that _________.

	As a user I want to search for spells that match a specific hex so that I can find suitable
	scriptures for casting said spell.

	As a user I want to be able to "pentagram" my favorite spell/hex so that I can give credit to
	the witch/or witch doctor of the household.

	As a user I want to add my own spells so that I can share my scriptures with various other
	 warlocks and/or witches.

**2.1.3 Designing the API endpoints**

endpoints

   * GET /api/spells
   * GET /api/spells/{id}
   * POST /api/spells
   * POST /api/spells/{id}/pentagram


refer to package.json

**2.2.2 creating the database**

The spellBook API will be modeled around two database tables: spells and users


<table class="tg">
  <tr>
    <th class="tg-031e">spells</th>
  </tr>
  <tr>
    <td class="tg-yw4l">name VARCHAR(255)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">brewing_time VARCHAR(255)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">prep_time VARCHAR(255)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">serves INT</td>
  </tr>
  <tr>
    <td class="tg-yw4l">concoction VARCHAR(255)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">scriptures TEXT</td>
  </tr>
  <tr>
    <td class="tg-yw4l">directions TEXT</td>
  </tr>
  <tr>
    <td class="tg-yw4l">pentagrams TEXT</td>
  </tr>
  <tr>
    <td class="tg-yw4l">users_id INT</td>
  </tr>
</table>



<table class="tg">
  <tr>
    <th class="tg-031e">users</th>
  </tr>
  <tr>
    <td class="tg-031e">id INT</td>
  </tr>
  <tr>
    <td class="tg-031e">username VARCHAR(255)</td>
  </tr>
  <tr>
    <td class="tg-031e">password VARCHAR(255)</td>
  </tr>
</table>

## Creating a connection to SQLite using sqlite3

```Javascript

const Sqlite3 = require('sqlite3');
const db = new Sqlite3.Database('./spellBook.sqlite');    // Pass the database filename to the constructor

```

The db.all() method is used for fetching multiple records and accepts two arguments: the SQL query that you will use, will be type of string and a callback with two arguments: an error (**or null if no error occurred**) and an array of found records will be returned. **In node returning an error as the first parameter is a best practice**.

## Querying a database for all spells and printing each spell's name

```Javascript

db.all('select * from spells', (err, results) => {

  if (err) {
    throw err;
  }

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].name);    // loop through each result and log name of spell
  }

});

```
**To prevent SQL injection, use placeholders to safely include variables in SQL query**


#2.3 Retrieving and search spells

Implement two endpoints as discussed. An endpoint for searching spells and retrieving all spells. And another endpoint for retrieving a single spell.
To create this endpoint in hapi, you will need to define a route using the **server.route()** method. hapi matches requests with a route and then runs a handler associated with the route.

##2.3.1 Introducing server.route()

The **server.route()** method can take either an *object* to create a single route or an **array of objects** to create multiple routes.

refer to the hapi API, server.route(options) (http://hapijs.com/api#serverrouteoptions)

The *options* object passed to **server.route()** is a **configuration object**, which is list of the various bits of information that hapi needs to know to set up the route.

GET      /api/spells
{method}  {path}

```Javascript

server.route({
  method: 'GET',
  path: 'api/spells',
  handler: function(request, reply) {
     ...
  }
});

```

POST      /api/spells/1/pentagram
{method}  {path}

```Javascript

server.route([{
  method: 'POST',
  path: 'api/spells/{id}/pentagram',
  handler: function(request, reply) {
     ...
  }
}]);           //notice this is an array

```

**There are three required options:** *method, path, handler*, you'll need for every route you create. Other options can be available are specific to one feature of hapi this includes documentation, validation, or authentication.

<table class="tg">
  <tr>
    <th class="tg-031e">option</th>
    <th class="tg-031e">type</th>
    <th class="tg-031e">purpose</th>
  </tr>
  <tr>
    <td class="tg-031e">method</td>
    <td class="tg-031e">string/array</td>
    <td class="tg-031e">http verb(s) to match</td>
  </tr>
  <tr>
    <td class="tg-031e">path</td>
    <td class="tg-031e">string</td>
    <td class="tg-031e">URI path to match</td>
  </tr>
  <tr>
    <td class="tg-yw4l">handler</td>
    <td class="tg-yw4l"> function/object</td>
    <td class="tg-yw4l">defines what should happen for a matching route; e.g.<br>how to build a response</td>
  </tr>
  <tr>
    <td class="tg-yw4l">config</td>
    <td class="tg-yw4l">object</td>
    <td class="tg-yw4l">Further optional configuration for the route</td>
  </tr>
  <tr>
    <td class="tg-yw4l">config.auth</td>
    <td class="tg-yw4l">string</td>
    <td class="tg-yw4l">Authentication strategy to use on matched request(s)</td>
  </tr>
</table>