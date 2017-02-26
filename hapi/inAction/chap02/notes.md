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