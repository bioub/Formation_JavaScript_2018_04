const contact = {
  firstName: 'Romain',
  lastName: 'Bohdanowicz',
};

for (const [key, value] of Object.entries(contact)) {
  console.log('key', key);
  console.log('value', value);
}

for (const key of Object.keys(contact)) {
  console.log('key', key);
  console.log('value', contact[key]);
}
