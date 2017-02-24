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