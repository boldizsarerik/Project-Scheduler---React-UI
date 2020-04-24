export const RANDOM_USERS = [
  { email: 'chaki@me.com', name: 'Chaki Caronni' },
  { email: 'nanop@outlook.com', name: 'Nanop Rgiersig' },
  { email: 'dowdy@outlook.com', name: 'Dowdy Metzzo' },
  { email: 'daveewart@msn.com', name: 'Daveewart Grdschl' },
  { email: 'fwitness@optonline.net', name: 'Fwitness Tezbo' },
  { email: 'nighthawk@yahoo.com', name: 'Nighthawk Wikinerd' },
  { email: 'naupa@me.com', name: 'Naupa Telbij' },
  { email: 'jsmith@verizon.net', name: 'Jsmith Rnelson' },
  { email: 'maneesh@msn.com', name: 'Maneesh Solomon' },
  { email: 'kiddailey@yahoo.com', name: 'Kiddailey Kodeman' },
  { email: 'kodeman@att.net', name: 'Kodeman Kiddailey' },
  { email: 'solomon@att.net', name: 'Solomon Maneesh' },
  { email: 'rnelson@optonline.net', name: 'Rnelson Jsmith' },
  { email: 'telbij@msn.com', name: 'Telbij Naupa' },
  { email: 'wikinerd@gmail.com', name: 'Wikinerd Nighthawk' },
  { email: 'tezbo@optonline.net', name: 'Tezbo Fwitness' },
  { email: 'grdschl@att.net', name: 'Grdschl Daveewart' },
  { email: 'metzzo@msn.com', name: 'Metzzo Dowdy' },
  { email: 'rgiersig@att.net', name: 'Rgiersig Nanop' },
  { email: 'caronni@optonline.net', name: 'Caronni Chaki' },
];

export function getAdorableAvatar(id: string, size: number = 80) {
  return `https://api.adorable.io/avatars/${size}/${id}.png`;
}

export const avatarUrl: string =
  'https://secure.gravatar.com/avatar/c92fd31f974cc70d28d6b4c30f5e6416?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPA-1.png&size=48&s=48';