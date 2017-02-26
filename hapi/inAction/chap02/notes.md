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




