import sha1 from 'sha1';

export function hashedPwd(password) {
  if (!(password)) {
    return null;
  }

  return sha1(password);
}

export function stub() {
}
