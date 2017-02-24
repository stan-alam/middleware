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
    <th class="tg-031e">Reactive Programming</th>
    <th class="tg-031e">Traditional Programming</th>
  </tr>
  <tr>
    <td class="tg-031e">The level of abstraction of your code is high,<br>allowing you to focus on core business rules.</td>
    <td class="tg-031e">Lower level of abstraction, because you also have to<br>deal with the technology's intricacies.</td>
  </tr>
  <tr>
    <td class="tg-031e">Usually, lower development times, since you're<br>only focusing on the problem to solve, which<br>translates into fewer lines of code.</td>
    <td class="tg-031e">Usually, higher development times, because you also<br>have to workaround the limitations of the chosen<br>technology, which in turn translates into more lines of<br>code needed.</td>
  </tr>
  <tr>
    <td class="tg-031e">Writes code describing the *what to do* instead<br>of the *how to do it*, This simplifies the code <br>and makes maintenance much easier.</td>
    <td class="tg-031e">Writes code describing *how to do it* instead of *what<br>to do*, This adds extra complexity to the code.</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Values that depend on others are updated<br>automatically without the need to use any logic.<br>In the following line, the value of A gets updated<br>whenever B or C changes. <br>A: = B + C</td>
    <td class="tg-yw4l">Values do not depend on each other dynamically. <br>In the following line, the value of A is not changed <br>unless manually updated by the developer.<br><br>A = B+ C</td>
  </tr>
</table>
