const GENERIC_PROFILE_NAME = 'Player';

export function getProfileName(displayName: string, email: string): string {
  const trimmedDisplayName = displayName.trim();

  if (trimmedDisplayName) {
    return trimmedDisplayName;
  }

  const emailLocalPart = email.split('@', 1)[0]?.trim();

  return emailLocalPart || GENERIC_PROFILE_NAME;
}

function getFirstAlphanumeric(value: string): string | undefined {
  return [...value].find((character) => /[\p{L}\p{N}]/u.test(character));
}

export function getProfileInitials(profileName: string): string | undefined {
  const words = profileName.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return undefined;
  }

  const firstInitial = getFirstAlphanumeric(words[0]);

  if (!firstInitial) {
    return undefined;
  }

  if (words.length === 1) {
    return firstInitial.toLocaleUpperCase();
  }

  const secondInitial = getFirstAlphanumeric(words[1]);

  return secondInitial
    ? `${firstInitial}${secondInitial}`.toLocaleUpperCase()
    : firstInitial.toLocaleUpperCase();
}
