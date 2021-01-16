# Spirit
Spirit, a purpose built anti-nuke Discord bot programmed by RisinPlayZ.

---

#### How Spirit Works

Spirit allows server owners to set strict limits on administration actions. These actions include: bans, kicks, channel creations/deletions, and role creations/deletions. Once these limits are met, their Discord permissions are automatically revoked via removing all of their roles.

---

#### Setup

*Requires Node v12 for discord.js*

**1.** Ensure the highest role the bot has is higher than others so it can remove their roles // ban the
 **2.** Set your customize server limits using _anti 

---

#### Commands

*You can mention the bot instead of using a prefix*

**`_prefix [prefix]`** Displays the current prefix, changes the prefix if specified

**`_limits [index] [value]`** Displays the limits, changes an index's value if specified

**`_reset [type]`** Resets the specified data or collection

**`_recent [ID]`** Displays recent moderation actions that can trigger the bot's limits

---

