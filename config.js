//paste your token in the .env

module.exports = {
  defaultPrefix: "_",
  ownerID: "467006428620783616",
  _limits: "The following are defaults.",
  adminCanChangeLimits: false,
  limits: {
    user_removals: {
      per_minute: 3,
      per_hour: 5
    },
    role_creations: {
      per_minute: 3,
      per_hour: 5
    },
    channel_creations: {
      per_minute: 3,
      per_hour: 5
    },
    role_deletions: {
      per_minute: 3,
      per_hour: 5
    },
    channel_deletions: {
      per_minute: 3,
      per_hour: 5
    },
    unbans: {
      per_minute: 3,
      per_hour: 5
    }
  },
  _config: "The following are defaults.",
  config: {
    _null: "No options to configure currently."
  }
};
