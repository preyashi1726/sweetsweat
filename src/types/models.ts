export interface UserModel {
  id: string
  email: string
  displayName: string
  photoUrl?: string
  coupleId?: string
  inviteCode: string
  createdAt: string
}

export interface RewardCapsule {
  id: string
  title: string
  emoji: string
  pointsRequired: number
  isUnlocked?: boolean
  unlockedAt?: string
}

export interface CoupleModel {
  id: string
  user1Id: string
  user2Id: string
  lovePoints: number
  streakDays: number
  lastCheckinDate?: string
  rewardCapsules: RewardCapsule[]
  createdAt: string
}

export enum MemoryType {
  Photo = 'photo',
  Voice = 'voice',
  Text = 'text',
}

export interface MemoryModel {
  id: string
  coupleId: string
  userId: string
  type: MemoryType
  content: string
  caption?: string
  createdAt: string
}

export enum ActivityType {
  Checkin = 'checkin',
  MemoryAdded = 'memoryAdded',
  RewardUnlocked = 'rewardUnlocked',
  StreakMilestone = 'streakMilestone',
  CoupleFormed = 'coupleFormed',
}

export interface ActivityModel {
  id: string
  coupleId: string
  userId: string
  type: ActivityType
  description: string
  pointsEarned: number
  createdAt: string
}

export interface CheckinModel {
  id: string
  userId: string
  coupleId: string
  mood: string
  energy: number
  activity: string
  note?: string
  pointsEarned: number
  createdAt: string
}
