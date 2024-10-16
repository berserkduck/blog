export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Ryan',
    avatar: '',
    username: 'berserkduck',
    title: '某不知名程序员',
    desc: '喜欢用Obsidian写东西',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/berserkduck' },
      { type: 'email', icon: 'email', link: 'mailto:yanxianghe@outlook.com' },
    ],
    nameAliases: ['Ryan','berserkduck','duck'],
    emailAliases: ['yanxianghe@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
